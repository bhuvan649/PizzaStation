import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Order = () => {
  const { cartItems, cartTotal, clearCart } = useCart();

  // User info state
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');

    // Clear form
    setName('');
    setAddress('');
    setPhone('');
    setEmail('');

    // Clear cart
    clearCart();
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 p-4">
      <div>
        <h2 className="text-lg font-bold mb-2">Order</h2>
        <input
          className="border w-full p-2 mb-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border w-full p-2 mb-2"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          className="border w-full p-2 mb-2"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="border w-full p-2 mb-4"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-bold mb-2">Order Summary</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item, idx) => (
              <div key={idx} className="flex justify-between">
                <span>
                  {item.name} ({item.size}) x {item.quantity}
                </span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <hr className="my-2" />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
          </>
        )}

        <h3 className="mt-4 font-bold">Payment Method</h3>
        <div className="flex flex-col gap-1 mt-1">
          <label>
            <input type="radio" name="payment" /> Cash on Delivery
          </label>
          <label>
            <input type="radio" name="payment" /> LPT
          </label>
          <label>
            <input type="radio" name="payment" /> Card
          </label>
        </div>

        <button
          onClick={handlePlaceOrder}
          disabled={cartItems.length === 0}
          className={`mt-4 w-full py-2 rounded text-white ${
            cartItems.length === 0
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-orange-500 hover:bg-orange-600'
          }`}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Order;
