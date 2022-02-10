import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <>
      <NavBar/>
      {/*<ItemListContainer greeting="Saludos desde App.jsx"/>*/}
      <ItemDetailContainer/>
    </>
  )
}

export default App;
