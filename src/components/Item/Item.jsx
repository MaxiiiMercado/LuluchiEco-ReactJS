import React from 'react';
import "./item.scss";

const Item = ({ item }) => {
    return (
        <article className="producto wow animate__animated animate__fadeInUp">
            
            <div className="producto__nombre">
                <h3>{item.product_name}</h3>
            </div>
            <div className="producto__borde"></div>

            <div className='producto__img'>
                <img src={item.product_image} alt={"Imagen" + item.product_name}/>
            </div>

            <div className="producto__precio">
                <p>${item.product_price} - En Stock</p>
            </div>

            <button type="button" className="btn btn-success sumarCarrito" data-id={item.product_id}>
                Añadir
            </button>

        </article>
    )
}

export default Item
