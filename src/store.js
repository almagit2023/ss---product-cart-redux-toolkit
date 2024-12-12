import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/reducers';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
