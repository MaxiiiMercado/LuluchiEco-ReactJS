import './finishOrder.scss';
import React, { useState, useContext } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { dataBase } from '../../firebase/Config'
import { CartContext } from '../../context/CartContext'
import procesando from '../../assets/icons/procesando.gif'
import ok from '../../assets/icons/ok.gif'
import { Link } from 'react-router-dom'


const initialState = {
    name: "",
    lastName: "",
    address: ""
}

const FinishOrder = () => {

    const { cart, clear, totalPrice } = useContext(CartContext);

    const [userInfo, setUserInfo] = useState(initialState);
    const [orderStatus, setOrderStatus] = useState(null)
    const [orderId, setOrderId] = useState(null)

    const getInfo = (e) => {
        const { value, name } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    }

    const orderConfirmed = () => {
        setUserInfo(initialState);
        clear()
        setOrderStatus('confirmed')
    }

    const saveOrder = async () => {
        setOrderStatus('processing')
        const order = {
            productsOrder: cart.map(prod => { return ({ id: prod.id, name: prod.name, quantity: prod.quantity, price: prod.price, totalProducPrice: prod.quantity * prod.price }) }),
            userInfo: userInfo,
            totalOrderPrice: totalPrice,
        }

        const ordersCollectios = collection(dataBase, "orders")
        setOrderId((await addDoc(ordersCollectios, order)).id)
        orderConfirmed(orderId)
    }

    if (orderStatus === 'confirmed') {
        return (
            <div className='d-flex justify-content-between flex-column align-items-center'>
                <img src={ok} alt="" srcset="" />
                <div className='mb-5'>
                    Su pedido ha sido enviado correctamente
                </div>
                <h3>Nro orden: <strong>{orderId}</strong></h3>
                <h3 className="animate__animated animate__pulse animate__infinite mt-4"><Link to="/products">Volver al Catalogo</Link></h3>
            </div>

        )
    }
    else if (orderStatus === 'processing') {
        return (
            <div className='d-flex justify-content-center'>
                <img src={procesando} alt="" />
            </div>
        )
    }

    return (
        <>
            <div className="form">
                <div className="form-floating mb-3 inputContainer">
                    <input type="text" name="name" value={userInfo.name} onChange={getInfo} className="form-control" id="floatingName" placeholder="Name" />
                    <label htmlFor="floatingName">Nombre</label>
                </div>
                <div className="form-floating mb-3 inputContainer">
                    <input type="text" name="lastName" value={userInfo.lastName} onChange={getInfo} className="form-control" id="floatingLastName" placeholder="Last name" />
                    <label htmlFor="floatingLastName">Apellido</label>
                </div>
                <div className="form-floating mb-3 inputContainer">
                    <input type="text" name="address" value={userInfo.address} onChange={getInfo} className="form-control" id="floatingAddress" placeholder="Address" />
                    <label htmlFor="floatingAddress">Direccion</label>
                </div>
                <button className="formButton" onClick={() => saveOrder()}>Enviar Pedido</button>
            </div>
        </>
    )
}

export default FinishOrder;
