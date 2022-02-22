import { useState } from 'react'
import { Button } from './Button'
import swal from 'sweetalert'


export function ItemCount({ initialValue, minValue = 1, maxValue, onAdd }) {
  const [count, setCount] = useState(initialValue ?? minValue)
  const mostrarAlert=()=>{
    swal({
      title: "Genial...!!!",
      text: "Se añadio Al Carrito",
      icon: "success",
      button: "Aceptar",
      timer: "4000",
    });
  }

  function onIncrement(currentCount) {
    return Math.min(maxValue, currentCount + 1)
  }

  function onDecrement(currentCount) {
    return Math.max(minValue, currentCount - 1)
  }

  return (
    <div className="flex flex-col ">
      <div>
        <Button className="btn btn-danger"
          onClick={() => setCount(onDecrement)}
          disabled={count === minValue}
        >
            -
        </Button>
        <span className="mx-4  text-center">
          {count}
        </span>
        <Button className="btn btn-primary"
          onClick={() => setCount(onIncrement)}
          disabled={count === maxValue}
        >
            +
        </Button>
      </div>
      <Button className="mt-2 btn btn-success" 
        onClick={() => onAdd(count)}
         >
        <div onClick={()=>mostrarAlert()}>
        {initialValue ? 'Actualizar Carrito' : 'Añadir al Carrito'}
        </div>
      </Button>
      
      
    </div>
    
    
  )
}


