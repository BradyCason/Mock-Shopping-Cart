export default function AddSubtractBar({numItems, onAdd, onSubtract}){

    return(
        <div className="add-subtract-bar">
            <button className="subtract-button" onClick={onSubtract}>-</button>
            <p className="add-subtract-num-items">{numItems}</p>
            <button className="add-button" onClick={onAdd}>+</button>
        </div>
    )
}