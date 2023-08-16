//./stores/slices/CartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "../../components/Article/Article";

type MapType = {};
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartArticles: new Map<number, Article[]>(),
  },
  reducers: {
    addToCart: (state, action: PayloadAction<Article>) => {
      let articlesMap = state.cartArticles;
      const article = action.payload;
      if (articlesMap.has(article.id))
        articlesMap.get(article.id)?.push(article);
      else articlesMap.set(article.id, [article]);
    },
    removeFromCart: (state, action: PayloadAction<Article>) => {
      let articlesMap = state.cartArticles;
      const article = action.payload;
      if (articlesMap.has(article.id)) articlesMap.get(article.id)?.pop();
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
