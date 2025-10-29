
import { ProductCategory, Product } from './types';

// In a real-world scenario, these descriptions could be dynamically generated
// by a Gemini model to be more persuasive and unique for each item.
// For example: `prompt: "Write a short, alluring product description for a 
// [product name], a [product category] dress. Highlight its [fabric] and [style]."`

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Azure Breeze Maxi',
    price: 3200,
    description: 'Flow gracefully in this stunning azure maxi dress. Perfect for summer evenings and beachside strolls, its lightweight fabric keeps you cool and stylish.',
    image: 'https://picsum.photos/seed/dress1/600/800',
    category: ProductCategory.WOMENS,
  },
  {
    id: 2,
    name: 'Crimson Charm Cocktail',
    price: 4500,
    description: 'Turn heads at any event with this vibrant crimson cocktail dress. Its tailored fit and delicate lace details exude elegance and confidence.',
    image: 'https://picsum.photos/seed/dress2/600/800',
    category: ProductCategory.WOMENS,
  },
  {
    id: 3,
    name: 'Midnight Bloom Gown',
    price: 8900,
    description: 'An enchanting gown featuring a dark floral pattern on satin. The flowing silhouette and subtle shimmer make it ideal for formal occasions.',
    image: 'https://picsum.photos/seed/dress3/600/800',
    category: ProductCategory.WOMENS,
  },
  {
    id: 4,
    name: 'Linen Summer Shirt',
    price: 2500,
    description: 'A classic white linen shirt that is a staple for any man\'s wardrobe. Breathable, comfortable, and effortlessly stylish for any casual setting.',
    image: 'https://picsum.photos/seed/shirt1/600/800',
    category: ProductCategory.MENS,
  },
  {
    id: 5,
    name: 'Urban Explorer Jacket',
    price: 7500,
    description: 'This versatile jacket combines modern aesthetics with practical design. Water-resistant and lightweight, it\'s the perfect companion for city adventures.',
    image: 'https://picsum.photos/seed/jacket1/600/800',
    category: ProductCategory.MENS,
  },
  {
    id: 6,
    name: 'Emerald Sundress',
    price: 2800,
    description: 'A delightful emerald green sundress with a playful flair. Its A-line cut and soft cotton fabric make it a comfortable choice for sunny days.',
    image: 'https://picsum.photos/seed/dress4/600/800',
    category: ProductCategory.WOMENS,
  },
  {
    id: 7,
    name: 'Executive Navy Blazer',
    price: 9800,
    description: 'Sharpen your look with this impeccably tailored navy blazer. Crafted from premium wool, it offers a sophisticated silhouette for business or pleasure.',
    image: 'https://picsum.photos/seed/blazer1/600/800',
    category: ProductCategory.MENS,
  },
  {
    id: 8,
    name: 'Sunset Ombre Dress',
    price: 3800,
    description: 'Capture the beauty of a sunset with this stunning ombre dress. The vibrant gradient and flowing chiffon fabric create a truly mesmerizing effect.',
    image: 'https://picsum.photos/seed/dress5/600/800',
    category: ProductCategory.WOMENS,
  },
];
