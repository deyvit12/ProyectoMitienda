import { useState } from 'react'
import { Button } from './Button'

export function ItemCount({ initialValue, minValue = 1, maxValue, onAdd }) {
  const [count, setCount] = useState(initialValue ?? minValue)

  function onIncrement(currentCount) {
    return Math.min(maxValue, currentCount + 1)
  }

  function onDecrement(currentCount) {
    return Math.max(minValue, currentCount - 1)
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center bg-gray-100">
        <Button className="btn btn-danger"
          onClick={() => setCount(onDecrement)}
          disabled={count === minValue}
        >
            -
        </Button>
        <span className="mx-4 text-3xl font-semibold flex-1 text-center select-none">
          {count}
        </span>
        <Button className="btn btn-primary"
          onClick={() => setCount(onIncrement)}
          disabled={count === maxValue}
        >
            +
        </Button>
      </div>
      <Button className="mt-2 btn btn-success" onClick={() => onAdd(count)}>
        {initialValue ? 'Actualizar el Carrito' : 'Agregar al Carrito'}
      </Button>
    </div>
  )
}


