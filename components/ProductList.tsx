
import React, { useState } from 'react';
import { Product, ProductCategory } from '../types';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

type Filter = 'All' | ProductCategory;

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
  const [filter, setFilter] = useState<Filter>('All');

  const filteredProducts = products.filter(product => 
    filter === 'All' || product.category === filter
  );
  
  const filters: Filter[] = ['All', ProductCategory.WOMENS, ProductCategory.MENS];

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Our Collection</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Discover your next favorite dress from our curated selection.</p>
      </div>

      <div className="flex justify-center mb-8 space-x-2 sm:space-x-4">
        {filters.map(f => (
           <button
             key={f}
             onClick={() => setFilter(f)}
             className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ${
              filter === f 
                ? 'bg-pink-500 text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
             }`}
           >
             {f}
           </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
