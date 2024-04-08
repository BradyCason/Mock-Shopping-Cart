import App from "./App";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Home from "./Pages/Home";

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {index: true, element: <Home />},
        {path: "products", element: <Products />},
        {path: "cart", element: <Cart />},
        {path: "about", element: <About />},
      ]
    },
  ];
  
  export default routes;