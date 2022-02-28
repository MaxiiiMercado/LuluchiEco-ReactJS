import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import imgCargando from '../../assets/icons/cargando.gif'
import { useParams } from 'react-router'
import { dataBase } from '../../firebase/Config'
import { collection, getDocs } from 'firebase/firestore'

const ItemListContainer = () => {
    const { itemCategory } = useParams()

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getItems = async () => {
            const productsCollections = await getDocs(collection(dataBase, "products"))
            const productList = []
            productsCollections.forEach(product => {
                if (product.data().category === itemCategory || !itemCategory)
                    productList.push({ ...product.data(), id: product.id })
            })

            setItems(productList)
            setIsLoading(false)
        }
        getItems()
        setIsLoading(true)

    }, [itemCategory])

    if (isLoading) {
        return (
            <div className='d-flex flex-row justify-content-center'>
                <img src={imgCargando} alt="cargando" />
            </div>
        )
    }

    return (
        <ItemList products={items} />
    )
}

export default ItemListContainer
