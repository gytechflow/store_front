//./stores/slices/CartSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../models/CartItem";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as CartItem[],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.article.id === action.payload.id,
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ article: action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.article.id === action.payload,
      );
      if (item !== undefined) item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.article.id === action.payload,
      );
      if (item !== undefined) item.quantity--;
      if (item?.quantity === 0) {
        const removeItem = state.items.filter(
          (item) => item.article.id !== action.payload,
        );
        state.items = removeItem;
      }
    },
    removeFromCart: (state, action) => {
      const removeItem = state.items.filter(
        (item) => item.article.id !== action.payload,
      );
      state.items = removeItem;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
