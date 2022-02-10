import React from 'react';
import { Carousel } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import "./itemDetail.scss";

const ItemDetail = ({ product }) => {
    const addItem = quantity => {
        alert(`Se han agregado ${quantity} productos`)
    }

    return (
        <>
            <div className="detalleGaleria">
                <div className="galeriaCarousel">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={product.image}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={product.image}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={product.image}
                                alt="Third slide"
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
                                {product.list}
                            </ul>
                        </div>
                        {/*
                            {product.paragraphs.map(parahraph => <p>{parahraph}</p>)}
                        */}
                    </div>


                    <div className="producto__precio">
                        <p>Precio: ${product.price} - Stock: {product.stock} items</p>
                    </div>

                    <div className="producto__cantidad">
                        <ItemCount stock={product.stock} initial={1} onAdd={addItem} dataId={product.id} />
                    </div>

                </article>
            </div>
        </>
    )
}

export default ItemDetail
