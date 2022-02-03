import { Link } from 'react-router-dom'
import { Item } from './Item'

export function ItemList({ products }) {
  return (
      <div className='container mt-5'> 
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {products.map((product) => {
            return (
            <Link key={product.id} to={`/p/${product.id}`}>
                <Item product={product} className="" />
            </Link>
            )
        })}
        
        </div>
    </div>
  )
}

