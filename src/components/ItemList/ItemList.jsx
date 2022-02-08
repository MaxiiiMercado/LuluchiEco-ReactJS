import React from 'react';
import Item from "../Item/Item";
import "./itemList.scss";

const ItemList = ({ products = [] }) => {
    return (
        <div className="containerTienda">
            <div className="productos">
                {products.map((product, index)=> <Item item={product} key={index}/>)}
            </div>
        </div >
    )
}

export default ItemList
