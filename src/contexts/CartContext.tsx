import { createContext, type ReactNode, useContext, useState } from "react";

type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type Address = {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
};

type CartContextType = {
  cart: CartItem[];
  address: Address | null;
  paymentMethod: string | null;

  addCoffee: (coffee: CartItem) => void;
  removeCoffee: (id: string) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;

  setAddress: (data: Address) => void;
  setPaymentMethod: (method: string) => void;
};

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [address, setAddress] = useState<Address | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  function addCoffee(coffee: CartItem) {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === coffee.id);

      if (exists) {
        return prev.map((item) =>
          item.id === coffee.id
            ? { ...item, quantity: item.quantity + coffee.quantity }
            : item,
        );
      }

      return [...prev, coffee];
    });
  }

  function removeCoffee(id: string) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function increase(id: string) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decrease(id: string) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        address,
        paymentMethod,
        addCoffee,
        removeCoffee,
        increase,
        decrease,
        setAddress,
        setPaymentMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
