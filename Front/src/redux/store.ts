import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

// ! reducer import
import counter from "@/redux/slices/counterSlice";
import user from "@/redux/slices/userSlice";
import alert from "@/redux/slices/alertSlice";
import donate from "@/redux/slices/donateSlice";
import modal from "@/redux/slices/modalSlice";
import follow from "@/redux/slices/followSlice";
import { userApi } from "@/redux/api/userApi";
import { authApi } from "@/redux/api/authApi";
import { coinApi } from "@/redux/api/coinApi";
import { followApi } from "@/redux/api/followApi";
import { nftApi } from "@/redux/api/nftApi";
// * 리듀서
const reducers = combineReducers({
  counter,
  user,
  alert,
  donate,
  modal,
  follow,
  [userApi.reducerPath]: userApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [coinApi.reducerPath]: coinApi.reducer,
  [followApi.reducerPath]: followApi.reducer,
  [nftApi.reducerPath]: nftApi.reducer,
});

// * session storage
const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,

  // * persist 오류 해결을 위한 미들 웨어 추가
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userApi.middleware, authApi.middleware, coinApi.middleware, followApi.middleware, nftApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
