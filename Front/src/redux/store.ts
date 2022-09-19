import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

// ! reducer import
import counter from "@/redux/slices/counterSlice";
import user from "@/redux/slices/userSlice";
import alert from "@/redux/slices/alertSlice";
import { userApi } from "@/redux/api/user/userApi";
import { authApi } from "@/redux/api/auth/authApi";

// * 리듀서
const reducers = combineReducers({
  counter,
  user,
  alert,
  [userApi.reducerPath]: userApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
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
    }).concat(userApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
