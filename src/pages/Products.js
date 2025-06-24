import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const [clickedId, setClickedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  const handleAdd = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      size: product.size,
      quantity: 1,
      image: product.image,
      price: product.price,
    });

    setClickedId(product.id);
    setTimeout(() => setClickedId(null), 200);
  };

  const handleDone = () => {
    navigate('/cart'); // Change the path as needed
  };

  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow w-64 text-center flex flex-col justify-between"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <h2 className="font-bold text-lg">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-orange-600 font-semibold my-2">₹{product.price}</p>

            <button
              onClick={() => handleAdd(product)}
              className={`px-4 py-2 rounded text-white font-medium transition duration-150 ${
                clickedId === product.id
                  ? 'bg-green-500'
                  : 'bg-orange-500 hover:bg-orange-600'
              }`}
            >
              {clickedId === product.id ? 'Added!' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>

      {/* Done Button */}
      <div className="flex justify-center mt-6 mb-10">
        <button
          onClick={handleDone}
          className="px-4 py-2 rounded text-white font-medium transition duration-150 bg-orange-500 hover:bg-orange-600"
        >
          Done
        </button>
      </div>
    </>
  );
};

export default Products;
