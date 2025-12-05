import "./Cart.css";
import cartLogo from "./assets/images/illustration-empty-cart.svg";

function Cart({ cart }) {
  const items = Object.values(cart);
  const isEmpty = items.length === 0;

  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <div className="cart">
      <h3>Your Cart ({items.length})</h3>

      {isEmpty ? (
        <>
          <img src={cartLogo} alt="Empty cart" />
          <p>Your added items will appear here</p>
        </>
      ) : (
        <>
          {items.map((item, i) => (
            <div key={i} className="cart-item">
              <p>{item.name}</p>
              <p>Qty: {item.qty}</p>
              <p>${(item.qty * item.price).toFixed(2)}</p>
            </div>
          ))}

          <hr />

          <h4>Total: ${total.toFixed(2)}</h4>
        </>
      )}
    </div>
  );
}

export default Cart;
