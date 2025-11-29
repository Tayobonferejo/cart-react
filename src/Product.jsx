
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
          {/* Responsive images */}
          <picture>
            <source media="(min-width:1024px)" srcSet={product.image.desktop} />
            <source media="(min-width:768px)" srcSet={product.image.tablet} />
            <source media="(max-width:767px)" srcSet={product.image.mobile} />
            <img src={product.image.thumbnail} alt={product.name} />
          </picture>
          
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price.toFixed(2)}</p>

        </div>
      ))}
    </div>
  );
}

export default Product;



