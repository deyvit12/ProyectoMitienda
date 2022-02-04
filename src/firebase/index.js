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
        .collection('products').where('categoryId', '==' , categoryId).get()

    const products = snapshot.docs.map(documentToProduct)
    return products

}