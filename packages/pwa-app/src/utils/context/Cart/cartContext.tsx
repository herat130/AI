import React, { useReducer } from "react";
import { Product } from "../products/productContext";

type CartProduct = Pick<Product, "id" | "price">;

type CartItem = {
  product: CartProduct;
  quantity: number;
};

type Cart = {
  cart: CartItem[];
  total: number;
  totalItems: number;
};

const initialState: Cart = {
  cart: [],
  total: 0,
  totalItems: 0,
};

function CartReducer(
  cartState: Cart,
  action: {
    type: string;
    payload: Record<string, CartProduct | string | number>;
  }
): Cart {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...cartState,
        cart: [
          ...cartState.cart,
          {
            product: action.payload.product as Product,
            quantity: action.payload.quantity as number,
          },
        ],
        total:
          cartState.total +
          (action.payload.product as Product).price *
            (action.payload.quantity as number),
        totalItems: cartState.totalItems + (action.payload.quantity as number),
      };
    // case "REMOVE_FROM_CART":
    //   return {
    //     ...cartState,
    //     cart: cartState.cart.filter(
    //       (item) => item.product.id !== action.payload
    //     ),
    //   };
    // case "UPDATE_QUANTITY":
    //   return {
    //     ...cartState,
    //     cart: cartState.cart.map((item) =>
    //       item.product.id === action.payload.id
    //         ? { ...item, quantity: action.payload.quantity }
    //         : item
    //     ),
    //   };
    // case "CALCULATE_TOTAL":
    //   return {
    //     ...state,
    //     total: state.cart.reduce(
    //       (acc, item) => acc + item.product.price * item.quantity,
    //       0
    //     ),
    //     totalItems: state.cart.reduce((acc, item) => acc + item.quantity, 0),
    //   };
    default:
      return cartState;
  }
}

type CartContextType = {
  cartState: Cart;
  dispatch: (action: {
    type: string;
    payload: Record<string, CartProduct | string | number>;
  }) => void;
};

export const CartContext = React.createContext<CartContextType>(
  {} as CartContextType
);

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartState, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
