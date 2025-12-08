import "./OrderModal.css";

function OrderModal({ cart, closeModal }) {
  const items = Object.values(cart);
  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>

        <div className="modal-items">
          {items.map(item => (
            <div className="modal-item" key={item.name}>
              <span>{item.name} ({item.qty}x)</span>
              <strong>${(item.qty * item.price).toFixed(2)}</strong>
            </div>
          ))}
        </div>

        <h3>Total: ${total.toFixed(2)}</h3>

        <button className="close-btn" onClick={closeModal}>
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default OrderModal;
