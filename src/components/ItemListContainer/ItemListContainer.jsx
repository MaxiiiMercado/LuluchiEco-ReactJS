import React, { useEffect, useState } from 'react'
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
    console.log(greeting)
    const addItem = quantity => {
        alert(`Se han agregado ${quantity} productos`)
    }

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const loadProducts = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve([
                    { product_image: "/images/orinal.jpg", product_name: "Orinal Femenino", product_price: "1000", product_id: "1" },
                    { product_image: "/images/cepillo.jpg", product_name: "Cepillo de Bambú ", product_price: "350", product_id: "2" },
                    { product_image: "/images/shampoo.jpg", product_name: "Shampoo solido", product_price: "500", product_id: "3" },
                ])
            }, 2000)
        })

        loadProducts.then(data => {
            setItems(data)
            setIsLoading(false)
        })

    }, [])

    if (isLoading){
        return <h1>Cargando...</h1>
    }

    return (
        <>
            <h1>{greeting}</h1>

            <ItemList products={items} />

            <ItemCount stock={10} initial={1} onAdd={addItem} />
        </>
    )
}

export default ItemListContainer
