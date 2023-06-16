import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./pages/user/userSlice";
import bookReducer from "./pages/books/bookSlice";
import burrowReducer from "./pages/burrowHistory/burrowSlice"
const store = configureStore({
  reducer: {
    adminInfo: adminReducer,
    books: bookReducer,
    burrowHistories: burrowReducer,
  },
});

export default store;
