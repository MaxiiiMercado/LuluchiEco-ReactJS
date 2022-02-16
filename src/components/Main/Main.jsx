import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer' ;
import {Routes, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Cart from '../Cart/Cart'

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/category/:itemCategory" element={<ItemListContainer/>} />
                <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </main>
    )
}

export default Main