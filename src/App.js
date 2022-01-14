import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { ItemsListContainer } from './components';
import { ItemDetailContainer } from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemsListContainer/>
        <header className="">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
    </div>
  

    
  );
}

export default App;