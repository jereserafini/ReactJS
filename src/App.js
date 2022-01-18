import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContext } from './context/cartContext';


function App() {
  return (
      <CartContext.Provider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            
            
            
            <Route exact path='/' element={<ItemListContainer greeting='Bienvenidos a Impresión 3D'/>} />
            <Route exact path='/categoria/:categoriaId' element={<ItemListContainer greeting='Bienvenidos a Impresión 3D'/>} />
            <Route exact path='/detalle/:productoId' element={<ItemDetailContainer/>} />
            <Route exact path='/cart' element={<Cart/>} />

            
            
            
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
  );
}

export default App;