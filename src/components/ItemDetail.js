import { ItemCount } from "./ItemCount"
import {Link} from 'react-router-dom'
import {Button} from "@material-ui/core"

export const ItemDetail = ({ item })=> {

    

    const {id, category, name, img, precio, description } = item[0];
    
    return(
        <div  className="card card-body  " key={id} id={id}>
            <div className="card-body">
                <h2 className="card-title">{category} - {name}</h2>
                <img class="card-img-top w-10 rounded mx-auto d-block" src={img} alt="..." />
                <div>
                    <ul>
                        <li>{description}</li>
                    </ul>

                    <h3>Precio: {precio}</h3>
                </div>
                <div>
                    <ItemCount qty={1} stk={10}/>
                </div>

                <div>
                    <Button variant="contained" size ="small" disabledElevation> Añadir al Carrito </Button>

                </div>

                <ul>
                    <li>
                        <Link to={'/'}>
                           <button className="btn btn-info"> Volver a Inicio</button>
                            
                            </Link>
                    </li>
                </ul>

            </div>
            
        </div>

    )
}
