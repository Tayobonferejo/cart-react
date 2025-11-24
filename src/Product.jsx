
import React, { useEffect, useState } from "react";


function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price.toFixed(2)}</p>

          {/* Responsive images */}
          <picture>
            <source media="(min-width:1024px)" srcSet={product.image.desktop} />
            <source media="(min-width:768px)" srcSet={product.image.tablet} />
            <source media="(max-width:767px)" srcSet={product.image.mobile} />
            <img src={product.image.thumbnail} alt={product.name} />
          </picture>
        </div>
      ))}
    </div>
  );
}

export default Product;



