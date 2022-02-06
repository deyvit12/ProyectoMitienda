import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button } from '../components/Button'
import { ItemImage } from '../components/Item'
import { useCart } from '../hooks/useCart'
import {createOrdenes} from '../firebase'
import { TextField } from '../components/TextField'


function CartItem({ cartItem, position, onDelete }) {
  return (
    <div className={`container row mt-5 border ${position % 2 !== 0 ? 'bg-light' : ''}`}>
      <Link className='col modal-sm'  to={`/p/${cartItem.id}`}>
        <div className="w-100">
          <ItemImage product={cartItem} />
        </div>
      </Link>
      <div className="col modal-sm">
        <h2 className="fs-3">{cartItem.title}</h2>
        <div
          className="btn"
          role="button"
          onClick={onDelete}
        >
          <img src='https://static.vecteezy.com/system/resources/previews/000/377/441/non_2x/delete-vector-icon.jpg' className='w-25'></img>
        </div>
        <div className="fs-3">
        {cartItem.price.currencyCode} {cartItem.price.value} 
        </div>
        <div className="fs-4 border">
          <span className="border">
             {cartItem.price.value * cartItem.quantity}{' '}
            {cartItem.price.currencyCode}
          </span>{' '}
          x  {cartItem.quantity} Unidades
        </div>
      </div>
    </div>
  )
}

export function CartPage() {
  const form = useForm()

  const cart = useCart()

  const carritoTitleEl = (
    <h1 className="mb-5 mt-5  pt-5 text-center fs-1">Carrito</h1>
  )

  async function onSubmit(formValues) {
    try {
      console.log({ formValues })

      const newOrderData = {
        buyer: formValues,
        items: cart.items,
        total: cart.total.toFixed(2),
      }

      const newOrderId = await createOrdenes(newOrderData)

      alert(`Gracias por tu compra. OrderID: ${newOrderId}`)

      form.reset()

      cart.clear()
    } catch (error) {
      alert(`Algo inesperado ha ocurrido.`)

      console.error(error)
    }
  }




  if (cart.isEmpty) {
    return (
      <Fragment>
        {carritoTitleEl}
        <Link to="/" className='d-flex justify-content-center'>
        <img className='' src="https://cdn-icons-png.flaticon.com/512/102/102661.png"></img>
        </Link>
        <div className=" ">
         
          <p className="fs-1 text-center my-5">Carrito Vacio</p>
          
          <Link className='d-flex justify-content-center' to="/">
            <Button className="my-5  text-center btn btn-success  mt-5">Seguir comprado</Button>
          </Link>
        </div>
      </Fragment>
    )
  }

  return (
    <Fragment>
      {carritoTitleEl}
      <div className="flex ">
        <div className="flex flex-col  ">
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
        <div className="col">


          <section  className='border'>
          <h2 className="mb-8  ">Detalle del precio</h2>
          <div className="  p-3 mb-5  ">
            <span className="flex-1 font-semibold ">Total       </span>
            <span>S/ {cart.total.toFixed(2)}</span>
          </div>
          </section>


          <section className="border bg-warning my-2">
            <h2 className="mb-4 text-3xl font-semibold">Completar pedido</h2>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="row g-3 px-3"
            >
              
              <div className='col-md-12'>
              <label for="formGroupExampleInput" className="form-label">Nombres Completos</label>
              <TextField
              className=' p-2  '
                inputProps={{
                  placeholder: 'Ingrese su Nombre',
                  required: true,
                  ...form.register('name'),
                }}
              />
              </div >
              <div className='col-md-12'>
              <label for="inputEmail4" className="form-label">Correo Electronico</label>
              <TextField
                inputProps={{
                  placeholder: 'ejemplo@example.com',
                  required: true,
                  ...form.register('email'),
                }}
              />
              </div>

              <div className='col-12'>
              <label for="inputAddress" className="form-label">Telefono</label>

              <TextField
                inputProps={{
                  placeholder: '999999999',
                  required: true,
                  ...form.register('phone'),
                }}
              />
              </div>

              <div className='col-12'>
              <label for="inputAddress" className="form-label">Direccion</label>

              <TextField
                inputProps={{
                  placeholder: 'Av.Ejemplo 3232',
                  required: true,
                  ...form.register('direction'),
                }}
              />
              </div>




              <Button 
              className='btn btn-primary col-md-2'
                disabled={cart.length === 0}
                isLoading={form.formState.isSubmitting}
              >
                Finalizar compra
              </Button>
            </form>


          </section>
        </div>
      </div>
    </Fragment>
  )
}
