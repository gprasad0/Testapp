// app/store.ts
import userReducer from "@/redux/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

// Export the store to be used in the `Provider`
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
