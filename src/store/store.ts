import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import userReducer from "./slices/userSlice";
import modalReducer from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
