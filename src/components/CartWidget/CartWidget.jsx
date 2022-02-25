import iconCart from '../../assets/icons/cart.svg'
import './cartWidget.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { totalItems } = useContext(CartContext)

    return (
        <>
            <img className="iconCarrito" src={iconCart} alt="Icono Carrito" />
            ({totalItems})
        </>
    )
}

export default CartWidget
