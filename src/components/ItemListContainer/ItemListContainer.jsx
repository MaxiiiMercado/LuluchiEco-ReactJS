import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({greeting}) =>{
    const addItem = quantity =>{
        alert(`Se han agregado ${quantity} productos`)
    }

    return(
        <>
            <h1>{greeting}</h1>
            
            <ItemCount stock={10} initial={1} onAdd={addItem}/>
        </>
    )
} 

export default ItemListContainer
