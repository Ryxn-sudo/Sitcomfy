import { NextResponse } from 'next/server';

const categories = [
  { id: '1', name: 'Sofas', slug: 'sofas', description: 'Comfortable seating solutions' },
  { id: '2', name: 'Chairs', slug: 'chairs', description: 'Individual seating options' },
  { id: '3', name: 'Tables', slug: 'tables', description: 'Dining and coffee tables' },
  { id: '4', name: 'Storage', slug: 'storage', description: 'Storage solutions' },
];

export async function GET() {
  return NextResponse.json(categories);
}
