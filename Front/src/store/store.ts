import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counter from "@/store/slices/counterSlice";
import auth from "@/store/slices/authSlice";

const reducers = combineReducers({
  counter,
  auth,
});

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
