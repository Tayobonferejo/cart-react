
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="bg-[#f9f5f2] rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="relative">
              {/* Responsive Image */}
              <picture>
                <source media="(min-width:1024px)" srcSet={product.image.desktop} />
                <source media="(min-width:768px)" srcSet={product.image.tablet} />
                <source media="(max-width:767px)" srcSet={product.image.mobile} />
                <img 
                  src={product.image.thumbnail}
                  alt={product.name}
                  className="rounded-lg w-full object-cover"
                />
              </picture>

              {/* Add to Cart Button */}
              <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white text-black py-2 px-4 rounded-full shadow font-medium hover:bg-gray-100">
                🛒 Add to Cart
              </button>
            </div>

            {/* Product Text */}
            <p className="text-sm text-gray-500 mt-4">{product.category}</p>
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-orange-600 font-bold">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

  );
}

export default Product;



