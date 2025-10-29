
import React from 'react';

interface HeaderProps {
  cartCount: number;
  setView: (view: 'store' | 'cart') => void;
}

const ShoppingBagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ cartCount, setView }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => setView('store')} className="text-2xl font-bold text-gray-800 tracking-wider">
            VDS <span className="text-pink-500">prinkzzzzz</span>
          </button>
          <div className="flex items-center">
            <button
              onClick={() => setView('cart')}
              className="relative p-2 text-gray-600 hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 rounded-full transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBagIcon className="h-7 w-7" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-pink-500 text-white text-xs flex items-center justify-center transform translate-x-1/3 -translate-y-1/3">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
