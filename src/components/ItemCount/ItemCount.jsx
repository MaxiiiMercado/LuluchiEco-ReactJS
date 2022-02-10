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
                <button className="btn btn-success" disabled={counter === 1} onClick={substractItem}>-</button>
                <span>{counter}</span>
                <button className="btn btn-success" disabled={counter === stock} onClick={addItem}>+</button>
            </div>

            <button className="btn btn-success agregar" onClick={() => onAdd(counter)} data-id={dataId}>
                Añadir
            </button>
        </>
    )
}

export default ItemCount
