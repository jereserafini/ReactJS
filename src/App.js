import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div>
      <NavBar />
      <ItemCount min={1} max={10} />
      <ItemListContainer greeting='Bienvenidos a Impresión 3D'/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;