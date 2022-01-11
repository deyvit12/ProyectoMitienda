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
                precio: 7000
            },
            {
                id: '2',
                name:'Samsung Galaxy Z flip 3',
                precio: 4000
            },
            {
                id: '3',
                name: 'Samsung Galaxy s21 ultra',
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
