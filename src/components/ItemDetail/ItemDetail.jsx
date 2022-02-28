import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ product }) => {
    const [itemQuantity, setItemQuantity] = useState(0)
    const { addItem } = useContext(CartContext)

    const addItemToCart = quantity => {
        addItem(product, quantity)
        setItemQuantity(quantity)
    }

    return (
        <>
            <div className="detalleGaleria">
                <div className="galeriaCarousel">
                    <Carousel>
                        {
                            product.images?.map((element, i) =>
                                <Carousel.Item key={i}>
                                    <img
                                        className="d-block"
                                        src={`http://drive.google.com/uc?export=view&id=${element}`}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            )
                        }
                    </Carousel>
                </div>
            </div>
            <div className="detalleDatos">
                <article className="producto wow animate__animated animate__fadeInUp">

                    <div className="producto__nombre">
                        <h1>{product.title}</h1>
                    </div>

                    <div className="producto__borde"></div>

                    <div className="producto__descripcion">
                        <div className="parrafos">
                            {
                                product.paragraphs?.map((element, i) =>
                                    <p key={i}>{element}</p>
                                )
                            }
                        </div>
                        <div className='lista'>
                            <ul>
                                {
                                    product.list?.map((element, i) =>
                                        <li key={i}>{element}</li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>


                    <div className="producto__precio">
                        <p>Precio: ${product.price} - Stock: {product.stock} items</p>
                    </div>

                    <div className="producto__cantidad">
                        {
                            itemQuantity === 0 ?
                                <ItemCount stock={product.stock} initial={1} onAdd={addItemToCart} dataId={product.id} />
                                : <Link to="/cart">
                                    <button className="btn btn-success agregar">
                                        Ir al carrito
                                    </button>
                                </Link>
                        }
                    </div>

                </article>
            </div>
        </>
    )
}

export default ItemDetail
