
import React, { useEffect, useState } from "react";

import "./Product.css"


function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="parent-cart">
      {products.map((product, index) => (
        <div key={index} className="coffee-choice">

          {/* Responsive images */}
          <picture>
            <source media="(min-width:1024px)" srcSet={product.image.desktop} />
            <source media="(min-width:768px)" srcSet={product.image.tablet} />
            <source media="(max-width:767px)" srcSet={product.image.mobile} />
            <img src={product.image.thumbnail} alt={product.name} />
          </picture>
          {/* Add to Cart Button */} 
          <button className="cart-button">🛒 Add to Cart </button>
          <p>{product.category}</p>
          <h3>{product.name}</h3>
  
          <p>${product.price.toFixed(2)}</p>
        </div>

      ))}
    </div>
  );
}

export default Product;