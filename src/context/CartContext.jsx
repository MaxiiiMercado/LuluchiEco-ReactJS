import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()
const { Provider } = CartContext

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (cart.length === 1){
            setTotalItems(cart[0].quantity)
            setTotalPrice(cart[0].quantity * cart[0].price)
        }
        else if (cart.length >= 2){
            setTotalItems(cart.reduce( (itemA,itemB) => itemA.quantity + itemB.quantity))
            setTotalPrice(cart.reduce( (itemA,itemB) => (itemA.price*itemA.quantity) + (itemB.price*itemB.quantity)))
        }
        else{
            setTotalItems(0)
            setTotalPrice(0)
        }

    }, [cart])

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            cart.find(e => e.id === item.id).quantity += quantity
            setCart([...cart])
        } else {
            item.quantity = quantity
            setCart([...cart, item])
        }
    }

    const removeItem = id => {
        setCart(cart.filter(e => e.id !== id))
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = id => {
        return cart.some(e => e.id === id)
    }

    return (
        <Provider value={{ cart, addItem, removeItem, clear, totalItems, totalPrice }}>
            {children}
        </Provider>
    )
}

export default CartProvider
