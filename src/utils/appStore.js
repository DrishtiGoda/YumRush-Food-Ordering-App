const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer, // -> cart slice
  }, 
});

export default appStore;
