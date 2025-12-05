import Product from "./Product.jsx"
import "./Cart.css"

import cartLogo from "./assets/images/illustration-empty-cart.svg"

function Cart() {
    return (<div className="cart">
        <h3>Your Cart({})</h3>
        <img src={cartLogo} alt="illustration-empty-cart"></img>
        <p>Your added items will appear here</p>
    </div>)
}

export default Cart