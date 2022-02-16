import React from 'react';
import "./item.scss";
import {Link} from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <article className="producto wow animate__animated animate__fadeInUp">
            
            <div className="producto__nombre">
                <h3>{item.name}</h3>
            </div>
            <div className="producto__borde"></div>

            <div className='producto__img'>
                <img src={`http://drive.google.com/uc?export=view&id=${item.images}`} alt={"Imagen" + item.name}/>
            </div>

            <div className="producto__precio">
                <p>${item.price} - En Stock</p>
            </div>
            <Link to={`/item/${item.id}`} className="detailLink">
                <button type="button" className="btn btn-success sumarCarrito" data-id={item.id}>
                    Mas info
                </button>
            </Link>

        </article>
    )
}

export default Item
