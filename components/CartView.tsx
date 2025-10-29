
import React from 'react';
import { CartItem } from '../types';

// Extend the Window interface to include Razorpay
declare global {
  interface Window {
    Razorpay: any;
  }
}

interface CartViewProps {
  cart: CartItem[];
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  razorpayKeyId: string;
  setView: (view: 'store') => void;
}

const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.036-2.134H8.718c-1.126 0-2.037.954-2.037 2.134v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>
);


const CartView: React.FC<CartViewProps> = ({ cart, updateQuantity, removeFromCart, clearCart, razorpayKeyId, setView }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  const handlePayment = () => {
    if(total <= 0) return;

    const options = {
      key: razorpayKeyId,
      amount: Math.round(total * 100), // amount in the smallest currency unit (paise)
      currency: "INR",
      name: "VDS prinkzzzzz",
      description: "Transaction for Dress Collection",
      image: "https://picsum.photos/seed/logo/128/128",
      handler: function (response: any) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        clearCart();
        setView('store');
      },
      prefill: {
        name: "Test User",
        email: "test.user@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "VDS prinkzzzzz Corporate Office",
      },
      theme: {
        color: "#EC4899",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function (response: any){
        alert(`Payment failed! Error: ${response.error.description}`);
    });
    rzp.open();
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-gray-800">Your Cart is Empty</h2>
        <p className="text-gray-500 mt-2">Looks like you haven't added anything to your cart yet.</p>
        <button
          onClick={() => setView('store')}
          className="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors duration-300"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Shopping Cart</h1>
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
            <ul className="divide-y divide-gray-200">
                {cart.map(item => (
                    <li key={item.id} className="flex flex-col sm:flex-row items-center py-4 space-y-4 sm:space-y-0 sm:space-x-6">
                        <img src={item.image} alt={item.name} className="w-24 h-32 object-cover rounded-md" />
                        <div className="flex-grow">
                            <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                            <p className="text-gray-500">₹{item.price.toLocaleString('en-IN')}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input 
                                type="number" 
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                min="1"
                                className="w-16 p-2 border border-gray-300 rounded-md text-center"
                            />
                            <button onClick={() => removeFromCart(item.id)} className="p-2 text-gray-500 hover:text-red-600 rounded-full hover:bg-gray-100 transition-colors">
                                <TrashIcon className="w-5 h-5"/>
                            </button>
                        </div>
                        <p className="w-24 text-right font-semibold text-gray-800">
                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
        
        <div className="mt-8 bg-white shadow-md rounded-lg p-6 sticky bottom-4">
            <div className="space-y-2">
                <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Taxes (18%)</span>
                    <span>₹{tax.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t mt-2">
                    <span>Total</span>
                    <span>₹{total.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                </div>
            </div>
            <button
                onClick={handlePayment}
                className="w-full mt-6 py-3 px-4 bg-pink-500 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all duration-300"
            >
                Proceed to Payment with Razorpay
            </button>
        </div>
    </div>
  );
};

export default CartView;
