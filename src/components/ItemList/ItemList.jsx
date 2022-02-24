import React from 'react'
import Item from '../Item/Item'
import './itemList.scss'

const ItemList = ({ products = [] }) => {
    return (
        <div className="containerTienda">
            <div className="productos">
                {products.map( product => <Item key={product.id} item={product} />)}
            </div>
        </div >
    )
}

export default ItemList
