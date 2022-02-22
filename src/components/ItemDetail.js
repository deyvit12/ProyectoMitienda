import { ItemCount } from './ItemCount'
import { useCart } from '../hooks/useCart'
import swal from 'sweetalert'


export function ItemDetail({ product }) {
  const cart = useCart()

  const cartItem = cart.getItem(product.id)

  function onAddToCart(quantity) {
    cart.addItem({ ...product, quantity })
  }

  return (
    <div className=" container">
      <div className="row pb-5 ">
          
        <div className="mt-4">
          <div className=" fw-bolder fs-1">
            {product.title}
          </div>
        </div>
        <div className="col">
          <img
            className="w-100 shadow-lg p-3 mb-5 bg-body rounded"
            src={product.pictureUrl}
            alt={product.title}
          />
        </div>
        <div className="col flex text-center">
          <div className="shadow-lg p-5 mb-5 bg-body rounded ">
          <div className=" fs-1 p-2 text-dark position-relative badge " >
          {product.price.currencyCode} {product.price.value}  <span class="position-absolute fs-6 top-0 start-100 translate-middle badge rounded-pill bg-danger">oferta</span>

            
          </div>
          <div className="badge text-danger shadow mb-5 rounded m-3">
           {product.stock} Unidades Disponibles
        </div>
            <ItemCount
              initialValue={cartItem?.quantity}
              maxValue={product.stock}
              onAdd={onAddToCart}
            />
          </div>
          
        </div>
      </div>
      
      <div className=" pt-3 flex ">
        <div className="fs-2">{product.title} - Descripción</div>
        <div
          className="border-top fst-italic"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />

      </div>
    </div>
  )
}


