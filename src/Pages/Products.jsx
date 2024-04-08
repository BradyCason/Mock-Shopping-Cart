import ProductCard from "../Components/ProductCard";
import { useOutletContext } from "react-router-dom";
import FilterBar from "../Components/FilterBar";

export default function Products(){
    const [shopData, cart, addItemToCart, subtractItemFromCart, cartLength, sortLowHigh, sortHighLow, sortRated, selectCategory] = useOutletContext();

    return(
        <>
            <h1 className="products-title">Shop</h1>
            <FilterBar sortLowHigh={sortLowHigh} sortHighLow={sortHighLow} sortRated={sortRated} selectCategory={selectCategory}></FilterBar>
            <div className="products">
                {shopData.map((item) => (
                    <ProductCard key={item.id} cart={cart} addItemToCart={addItemToCart} subtractItemFromCart={subtractItemFromCart} item={item} cartLength={cartLength}/>
                ))}
            </div>
        </>
    )
}