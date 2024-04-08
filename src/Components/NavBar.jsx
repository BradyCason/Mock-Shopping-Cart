import { NavLink } from "react-router-dom";

export default function NavBar({cartLength}){
    return(
        <div className="navbar">
            <NavLink to="/" className="title">Brady's Fake Shop</NavLink>
            <div className="nav-buttons">
                <NavLink to="/" className="nav-button" activeClassName="active">Home</NavLink>
                <NavLink to="products" className="nav-button" activeClassName="active">Products</NavLink>
                <NavLink to="about" className="nav-button" activeClassName="active">About</NavLink>
                <NavLink to="cart" className="nav-button" activeClassName="active">Cart ({cartLength})</NavLink>
            </div>
        </div>
    )
}