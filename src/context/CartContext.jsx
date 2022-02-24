import { createContext, useState } from 'react'

export const CartContext = createContext()
const { Provider } = CartContext

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            cart.find(e => e.id === item.id).quantity += quantity
        } else {
            item.quantity = quantity
            setCart([...cart, item])
            console.log(cart)
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
        <Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
            {children}
        </Provider>
    )
}

export default CartProvider
