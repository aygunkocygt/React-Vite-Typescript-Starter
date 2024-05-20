import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rootSlice from './slices/rootSlice';

const rootReducer = combineReducers({
  root: rootSlice,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
