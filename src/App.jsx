import Product from './Product.jsx';
import Cart from './Cart.jsx';
import './App.css';

function App() {
  return (
    <>
      <div className='main'>
          <h1>Desserts</h1>
          <Product></Product>
      </div>
      <Cart></Cart>
    </>
  );
}

export default App;
