
import React, { useState, useCallback, useMemo } from 'react';
import { CartItem, Product } from './types';
import { PRODUCTS } from './constants';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartView from './components/CartView';
import Footer from './components/Footer';

type View = 'store' | 'cart';

// This is a dummy key from Razorpay's documentation.
// In a real application, this should come from a secure environment variable.
const RAZORPAY_KEY_ID = 'rzp_test_ILzsdAlLClv2lA';


const App: React.FC = () => {
  const [view, setView] = useState<View>('store');
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    setCart((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter((item) => item.id !== productId);
      }
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const cartCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header cartCount={cartCount} setView={setView} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {view === 'store' && <ProductList products={PRODUCTS} addToCart={addToCart} />}
        {view === 'cart' && (
          <CartView
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
            razorpayKeyId={RAZORPAY_KEY_ID}
            setView={setView}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
