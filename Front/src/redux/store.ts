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
import { userApi } from "@/redux/api/userApi";
import { authApi } from "@/redux/api/authApi";
import { coinApi } from "@/redux/api/coinApi";
import { nftApi } from "@/redux/api/nftApi";
import { gameRankingApi } from "@/redux/api/gameRankingApi";
import { rankingApi } from "@/redux/api/rankingApi";

// * 리듀서
const reducers = combineReducers({
  counter,
  user,
  alert,
  donate,
  modal,
  [userApi.reducerPath]: userApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [coinApi.reducerPath]: coinApi.reducer,
  [nftApi.reducerPath]: nftApi.reducer,
  [gameRankingApi.reducerPath]: gameRankingApi.reducer,
  [rankingApi.reducerPath]: rankingApi.reducer,
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
    }).concat(
      userApi.middleware,
      authApi.middleware,
      coinApi.middleware,
      nftApi.middleware,
      gameRankingApi.middleware,
      rankingApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
