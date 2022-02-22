import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button } from '../components/Button'
import { ItemImage } from '../components/Item'
import { useCart } from '../hooks/useCart'
import {createOrdenes} from '../firebase'
import { TextField } from '../components/TextField'
import swal from 'sweetalert'

function CartItem({ cartItem, position, onDelete }) {

  return (
    <div className={`container row mt-3 border ${position % 2 !== 0 ? 'bg-light' : ''}`}>
      <Link className='col modal-sm'  to={`/p/${cartItem.id}`}>
        <div className="w-100 shadow-lg p-3 mb-1 bg-body rounded">
          <ItemImage product={cartItem} />
        </div>
      </Link>
      <div className="col-8 ">
        <div className="row">
          <h2 className="fs-3 mb-5 col">{cartItem.title}</h2>
          <div
            className="btn col"
            role="button"
            onClick={onDelete}
            >
            <img      
              src='https://static.vecteezy.com/system/resources/previews/000/377/441/non_2x/delete-vector-icon.jpg' className='w-25 '
              >
            </img>
          </div>
        </div>

        <div className="fs-3 rounded-pill d-inline p-2 bg-primary text-white">
        {cartItem.price.currencyCode} {cartItem.price.value} 
        </div>
        <div className="fs-4 border mt-5 mb-3  p-2 bg-dark text-white ">
          <span className="">
             {cartItem.price.currencyCode}
             {cartItem.price.value * cartItem.quantity}{' '}
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
    <h1 className='text-center fst-italic bg-info bg-body rounded'>Carrito De Compras</h1>
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

      swal("Gracias por tu compra",`Numero de Orden: ${newOrderId}`,"success");

      form.reset()

      cart.clear()
    } catch (error) {
      swal("ERROR", "Algo Inesperado ha Ocurrido","error" );

      console.error(error)
    }
  }




  if (cart.isEmpty) {
    return (
      <Fragment>
        {carritoTitleEl}
        <Link to="/" className='d-flex justify-content-center'>
        <img className='w-25' src="https://cdn-icons-png.flaticon.com/512/102/102661.png"></img>
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
    <Fragment className="flex ">
      {carritoTitleEl}
      <div className="row ">
        <div className="col ">
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


        <div className="col-4">

          <section className="border bg-warning my-2">
            <h2 className="mb-4 text-center">Completar Compra</h2>
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
              <label for="inputEmail4" >Correo Electronico</label>
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
              className='btn btn-primary col-md-5 m-3'
                disabled={cart.length === 0}
                isLoading={form.formState.isSubmitting}
              >
                Finalizar compra
              </Button>
            </form>
          </section>
        </div>
        <section  className=' my-3'>
          <h2 className="mb-8  ">Resumen de Mi Orden</h2>
          <div className="  p-3 mb-5 badge bg-primary text-wrap ">
            <span className="flex-1 font-semibold ">Total:      </span>
            <span>S/ {cart.total.toFixed(2)}</span>
          </div>
          </section>
      </div>
    </Fragment>
  )
}
