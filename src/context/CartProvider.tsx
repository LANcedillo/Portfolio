import { useEffect, useReducer, createContext } from 'react';
import { cartReducer, type CartItem } from './CartReducer';
import { CartContext } from './CartContext';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
}
// ... (tipos y reducer se mantienen igual)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // 1. Inicializar desde LocalStorage
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem('cart_v1');
    return localData ? JSON.parse(localData) : [];
  });

  // 2. Guardar automáticamente cada vez que el carrito cambie
  useEffect(() => {
    localStorage.setItem('cart_v1', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => dispatch({ type: 'ADD_TO_CART', payload: item });

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};