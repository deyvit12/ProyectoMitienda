import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import {ItemListContainer} from "./components/ItemsListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer";


function App() {
  return (
    <div >
      <BrowserRouter>              
      <NavBar/>
        <Switch>
            <Route exact path="/" component={ItemListContainer}/>
            <Route path="/itemDetail/:id" component={ItemDetailContainer}/>
            <Route path="/category/:categoryId" component={ItemListContainer} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;