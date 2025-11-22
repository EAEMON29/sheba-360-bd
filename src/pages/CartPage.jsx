import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Trash2 } from "lucide-react";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const [showPayment, setShowPayment] = useState(false);

  // Remove item
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  // Total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-3 md:px-6 pb-20">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>

      {/* If cart empty */}
      {cart.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-lg shadow">
          <p className="text-2xl font-semibold text-gray-600">Your cart is empty</p>
          <p className="mt-2 text-gray-500">Add some services to continue.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left — Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center md:items-start bg-white p-4 rounded-lg shadow"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden mb-3 md:mb-0 md:mr-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-grow w-full">
                  <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
                  <p className="text-gray-500 text-sm">{item.category}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-4 mt-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <span className="font-bold">{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 bg-gray-300 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price and Remove */}
                <div className="text-right w-full md:w-auto mt-4 md:mt-0">
                  <p className="text-lg font-bold text-green-700">
                    ৳{(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 mt-2 flex items-center gap-1 mx-auto md:ml-auto"
                  >
                    <Trash2 size={18} /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Order Summary */}
          <div className="bg-white p-6 shadow rounded-lg h-fit sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-3 text-gray-700">
              <span>Total Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between mb-3 text-gray-700">
              <span>Total Price</span>
              <span className="font-bold text-green-700">৳{totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={() => setShowPayment(true)}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      {/* PAYMENT MODAL */}
      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-sm shadow-lg relative animate-fadeIn">
            <h2 className="text-xl font-bold mb-4 text-center">Select Payment Method</h2>

            <button className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold mb-3">
              bKash Payment
            </button>

            <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold mb-3">
              Nagad Payment
            </button>

            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold">
              Debit / Credit Card
            </button>

            <button
              className="mt-4 text-gray-600 underline w-full"
              onClick={() => setShowPayment(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
