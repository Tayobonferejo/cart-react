import { useEffect } from "react";
import addIncrement from "./assets/images/icon-increment-quantity.svg";
import minusDecrement from "./assets/images/icon-decrement-quantity.svg";
import "./Product.css";

function Product({ products, setProducts, cart, setCart, quantities, setQuantities }) {

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setQuantities(Array(data.length).fill(0));
      })
      .catch((err) => console.error(err));
  }, [setProducts, setQuantities]);

  const addToCart = (index) => {
    const updated = [...quantities];
    updated[index] = 1;
    setQuantities(updated);

    const p = products[index];

    setCart(prev => ({
      ...prev,
      [p.name]: {
        qty: 1,
        price: p.price,
        name: p.name
      }
    }));
  };

  const increase = (index) => {
    const updated = [...quantities];
    updated[index] += 1;
    setQuantities(updated);

    const p = products[index];

    setCart(prev => ({
      ...prev,
      [p.name]: {
        ...prev[p.name],
        qty: updated[index]
      }
    }));
  };

  const decrease = (index) => {
    const updated = [...quantities];
    const p = products[index];

    if (updated[index] === 1) {
      updated[index] = 0;
      setQuantities(updated);

      setCart(prev => {
        const copy = { ...prev };
        delete copy[p.name];
        return copy;
      });

      return;
    }

    updated[index] -= 1;
    setQuantities(updated);

    setCart(prev => ({
      ...prev,
      [p.name]: {
        ...prev[p.name],
        qty: updated[index]
      }
    }));
  };

  return (
    <div className="parent-cart">
      {products.map((product, index) => (
        <div key={index} className="coffee-choice">
          <picture>
            <source media="(min-width:1024px)" srcSet={product.image.desktop} />
            <source media="(min-width:768px)" srcSet={product.image.tablet} />
            <source media="(max-width:767px)" srcSet={product.image.mobile} />
            <img src={product.image.thumbnail} alt={product.name} />
          </picture>

          {quantities[index] === 0 ? (
            <button className="cart-button" onClick={() => addToCart(index)}>
              🛒 Add to Cart
            </button>
          ) : (
            <div className="qty-container">
              <button className="qty-btn" onClick={() => decrease(index)}>
                <img src={minusDecrement} alt="minus" />
              </button>

              <span className="qty-number">{quantities[index]}</span>

              <button className="qty-btn" onClick={() => increase(index)}>
                <img src={addIncrement} alt="plus" />
              </button>
            </div>
          )}

          <p>{product.category}</p>
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default Product;
