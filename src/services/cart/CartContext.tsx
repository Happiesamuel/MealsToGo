import { createContext, useContext, useEffect, useState } from "react";
import { ResturantInfo } from "../../../model";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../auth/AuthContext";

const defaultValue = {
  cart: [],
  addCart: () => {},
  clearCart: () => {},
  resturant: null,
  sum: 0,
};

const CartContext = createContext<{
  cart: any[];
  addCart: (item: { item: string; price: number }, res: ResturantInfo) => void;
  clearCart: () => void;
  resturant: ResturantInfo | null;
  sum: number;
}>(defaultValue);
export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<{ item: string; price: number }[]>([]);
  const [resturant, setResturant] = useState<ResturantInfo | null>(null);
  const { user } = useAuth();
  const [sum, setSum] = useState(0);
  useEffect(
    function () {
      if (!cart.length) setSum(0);
      else {
        const s = cart.map((x) => x.price).reduce((a, b) => a + b);
        setSum(s);
      }
    },
    [cart]
  );

  function addCart(item: { item: string; price: number }, res: ResturantInfo) {
    if (!resturant || res.placeId !== resturant.placeId) {
      setResturant(res);
      setCart([item]);
    } else {
      setCart([...cart, item]);
    }
  }
  function clearCart() {
    setCart([]);
    setResturant(null);
  }

  return (
    <CartContext.Provider value={{ cart, addCart, clearCart, resturant, sum }}>
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) throw new Error("Wrong Context");
  return context;
}
