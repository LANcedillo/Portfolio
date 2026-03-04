// src/context/CartContext.tsx
import { useEffect, useReducer, createContext } from 'react';
import { cartReducer, type CartItem } from './CartReducer';
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // 1. Inicializar desde LocalStorage
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem('cart_v1');
    return localData ? JSON.parse(localData) : [];
  });

    const removeFromCart = (id: number) => dispatch({ type: 'REMOVE_FROM_CART', payload: id });

    // Calcula el total sumando (precio * cantidad) de cada item
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

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

