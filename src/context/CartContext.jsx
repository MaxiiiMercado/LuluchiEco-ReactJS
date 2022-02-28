import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()
const { Provider } = CartContext

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let cantItems = 0
        let priceItems = 0
        if (cart.length) {
            cart.forEach(prod => {
                cantItems += prod.quantity
                priceItems += prod.quantity * prod.price
            })
        }
        setTotalItems(cantItems)
        setTotalPrice(priceItems)

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
