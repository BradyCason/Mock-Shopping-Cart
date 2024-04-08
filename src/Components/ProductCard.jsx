import { useEffect, useState } from "react"
import AddSubtractBar from "./AddSubtractBar"
import Rating from 'react-rating';
import Stars from "./Stars";

export default function ProductCard({item, cart, addItemToCart, subtractItemFromCart, cartLength}){
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
        <div className="product-card">
            <img className="card-img" src={item.image}></img>
            <div className="card-lower">
                <h2 className="card-title">{item.title}</h2>
                <div className="rating">
                    <p className="no-margin-p">{item.rating.rate}</p>
                    <Stars rating={item.rating.rate} />
                    <p className="no-margin-p">({item.rating.count})</p>
                </div>
                <h5 className="card-price">${item.price}</h5>
                {numItems > 0 ? <AddSubtractBar numItems={numItems} onAdd={handleAddButton} onSubtract={handleSubtractButton}></AddSubtractBar> : <button className="add-to-cart-button" onClick={handleAddButton}>Add to cart</button>}
            </div>
        </div>
    )
}