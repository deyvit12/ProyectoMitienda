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



// import React from "react";
// import "./App.css";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import {ItemListContainer} from "./components/ItemsListContainer";
// import {ItemDetailContainer} from "./components/ItemDetailContainer";
// import {CartProvider} from "./providers/CartProvider";
// import {CartPage} from './paginas/Cart'
// import { ProductDetailsPage } from './paginas/ProductDetails'



// function App() {
//   return (
//     <div >
//       <CartProvider>
//       <BrowserRouter>              
//       <NavBar/>
//         <Switch>
//             <Route exact path="/" component={ItemListContainer}/>
//             <Route path="/itemDetail/:id" component={ProductDetailsPage}/>
//             <Route path="/category/:categoryId" component={ItemListContainer} />
//             <Route path="/cart"> <CartPage /> </Route>
//           </Switch>
//       </BrowserRouter>
//       </CartProvider>
//     </div>
//   );
// }

// export default App;