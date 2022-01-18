import { ItemDetail } from "./ItemDetail";
import React, {useEffect, useState} from 'react';


function fetchItem(){
    return new Promise((resolve)=>{
       resolve({ItemDetail})
    })
}

export function ItemDetailContainer(){
    const [item, setItem] = React.useState(null)
    const [mostrar, setMostrar] = useState(false)

    React.useEffect(() =>{
        async function listaDetalles(){
            const data = await fetchItem()
            setItem(data)
        }

        listaDetalles()
    }, [])

    

    return (
        <div>
            <button className="btn btn-primary"  href="#"  
            onClick={() => setMostrar(!mostrar)}> Comprar </button>
            {
                mostrar
                    ?
                    <div>   
                        <ItemDetail item={item} />
                    </div>
                    :null
            }
        </div>
    )
}