import {ItemDetail}  from "./ItemDetail";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import  productos from "../utils/products.json";


export const ItemDetailContainer =() =>{

    const { id } = useParams();
    const [ item, setItem] = useState([]);

    useEffect(() => {
        setTimeout(()=> {
            setItem(
                productos.filter(item => item.id === parseInt(id))
            )
        }, 2000);
    },[]);

    if (item.length === 0) {
        return <p>Cargando Productos....</p>;
    } else
    {
        return (
            <ItemDetail item={item}/>
        )
    }

 }

