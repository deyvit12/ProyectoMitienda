import {Link} from 'react-router-dom'

export const Item = ({ item }) => {

  return(
        <div className="card card-body" key={item.id} id={item.id}  >
            <h2>{item.name}</h2>
          <img src={item.img} class="card-img-top w-10 rounded mx-auto d-block" alt=""/>
          <div className="card-body">
          <p className="card-text">{item.precio}</p>

          <a>
            <Link to={`/itemDetail/${item.id}`}>
              <button className=' btn btn-danger'> Ver Mas Detalles</button>
              </Link>
          </a>
   
        
    </div>
  </div>
    
    )
}

