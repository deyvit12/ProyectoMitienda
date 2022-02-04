import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { CartWidget } from './CartWidget'

const categories = [
  { id: 'all', name: 'INICIO' },
  { id: 'Celulares', name: 'CELULARES' },
  { id: 'Laptop', name: 'LAPTOPS' },
  
]

export function NavBar() {
  const cart = useCart()

//   const [isMenuVisible, setIsMenuVisible] = useState(false)

  return(
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
            <div className="container-fluid  ">
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                            <div className="collapse navbar-collapse   justify-content-end  " id="navbarNavDropdown">
                              <ul className="navbar-nav">
                                  
                                    <li className="nav-item">
                                                <ul className=" navbar-nav">
                                                {categories.map((category) => {
                                                        return (
                                                        <NavLink
                                                            key={category.name}
                                                            exact
                                                            activeClassName="active navbar-brand"
                                                            className="nav-link"
                                                            to={category.id === 'all' ? '/' : `/c/${category.id}`}
                                                        >
                                                            {category.name}
                                                        </NavLink>
                                                        )
                                                    })}
                                                </ul>
                                    </li>
                                     <li className="nav-item ">
                                                <Link to="/cart">
                                                     <CartWidget numOfItems={cart.length} />
                                                </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                     </div>
            </nav>

    </div>
)
}
