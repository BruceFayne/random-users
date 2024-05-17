import { configureStore } from '@reduxjs/toolkit';
import User from './User';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { InitialState } from './User/types';


export const store = configureStore({
  reducer: {
    User,
  },
});




export const useAppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<InitialState> = useSelector;
// // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
