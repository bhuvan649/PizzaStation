// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/products');
  };

  // Prevent scrolling on Home page
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
      style={{ backgroundImage: `url('/images/pizza-bg.webp')` }} 
    >
      <div className="bg-black bg-opacity-60 p-8 rounded text-center text-white max-w-xl mx-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hot, Fresh & Delicious Pizza Delivered to Your Door!
        </h1>
        <button
          onClick={handleOrderNow}
          className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-6 py-3 rounded mt-4"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Home;
