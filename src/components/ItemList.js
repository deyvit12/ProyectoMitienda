import {Item} from './Item'

export function ItemList({products}){
    return(
        <div>
            {products.map(product =>{
                return <Item key={product.id} product={product}/>
            })}

        </div>   
    )
}