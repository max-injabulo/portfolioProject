import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from './itemsSlice';
// import logger from 'redux-logger';

import { ITEMS } from './ITEMS'; 

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
  preloadedState: {
    items: ITEMS, 
  },

});
