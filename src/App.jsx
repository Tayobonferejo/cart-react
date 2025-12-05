import { useState } from "react";
import Product from './Product.jsx';
import Cart from './Cart.jsx';
import './App.css';

function App() {

  const [cart, setCart] = useState({}); 


  return (
    <>
      <div className='main'>
          <h1>Desserts</h1>
          <Product cart={cart} setCart={setCart} />
      </div>
      <Cart cart={cart} setCart={setCart} />
    </>
  );
}

export default App;
