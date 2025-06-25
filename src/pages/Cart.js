import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    cartTotal
  } = useCart();

  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-4">
            {cartItems.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded shadow flex gap-4 items-center">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>Size: {item.size}</p>
                  <p>Price: ₹{item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => decrementQuantity(index)} className="px-2 py-1 bg-gray-200 rounded">−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(index)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                  </div>
                  <button onClick={() => removeFromCart(index)} className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xl font-semibold text-right">
            Total: ₹{cartTotal.toFixed(2)}
          </div>

          <button
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded"
            onClick={() => navigate('/order')}
          >
            Proceed to Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
