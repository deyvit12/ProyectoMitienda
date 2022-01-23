import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {ItemList} from './ItemList';
import productos  from "../utils/products.json"



export const ItemListContainer = (param) => {


    const { categoryId } = useParams()
    const [items, setItems] = useState([])

        useEffect(() =>{
            setTimeout(()=>{
                if (categoryId) {
                    const productosFiltrados = productos.filter(producto => producto.category === categoryId)
                    console.log(productosFiltrados)
                    setItems(productosFiltrados)
                } else{
                    setItems(productos)
                }

            }, 2000)
        }, [categoryId]);

        if (items.length === 0){
            return <p> Cargando Productos... :)</p>;
        } else {
                return(
                <>
                    <ItemList param={items}/>
                </>
                )
            }
}

