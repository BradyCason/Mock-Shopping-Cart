import { useOutletContext } from "react-router-dom";
import ProductCartDisplay from "../Components/ProductCartDisplay";
import { useState, useEffect } from "react";

export default function Cart(){
    const [shopData, cart, addItemToCart, subtractItemFromCart, cartLength] = useOutletContext();

    const [itemsPrice, setItemsPrice] = useState(0);
    const [tax, setTax] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let price = 0;
        cart.forEach(item => {
            price += item[0].price * item[1]
        });
        setItemsPrice(Math.round(price * 100) / 100);
        setTax(Math.round(price * 7.25) / 100)
        setTotalPrice(Math.round(price * 107.25) / 100)
    }, [cartLength])

    return(
        <div className="cart-page">
            <div className="cart">
                {cart.map((item) => (
                    <ProductCartDisplay key={item[0].id} cart={cart} addItemToCart={addItemToCart} subtractItemFromCart={subtractItemFromCart} item={item[0]}/>
                ))}
            </div>
            <div className="order-summary">
                <button className="place-order-button">Place your order</button>
                <hr></hr>
                <h2>Order Summary</h2>
                <div className="order-prices">
                    <p>Items ({cartLength}):<br/>Shipping & Handling:<br/>Tax:<br/><b>Order Total:</b></p>
                    <p>${itemsPrice}<br/>$0.00<br/>${tax}<br/><b>${totalPrice}</b></p>
                </div>
            </div>
        </div>
    )
}