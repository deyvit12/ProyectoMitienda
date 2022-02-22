import { Link } from 'react-router-dom'
import { Titulo } from '.'
import { Item } from './Item'

export function ItemList({ products }) {
  return (
      <div className='container '> 
      <Titulo/>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 ">
          
        {products.map((product) => {
            return (
            <Link key={product.id} to={`/p/${product.id}`}>
                <Item product={product} className="text-center shadow-sm" />
            </Link>
            )
        })}
        
        </div>
    </div>
  )
}

