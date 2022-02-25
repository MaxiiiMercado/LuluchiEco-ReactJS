import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './cart.scss';
import emptyCart from '../../assets/icons/carritoVacio.png'

const Cart = () => {

    const { cart, removeItem, clear, totalPrice } = useContext(CartContext)

    return (
        <>
            {!cart.length ?
                <div className="carritoVacio">
                    <h2>No hay Items en el carrito</h2>
                    <img src={emptyCart} alt="Carrito Vacio" />
                    <h3 className="animate__animated animate__pulse animate__infinite"><Link to="/products">Volver al Catalogo</Link></h3>
                </div>
                :
                <div className="contCarrito">
                    <div className="productosCarrito">
                        {
                            cart.map(cartItem =>
                                <div key={cartItem.id} className="itemCarrito">
                                    <div className="itemCarrito__imagen">
                                        <img src={`http://drive.google.com/uc?export=view&id=${cartItem.images}`} alt={cartItem.id} />
                                    </div>
                                    <div className="itemCarrito__titulo">
                                        <span>{cartItem.name}</span>
                                    </div>
                                    <div className="itemCarrito__cantPrec">
                                        <div className="itemCantidad">
                                            <p>Cantidad: </p><span>x{cartItem.quantity}</span>
                                        </div>
                                        <div className="itemPrecio">
                                            <span>${cartItem.price * cartItem.quantity}</span>
                                        </div>
                                    </div>
                                    <div className="itemCarrito__borrar">
                                        <button onClick={() => removeItem(cartItem.id)} className="btn btn-danger">Eliminar</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div><h1>Total: ${totalPrice}</h1></div>
                    <div>
                        <button onClick={() => clear()} className="btn btn-danger btnsCarrito">Vaciar carrito</button>
                        <button className="btn btn-success btnsCarrito">Finalizar Compra</button>
                        <Link to="/products"><button className="btn btn-secondary btnsCarrito">Seguir comprando</button></Link>
                    </div>
                </div >
            }
        </>
    )
}

export default Cart
