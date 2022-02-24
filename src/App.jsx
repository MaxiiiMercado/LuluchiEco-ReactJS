import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import { BrowserRouter as Router } from 'react-router-dom'
import CartProvider from './context/CartContext'

const App = () => {
    return (
        <Router>
            <CartProvider>
                <NavBar />
                <Main />
            </CartProvider>
        </Router>
    )
}

export default App
