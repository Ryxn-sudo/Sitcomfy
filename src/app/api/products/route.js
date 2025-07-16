import { NextResponse } from 'next/server';


const products = [
  {
    id: '1',
    name: 'Modern Sectional Sofa',
    price: 1299.99,
    category: 'sofas',
    image: '/api/placeholder/400/300',
    description: 'Comfortable modern sectional sofa perfect for large living rooms.',
    inStock: true,
  },
  {
    id: '2',
    name: 'Leather Recliner',
    price: 899.99,
    category: 'chairs',
    image: '/api/placeholder/400/300',
    description: 'Premium leather recliner with adjustable positions.',
    inStock: true,
  },
  {
    id: '3',
    name: 'Coffee Table',
    price: 299.99,
    category: 'tables',
    image: '/api/placeholder/400/300',
    description: 'Elegant wooden coffee table with storage.',
    inStock: false,
  },
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request) {
  const product = await request.json();
  
 
  const newProduct = {
    id: Date.now().toString(),
    ...product,
  };
  
  products.push(newProduct);
  
  return NextResponse.json(newProduct, { status: 201 });
}
