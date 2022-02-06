import { BrowserRouter, Route } from 'react-router-dom'
import { NavBar } from './components'
import { CartProvider } from './providers/CartProvider'
import { HomePage } from './pages/Home'
import { CartPage } from './pages/Cart'
import { ProductDetailsPage } from './pages/ProductDetails'
import { CategoryPage } from './pages/Category'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="flex flex-col">
          <NavBar />
          <div className="mt-28 pb-6 mx-auto container">
            <Route exact path="/">
              <h1  className='text-center mt-5 pt-5 bg-info shadow-lg p-3 mb-5 bg-body rounded'> Deyvit Store</h1>
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


