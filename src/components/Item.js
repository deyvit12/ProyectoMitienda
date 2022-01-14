import { ItemDetailContainer } from './ItemDetailContainer';

export function Item({product}){
    return ( 
 
    <div className="card card-body  "  >
        id: {product.id}       
    <img src={product.img} class="card-img-top w-10 rounded mx-auto d-block" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">{product.precio}</p>
      <ItemDetailContainer/>
        
    </div>
  </div>
    )

}