import { useState } from 'react';

export function ItemCount({initialValue, minValue = 1, maxValue ,onAdd}){
    const [count, setCount] = useState(initialValue ?? minValue)


    function creciente(currentCount) {
        return Math.min(maxValue, currentCount + 1)
    }

    function decreciente(currentCount){
        return Math.max(minValue, currentCount - 1)
    }

    return(
        <div className="flex flex-col w-full bg-light">
            <button className=" px-4 py-2 badge bg-danger"
            onClick={()=>setCount(decreciente)}
            disabled={count === minValue}
            >
                -1
            </button>

            <span className="mx-4 text-3xl font-semibold flex-1 text-center select-none">
             {count}
            </span>
            
           {/* <form onSubmit={handleSubmit} className='form'>
            <input className="px-4 text-2x1" type="text" placeholder={count} onChange={handleChange}></input> 
            </form> */}

            <button className=" px-4 py-2 badge bg-primary"
            onClick={()=>setCount(creciente)}
            disabled={count === minValue}
            >
                +1
            </button>

            <button className="mx-2 my-2 badge bg-success" onClick={()=> onAdd(count)} >
                {initialValue ?"Actualicar el Carrito" : "Añadir al Carrito"}
            </button>
        </div>
        
        
        )
}