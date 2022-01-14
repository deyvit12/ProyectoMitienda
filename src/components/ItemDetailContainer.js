import { ItemDetail } from "./ItemDetail";
import React, {useEffect, useState} from 'react';


function fetchItem(){
    return new Promise((resolve)=>{
        const detalleProducto =[
            {
                id: '1',
                name: 'Samsung Galazy z fold 3',
                precio: 7000,
                caracteristica: "lorem  ajfasfasf",
                envio: "Gratis"
            },
            {
                id: '2',
                name:'Samsung Galaxy Z flip 3',
                precio: 4000,
                caracteristica: "lorem  ajfasfasf",
                envio: "Gratis"
            },
            {
                id: '3',
                name: 'Samsung Galaxy s21 ultra',
                precio: 5000,
                caracteristica: "lorem  ajfasfasf",
                envio: "Gratis"
            }]
        resolve(detalleProducto)

    },2000)
}

export function ItemDetailContainer(){
    const [detalleProducto, setItem] = useState(null)
    const [mostrar, setMostrar] = useState(false)

    useEffect(() =>{
        async function populateState(){
            const data = await fetchItem()

            setItem(data)
        }

        populateState()
    }, [])

    

    return (
        <div>
            <button className="btn btn-primary"  href="#"  
            onClick={() => setMostrar(!mostrar)}> Comprar </button>
            {
                mostrar
                    ?
                    <div>   
                        <ItemDetail detalleProducto={detalleProducto}/>
                    </div>
                    :null
            }
        </div>
    )
}