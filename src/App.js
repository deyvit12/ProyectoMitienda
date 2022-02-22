import { BrowserRouter, Route } from 'react-router-dom'
import { NavBar } from './components'
import { CartProvider } from './providers/CartProvider'
import { HomePage } from './pages/Home'
import { CartPage } from './pages/Cart'
import { ProductDetailsPage } from './pages/ProductDetails'
import { CategoryPage } from './pages/Category'
import { Titulo } from './components'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="flex flex-col">
          <NavBar />
          <div className="mt-5 py-5 container">
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/p/:productId">
              <ProductDetailsPage />
            </Route>
            <Route path="/c/:categoryId">
              <CategoryPage />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}


