import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Saludos desde App.jsx"/>
    </>
  )
}

export default App;
