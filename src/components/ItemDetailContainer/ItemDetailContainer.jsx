import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import Skeleton from '@mui/material/Skeleton'
import Products from '../../productos.json'
import './itemDetailContainer.scss'
import { useParams } from 'react-router'

const ItemDetailContainer = () => {
    const {itemId} = useParams();

    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const loadProduct = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(Products)
            }, 2000)
        })

        loadProduct.then(data => {
            setItem(data.find( (product) => product.id === itemId))
            setIsLoading(false)
        })

    }, [itemId])

    if (isLoading) {
        return (
            <div className='skeletonCont'>
                <div className='skeletonCont_left'>
                    <Skeleton variant="rectangular" width={500} height={500} />
                </div>
                <div className='skeletonCont_right'>
                    <div className='skeletonCont_right-title'>
                        <Skeleton variant="rectangular" width={500} height={60} />
                    </div>
                    <div className='skeletonCont_right-text'>
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" width={400} height={80} />
                        <div className='skeletonCont_right-botones'>
                            <section>
                                <Skeleton variant="circular" width={50} height={50} />
                                <Skeleton variant="text" width={30} />
                                <Skeleton variant="circular" width={50} height={50} />
                            </section>
                            <Skeleton variant="rectangular" width={120} height={40} />
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className="detalleContenedor">
            <ItemDetail product={item} />
        </section>
    )
}

export default ItemDetailContainer
