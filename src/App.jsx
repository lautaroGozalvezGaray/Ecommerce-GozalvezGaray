
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer/index';

function App() {
  return(
    <div className='containerApp'>
      <NavBar/>
      <ItemListContainer greeting={"Aquí van a ir los productos de la tienda"}/>
    </div>
    
  )
}

export default App;
