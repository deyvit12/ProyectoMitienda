import { useState } from 'react';
export function ItemCount({stock, initial, onAdd}){
    const [count, setCount] = useState(0)

    return(
        <div className="flex bg-light">
            <h2>Laptop Hp OMEN</h2>
            <button className=" px-4 py-2 badge bg-danger"
            onClick={()=>{ 
                setCount((prevCount)=>{
                    return prevCount - 1
                    })
                }}
            >
                -1
            </button>
            <span className="px-4 text-2x1">{count}</span>
            <button className=" px-4 py-2 badge bg-primary"
            onClick={()=>{ 
                setCount((prevCount)=>{
                    return prevCount + 1
                    })
                }}
            >
                +1
            </button>

            <button className="mx-2 my-2 badge bg-success">
                Añadir al carrito
            </button>
        </div>
        
        
        )
}