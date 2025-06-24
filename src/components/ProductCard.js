import React, { useState } from 'react';

const ProductCard = ({ image, name, description, onAdd }) => {
  const [size, setSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-xs">
      <img src={image} alt={name} className="w-24 h-24 mx-auto mb-2" />
      <h2 className="text-lg font-bold text-center">{name}</h2>
      <p className="text-sm text-gray-500 text-center mb-2">{description}</p>

      <div className="flex items-center justify-center mb-2">
        <span className="mr-2">Size:</span>
        <button onClick={() => setSize('S')} className={`px-2 ${size === 'S' ? 'bg-orange-500 text-white' : ''}`}>S</button>
        <button onClick={() => setSize('M')} className={`px-2 ${size === 'M' ? 'bg-orange-500 text-white' : ''}`}>M</button>
        <button onClick={() => setSize('L')} className={`px-2 ${size === 'L' ? 'bg-orange-500 text-white' : ''}`}>L</button>
      </div>

      <div className="flex justify-center items-center mb-4">
        <button onClick={() => setQuantity(prev => Math.max(prev - 1, 1))} className="px-2">-</button>
        <span className="px-4">{quantity}</span>
        <button onClick={() => setQuantity(prev => prev + 1)} className="px-2">+</button>
      </div>

      <button
        className="bg-orange-500 text-white w-full py-2 rounded"
        onClick={() => onAdd({ name, size, quantity })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
