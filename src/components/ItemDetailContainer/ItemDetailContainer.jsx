import React, { useEffect, useState } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail";
import Skeleton from '@mui/material/Skeleton';
import './itemDetailContainer.scss'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const loadProduct = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(
                    {
                        image: "/images/cepillo1.jpg", title: "Cepillo De Dientes Ecológico Meraki", price: 300, category: "Salud", id: "1", stock: 15,
                        paragraphs: ["Los cepillos de bambú tienen la misma vida útil que los cepillos de dientes convencionales fabricados con plástico.",
                            "El bambú es una de las plantas con mayor tasa de crecimiento del mundo. En su proceso de crecimiento secuestra grandes cantidades de CO2, gas de efecto invernadero. Además, contiene agentes antibacterianos de origen natural, por lo que no requieren fertilizantes ni pesticidas para crecer."],
                        list: ["Marca: Meraki",
                            "97% biodegradables - 3% reciclable",
                            "Dureza de las cerdas: Medio",
                            "El packaging y mango pueden ser compostados."]

                        /*description: {
                            parrafos: ["Los cepillos de bambú tienen la misma vida útil que los cepillos de dientes convencionales fabricados con plástico.",
                                "El bambú es una de las plantas con mayor tasa de crecimiento del mundo. En su proceso de crecimiento secuestra grandes cantidades de CO2, gas de efecto invernadero. Además, contiene agentes antibacterianos de origen natural, por lo que no requieren fertilizantes ni pesticidas para crecer."],

                            lista: ["Marca: Meraki", 
                                "97% biodegradables - 3% reciclable",
                                "Dureza de las cerdas: Medio",
                                "El packaging y mango pueden ser compostados."]
                        }*/
                    }
                )
            }, 2000)
        })

        loadProduct.then(data => {
            setItem(data)
            setIsLoading(false)
        })

    }, [])

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
