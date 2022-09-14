import { configureStore } from "@reduxjs/toolkit";
import counter from "@/store/slices/counterSlice";
import { userApi } from "@/services/user/userApi";

// * 리듀서
const reducers = {
  counter,
  [userApi.reducerPath]: userApi.reducer,
};

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
