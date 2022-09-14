import { configureStore } from "@reduxjs/toolkit";
import counter from "@/store/slices/counterSlice";

const reducers = {
  counter,
};

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
