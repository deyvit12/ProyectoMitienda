import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { ItemsListContainer } from './components';
import { ItemDetailContainer } from './components/ItemDetailContainer';


function App() {
  return (
    <>
      <BrowserRouter>              
      <NavBar/>
        <Switch>
            <Route exact path='/'>
            <div className="App">
              <ItemsListContainer/>
            </div>
            </Route>
            <Route path="/producto/:id">
            <div className="App">
              <ItemsListContainer/>
            </div>
            </Route>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;