import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import {ItemListContainer} from "./components/ItemsListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer";
import {CartProvider} from "./providers/CartProvider";
import {CartPage} from './paginas/Cart'
import { ProductDetailsPage } from './paginas/ProductDetails'



function App() {
  return (
    <div >
      <CartProvider>
      <BrowserRouter>              
      <NavBar/>
        <Switch>
            <Route exact path="/" component={ItemListContainer}/>
            <Route path="/itemDetail/:id" component={ProductDetailsPage}/>
            <Route path="/category/:categoryId" component={ItemListContainer} />
            <Route path="/cart"> <CartPage /> </Route>
          </Switch>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;