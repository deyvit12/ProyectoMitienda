import { useState } from 'react';

export function ItemCount({stock, initial, onAdd}){
    const [count, setCount] = useState(0)

    const handleChange = (ev)=> {
        console.log(ev.target.value)
    }
    const handleSubmit=(ev) =>{
        console.log(ev)
        debugger
    };
    return(
        <div className="flex bg-light">
            <button className=" px-4 py-2 badge bg-danger"
            onClick={()=>{ 
                setCount((prevCount)=>{
                    return prevCount - 1
                    })
                }}
            >
                -1
            </button>
           <form onSubmit={handleSubmit} className='form'>
            <input className="px-4 text-2x1" type="text" placeholder={count} onChange={handleChange}></input> 
            </form>
            <button className=" px-4 py-2 badge bg-primary"
            onClick={()=>{ 
                setCount((prevCount)=>{
                    return prevCount + 1
                    })
                }}
            >
                +1
            </button>

            <button className="mx-2 my-2 badge bg-success" type="submit" >
                Añadir al carrito
            </button>
        </div>
        
        
        )
}