import { NextResponse } from 'next/server';

// Sample products data (same as in products route)
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

export async function GET(request, { params }) {
  const { id } = params;
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  
  return NextResponse.json(product);
}

export async function PUT(request, { params }) {
  const { id } = params;
  const updates = await request.json();
  
  const productIndex = products.findIndex(p => p.id === id);
  
  if (productIndex === -1) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  
  products[productIndex] = { ...products[productIndex], ...updates };
  
  return NextResponse.json(products[productIndex]);
}

export async function DELETE(request, { params }) {
  const { id } = params;
  const productIndex = products.findIndex(p => p.id === id);
  
  if (productIndex === -1) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  
  products.splice(productIndex, 1);
  
  return NextResponse.json({ message: 'Product deleted successfully' });
}
