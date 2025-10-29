
import React, { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{product.category}</p>
        <div className="flex items-center justify-between mt-auto">
          <p className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</p>
          <button
            onClick={handleAddToCart}
            disabled={added}
            className={`flex items-center justify-center w-36 h-10 rounded-full font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                added 
                ? 'bg-green-500 text-white focus:ring-green-500' 
                : 'bg-pink-500 text-white hover:bg-pink-600 focus:ring-pink-500'
            }`}
          >
            {added ? (
                <>
                <CheckIcon className="h-5 w-5 mr-2" />
                Added
                </>
            ) : (
                <>
                <PlusIcon className="h-5 w-5 mr-1" />
                Add to Cart
                </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
