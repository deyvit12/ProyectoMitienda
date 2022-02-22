import { classNames } from '../utils/classNames';



export function ItemImage({ product }) {
  return (
    <div className="py-3 px-3">
      <img
        src={product.pictureUrl}
        alt={product.title}
        className=" card-img-top"
      />
    </div>
  )
}

export function Item({ product, className }) {
  return (
    <div 
      className={classNames(
        className,
        'card   mb-5 mt-5  text-dark bg-light  '
      )}
    >
     
      <div className="card-header">
        <div className="  fs-5 p-3 text-decoration-none fw-bolder badge text-body">
          {product.title}
        </div>
      </div>
      <ItemImage product={product} />
      <div className="absolute bottom-0 right-0 ">
        <div className="badge bg-primary text-wrap mx-4">
        {product.price.currencyCode} {product.price.value} 
          </div>
          <div className="btn btn-sm btn-outline-secondary m-3">
            Stock: {product.stock}
          </div>

      </div>
    
    </div>
  )
}



