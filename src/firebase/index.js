import { firestore } from "firebase";
import { getFirestore } from "./connector";

function documentToProduct(document){
    return{
        id: document.id,
        ...document.data(),
    }
}

export async function getAllProducts(){
    const dataBase = getFirestore()
    const snapshot = await dataBase.collection('products').get()
    const products = snapshot.docs.map(documentToProduct)
    return products
}



export async function getProductById(productId){
    const dataBase = getFirestore()
    const doc = await dataBase.collection('products').doc(productId).get()

    if (!doc.exists){
        return null
    }
    return documentToProduct(doc)

}



export async function getProductsByCategoryId(categoryId){
    const dataBase = getFirestore()
    const snapshot = await dataBase
        .collection('products')
        .where('categoryId', '==' , categoryId)
        .get()

    const products = snapshot.docs.map(documentToProduct)
    return products

}


export async function createOrdenes(orden) {
    const dataBase = getFirestore()
    const cartItemsIds = orden.items.map((item) => item.id)
    const snapshot = await dataBase
        .collection("products")
        .where(firestore.FieldPath.documentId(), 'in' , cartItemsIds)
        .get()

    const batch = dataBase.batch()
    const productosSinStock = []    

    snapshot.docs.forEach((document, index)=> {
        const stock = document.data().stock
        const quantity = orden.items[index].quantity

        if (stock >= quantity){
            batch.update(document.ref, {stock: stock - quantity})
        }else{
            const product = documentToProduct(document)
            productosSinStock.push(product)
        }
    })

    if (productosSinStock.length !==0){
        throw Error('Stock Insuficiente')
    }
    await batch.commit()

    const data = {
        buyer: orden.buyer,
        items: orden.items,
        createdAt: firestore.Timestamp.fromDate(new Date()),
        total: orden.total,
    }

    const document = await dataBase.collection('ordenes').add(data)
    return document.id
}