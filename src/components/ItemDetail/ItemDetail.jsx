import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import "./itemDetail.scss";
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {
    const [itemQuantity, setItemQuantity] = useState(0)

    const addItem = quantity => {
        setItemQuantity(quantity)
        console.log(itemQuantity)
    }

    return (
        <>
            <div className="detalleGaleria">
                <div className="galeriaCarousel">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={`http://drive.google.com/uc?export=view&id=${product.images}`}
                                alt="First slide"
                            />
                        </Carousel.Item>
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
                            <p>{product.paragraphs}</p>
                        </div>
                        <div>
                            <ul>
                                <li>{product.lists}</li>
                            </ul>
                        </div>
                    </div>


                    <div className="producto__precio">
                        <p>Precio: ${product.price} - Stock: {product.stock} items</p>
                    </div>

                    <div className="producto__cantidad">
                        {
                            itemQuantity === 0 ?
                                <ItemCount stock={product.stock} initial={product.stock > 0 ? 1 : 0} onAdd={addItem} dataId={product.id} />
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
