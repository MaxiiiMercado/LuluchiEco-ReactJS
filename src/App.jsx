import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Main/>
    </Router>
  )
}

export default App;
