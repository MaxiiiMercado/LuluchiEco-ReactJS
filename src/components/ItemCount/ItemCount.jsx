import { useState } from "react"
import './itemCount.scss'

const ItemCount = ({ stock, initial, onAdd, dataId }) => {
    const [counter, setCounter] = useState(initial);

    const addItem = () => {
        setCounter(counter + 1)
    }

    const substractItem = () => {
        setCounter(counter - 1)
    }

    return (
        <>
            <div className="contadores">
                <button className="btn btn-success" disabled={counter === 1 || initial === 0} onClick={substractItem}>-</button>
                <span>{counter}</span>
                <button className="btn btn-success" disabled={counter === stock || initial === 0} onClick={addItem}>+</button>
            </div>

            <button className="btn btn-success agregar" disabled={initial === 0}onClick={() => onAdd(counter)} data-id={dataId}>
                Añadir
            </button>
            
        </>
    )
}

export default ItemCount
