import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./pages/user/userSlice";
import bookReducer from "./pages/books/bookSlice"
const store = configureStore({
  reducer: {
    adminInfo: adminReducer,
    books: bookReducer,
  },
});

export default store;
