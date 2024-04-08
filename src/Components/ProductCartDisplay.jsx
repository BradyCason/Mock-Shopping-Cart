import { useEffect, useState } from "react"
import AddSubtractBar from "./AddSubtractBar"

export default function ProductCartDisplay({item, cart, addItemToCart, subtractItemFromCart, cartLength}){
    const [numItems, setNumItems] = useState(0);
    
    const handleAddButton = () => {
        addItemToCart(item)
        setNumItems(numItems + 1)
    }

    const handleSubtractButton = () => {
        subtractItemFromCart(item)
        setNumItems(numItems - 1)
    }

    useEffect(() =>{
        let found = false;
        for (let i = 0; i < cart.length; i++){
            if (cart[i][0] == item){
                found = true;
                setNumItems(cart[i][1])
            }
        }
        if (!found){
            setNumItems(0)
        }
    }, [cartLength, cart, item])

    return(
        <div className="product-cart-display">
            <img className="card-cart-img" src={item.image}></img>
            <div className="card-cart-right">
                <h2 className="card-cart-title">{item.title}</h2>
                <h5 className="card-cart-price">${item.price}</h5>
                {numItems > 0 ? <AddSubtractBar numItems={numItems} onAdd={handleAddButton} onSubtract={handleSubtractButton}></AddSubtractBar> : <button className="add-to-cart-button" onClick={handleAddButton}>Add to cart</button>}
            </div>
        </div>
    )
}