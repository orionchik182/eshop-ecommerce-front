"use client";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export const CartContext = createContext<CartContextType | null>(null);

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartProducts, setCartProducts] = useState<string[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("cart");
    if (data) {
      setCartProducts(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (cartProducts && cartProducts.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartProducts));
    } else if (cartProducts.length === 0) {
      localStorage.removeItem("cart");
    }
  }, [cartProducts]);

  const addProduct = useCallback(function addProduct(id: string) {
    setCartProducts((prev) => [...prev, id]);
  }, []);

  const removeProduct = useCallback(function removeProduct(id: string) {
    setCartProducts((prev) => {
      const pos = prev.indexOf(id);
      if (pos !== -1) {
        return [...prev.slice(0, pos), ...prev.slice(pos + 1)];
      }
      return prev;
    });
  }, []);

  const emptyCart = useCallback(function emptyCart() {
    setCartProducts([]);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProduct,
        removeProduct,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
}
