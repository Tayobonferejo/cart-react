import { useState } from "react";
import Product from './Product.jsx';
import Cart from './Cart.jsx';
import './App.css';

function App() {
  const [cart, setCart] = useState({});
  const [quantities, setQuantities] = useState([]);
  const [products, setProducts] = useState([]); // keep products in App

  // Function to reset quantity when removing from cart
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
      <Cart cart={cart} setCart={setCart} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
