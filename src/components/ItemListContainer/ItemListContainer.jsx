import React, { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList";
import Products from "../../productos.json";
import imgCargando from "../../assets/icons/cargando.gif"
import { useParams } from 'react-router';

const ItemListContainer = () => {
    const {itemCategory} = useParams()

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const loadProducts = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(Products)
            }, 2000)
        })

        loadProducts.then(data => {
            if (itemCategory){
                setItems(data.filter( product => {
                    if (product.category === itemCategory)
                        return product
                    return null
                }))
            }
            else
                setItems(data)
            
            setIsLoading(false)
        })

    }, [itemCategory])

    if (isLoading){
        return(
            <div className='d-flex flex-row justify-content-center'>
                <img src={imgCargando} alt="cargando"/>
            </div>
        ) 
    }

    return (
        <>
            <ItemList products={items} />
        </>
    )
}

export default ItemListContainer
