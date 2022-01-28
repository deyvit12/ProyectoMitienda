import {Link} from 'react-router-dom'

export function ItemImage({ item }) {
  return (
    <div className="absolute inset-0 transform transition hover:scale-125 ease-in-out">
      <img
        src={item.img}
        alt={item.name}
        className="h-full w-full object-cover"
      />
    </div>
  )
}

export const Item = ({ item }) => {

  return(
        <div className="card card-body" key={item.id} id={item.id}  >
            <h2>{item.name}</h2>
          <img src={item.img} class="card-img-top w-10 rounded mx-auto d-block" alt=""/>
          <div className="card-body">
          <p className="card-text">Precio S/ {item.precio}</p>
          <h3>Stock {item.stock}</h3>

          <a>
            <Link to={`/itemDetail/${item.id}`}>
              <button className=' btn btn-danger'> Ver Mas Detalles</button>
              </Link>
          </a>
   
        
    </div>
  </div>
    
    )
}

