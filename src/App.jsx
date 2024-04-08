import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom";
import './App.css'
import NavBar from './Components/NavBar'

function App() {
  const [shopData, setShopData] = useState(null);
  const [currentShopData, setCurrentShopData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    async function FetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        postsData.sort((a, b) => {
          const nameA = a.title.toLowerCase();
          const nameB = b.title.toLowerCase();
          return nameA.localeCompare(nameB);
        });
        setShopData(postsData);
        setCurrentShopData(postsData);
      } catch (err) {
        setShopData(null);
        setCurrentShopData(null);
      } finally {
        setLoading(false);
      }
    }

    FetchData();
  }, []);

  function updateCartLength(){
    let length = 0;
    for (let i = 0; i < cart.length; i++){
      length += cart[i][1]
    }
    setCartLength(length);
  }

  function addItemToCart(item){
    let newCart = cart;
    let itemIndex = "none";
    for (let i = 0; i < newCart.length; i++){
      if (newCart[i][0] == item){
        itemIndex = i;
      }
    }

    if (itemIndex != "none"){
      newCart[itemIndex][1]++;
    }
    else{
      newCart.push([item, 1]);
    }
    setCart(newCart);
    updateCartLength();
  }

  function subtractItemFromCart(item){
    let newCart = cart;
    let itemIndex = "none";
    for (let i = 0; i < newCart.length; i++){
      if (newCart[i][0] == item){
        itemIndex = i;
      }
    }

    if (itemIndex != "none"){
      newCart[itemIndex][1] -= 1;
      if (newCart[itemIndex][1] <= 0){
        newCart.splice(itemIndex, 1);
      }
    }
    setCart(newCart);
    updateCartLength();
  }

  function sortLowHigh(){
    setCurrentShopData([...currentShopData].sort((a, b) => a.price - b.price));
  }

  function sortHighLow(){
    setCurrentShopData([...currentShopData].sort((a, b) => b.price - a.price));
  }

  function sortRated(){
    setCurrentShopData([...currentShopData].sort((a, b) => b.rating.rate - a.rating.rate));
  }

  function selectCategory(category){
    category == "All" ? setCurrentShopData(shopData) : setCurrentShopData(shopData.filter((item) => item.category == category))
  }

  return (
    <>
      <NavBar cartLength={cartLength}></NavBar>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Outlet context={[currentShopData, cart, addItemToCart, subtractItemFromCart, cartLength, sortLowHigh, sortHighLow, sortRated, selectCategory]}/>
      )}
    </>
  )
}

export default App
