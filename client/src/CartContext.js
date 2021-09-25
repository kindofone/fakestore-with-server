import React, {useState} from 'react';

export const CartContext = React.createContext({
  cartItems: [],
  addToCart: () => {},
});

export default function CartProvider({children}) {
  const [cartItems, setCartItems] = useState({});

  const addToCart = id => {
    const currentQuantity = cartItems[id] ?? 0;
    setCartItems({...cartItems, [id]: currentQuantity + 1});
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}
