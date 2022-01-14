import {Item} from './Item'

// export function ItemDetail({detalleProducto}){
//     return (
//             <div>
//                 id: {detalleProducto.id}
//                 name: {detalleProducto.name}
//                 precio: {detalleProducto.precio}
//                 caracteristica: {detalleProducto.carcteristica}
//                 envio: {detalleProducto.envio}
//             </div>
//     )
            
// }
// }
export function ItemDetail ({detalleProducto}){
    return(
        <div>
            {detalleProducto.map(product =>{
                return(<div>
                        id: {product.id}
                        name: {product.name}
                        precio: {product.precio}
                        caracteristicas: {product.carcteristica}
                        envio: {product.envio}
                    </div>
                )
            })}
        </div>
        
    )
}

