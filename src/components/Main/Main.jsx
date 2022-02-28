import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import {Routes, Route} from 'react-router-dom'
import Home from '../Home/Home'
import Cart from '../Cart/Cart'
import FinishOrder from '../FinishOrder/FinishOrder'

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/products" element={<ItemListContainer/>} />
                <Route path="/category/:itemCategory" element={<ItemListContainer/>} />
                <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/order" element={<FinishOrder/>}/>
            </Routes>
        </main>
    )
}

export default Main
