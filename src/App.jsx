import { useState } from "react";
import Product from './Product.jsx';
import Cart from './Cart.jsx';
import OrderModal from "./OrderModal.jsx";   // << add this
import './App.css';

function App() {
  const [cart, setCart] = useState({});
  const [quantities, setQuantities] = useState([]);
  const [products, setProducts] = useState([]);

  const [showModal, setShowModal] = useState(false);  // << modal state

  const resetQuantity = (name) => {
    setCart(prev => {
      const updatedCart = { ...prev };
      delete updatedCart[name];
      return updatedCart;
    });

    setQuantities(prev => {
      const updated = [...prev];
      const index = products.findIndex(p => p.name === name);
      if (index !== -1) updated[index] = 0;
      return updated;
    });
  };

  return (
    <>
      <div className='main'>
        <h1>Desserts</h1>
        <Product
          products={products}
          setProducts={setProducts}
          cart={cart}
          setCart={setCart}
          quantities={quantities}
          setQuantities={setQuantities}
        />
      </div>

      <Cart 
        cart={cart}
        setCart={setCart}
        resetQuantity={resetQuantity}
        openModal={() => setShowModal(true)}   // << pass function
      />

      {showModal && (
        <OrderModal 
          cart={cart}
          closeModal={() => window.location.reload()}
        />
      )}
    </>
  );
}

export default App;
