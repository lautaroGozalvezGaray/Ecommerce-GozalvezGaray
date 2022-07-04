
import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/index';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { NotFound } from './components/NotFound';

function App() {
  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>

    </BrowserRouter>
    
  )
}

export default App;
