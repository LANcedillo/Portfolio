export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: number };

export const cartReducer = (
  state: CartItem[],
  action: CartAction,
): CartItem[] => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exists = state.find((item) => item.id === action.payload.id);
      if (exists) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
