import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  function addToCart(flower) {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === flower.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === flower.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentItems, { ...flower, quantity: 1 }];
    });
    setIsCartOpen(true);
  }

  function removeFromCart(flowerId) {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === flowerId ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function checkout() {
    if (items.length === 0) {
      return;
    }

    setItems([]);
    setIsCartOpen(false);
    setSuccessMessage('Pedido realizado com sucesso!');
  }

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const value = useMemo(
    () => ({
      addToCart,
      cartCount,
      cartTotal,
      checkout,
      isCartOpen,
      items,
      removeFromCart,
      setIsCartOpen,
      setSuccessMessage,
      successMessage,
    }),
    [cartCount, cartTotal, isCartOpen, items, successMessage],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart deve ser usado dentro de CartProvider');
  }

  return context;
}
