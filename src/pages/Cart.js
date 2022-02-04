import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { ItemImage } from '../components/Item'
import { useCart } from '../hooks/useCart'

function CartItem({ cartItem, position, onDelete }) {
  return (
    <div className={`container row mt-5 border ${position % 2 !== 0 ? 'bg-gray-100' : ''}`}>
      <Link className='col' to={`/p/${cartItem.id}`}>
        <div className="w-25">
          <ItemImage product={cartItem} />
        </div>
      </Link>
      <div className="col">
        <h2 className="font-semibold text-3xl">{cartItem.title}</h2>
        <div
          className="absolute right-0 top-0 p-4 bg-red-500 text-gray-100 hover:text-white"
          role="button"
          onClick={onDelete}
        >
          <img src='https://static.vecteezy.com/system/resources/previews/000/377/441/non_2x/delete-vector-icon.jpg' className='w-25'></img>
        </div>
        <div className="text-xl font-semibold mt-1 text-indigo-600">
        {cartItem.price.currencyCode} {cartItem.price.value} 
        </div>
        <div className="text-2xl font-semibold mt-auto ml-auto">
          <span className="text-indigo-600">
           S/  {cartItem.price.value * cartItem.quantity}{' '}
            {cartItem.price.currencyCode}
          </span>{' '}
          x  {cartItem.quantity} Unidades
        </div>
      </div>
    </div>
  )
}

export function CartPage() {
  const cart = useCart()

  const carritoTitleEl = (
    <h1 className="mb-6 text-4xl font-semibold">Carrito</h1>
  )

  if (cart.isEmpty) {
    return (
      <Fragment>
        {carritoTitleEl}
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl">Carrito Vacio</p>
          <Link to="/">
            <Button className="mt-8">Seguir comprado</Button>
          </Link>
        </div>
      </Fragment>
    )
  }

  return (
    <Fragment>
      {carritoTitleEl}
      <div className="flex w-full">
        <div className="flex flex-col w-[60%] overflow-y-auto h-[720px]">
          {cart.items.map((cartItem, index) => {
            return (
              <CartItem
                key={cartItem.id}
                cartItem={cartItem}
                position={index}
                onDelete={() => cart.removeItem(cartItem.id)}
              />
            )
          })}
        </div>
        <div className="flex flex-col flex-1 ml-8">
          <h2 className="mb-8 text-3xl font-semibold">Detalle del precio</h2>
          <div className=" shadow-lg p-3 mb-5 bg-body rounded ">
            <span className="flex-1 font-semibold ">Total       </span>
            <span>S/ {cart.total.toFixed(2)}  </span>
          </div>
          <Button className=" btn btn-primary mt-3" disabled={cart.length === 0}>
            Finalizar compra
          </Button>
        </div>
      </div>
    </Fragment>
  )
}
