'use client';

import { useState, useEffect } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await fetch('/api/cart');
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await fetch('/api/cart', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId })
      });
      fetchCart(); // Refresh cart
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart })
      });
      const result = await response.json();
      if (result.success) {
        alert(`Order placed successfully! Order ID: ${result.orderId}`);
        setCart([]);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <LoadingSpinner size="lg" />
        <span className="ml-2">Loading cart...</span>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <Card className="text-center py-8">
        <p className="text-gray-600 mb-4">Your cart is empty</p>
        <Button as="a" href="/shop">
          Continue Shopping
        </Button>
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
        
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <div>
                <h3 className="font-semibold">Product ID: {item.productId}</h3>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <Button 
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(item.productId)}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-right">
          <Button 
            variant="success"
            size="lg"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </Button>
        </div>
      </Card>
    </div>
  );
}
