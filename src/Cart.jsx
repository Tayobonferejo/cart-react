import "./Cart.css";
import cartLogo from "./assets/images/illustration-empty-cart.svg";
import carbonLogo from "./assets/images/icon-carbon-neutral.svg"

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
              <div className="cart-price">
                  <p>{item.qty}x</p>
                  <p>@{item.price.toFixed(2)}</p>
                  <p>${(item.qty * item.price).toFixed(2)}</p>
              </div>
            </div>
          ))}

          <hr />
          <div className="total">
            <p>Order Total</p>
            <h4>${total.toFixed(2)}</h4>
          </div>

          <div className="carbon">
            <img src={carbonLogo} alt=""></img>
            <p>This is a carbon-neutral delivery</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
