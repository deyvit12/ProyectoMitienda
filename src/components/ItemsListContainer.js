import { ItemCount } from './ItemCount';
import {ItemList} from './ItemList';
import React, {useEffect, useState} from 'react';


const myPromise = new Promise((resolve, reject) =>{

    let exito = true
    if (exito){
         setTimeout(() => {
            const products=[
            {
                id: '1',
                name: 'Samsung Galazy z fold 3',
                img: "https://images.samsung.com/ar/smartphones/galaxy-z-fold3-5g/buy/zfold3_carousel_mainsinglekv_mo.jpg",
                precio: 7000,
                detail: 155
            },
            {
                id: '2',
                name:'Samsung Galaxy Z flip 3',
                img: "https://m.media-amazon.com/images/I/716P9qOKcUL._AC_SL1500_.jpg",
                precio: 4000
            },
            {
                id: '3',
                name: 'Samsung Galaxy s21 ultra',
                img:"https://falabella.scene7.com/is/image/FalabellaPE/17892255_1?wid=800&hei=800&qlt=70",
                precio: 5000
            }]

            resolve(products)
        },3000)
    }
    else {
        reject("Error")
    }

})

export function ItemsListContainer(){
    const [products, setProducts] = useState(null)

    useEffect(() => {
        myPromise
        .then(res => setProducts(res))

            
        
    },[])

    if(products == null) {
        return(
            <div>Loading....</div>
        )
    }

    return (
        <div>
            <ItemCount stock={6} initial={1}/>
            <ItemList products={products}/>
        </div>
    )
    

}
