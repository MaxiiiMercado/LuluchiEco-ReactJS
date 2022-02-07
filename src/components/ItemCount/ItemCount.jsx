import { useState } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {
    const [counter, setCounter] = useState(initial);

    const addItem = () => {
        setCounter(counter + 1)
    }

    const substractItem = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <button disabled={counter === 1} onClick={substractItem}>-</button>
            {counter}
            <button disabled={counter === stock} onClick={addItem}>+</button>
            <div>
                <button onClick={() => onAdd(counter)}>Agregar</button>
            </div>
        </div>
    )
}

export default ItemCount
