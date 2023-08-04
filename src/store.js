import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from './itemsSlice';

import { ITEMS } from './ITEMS'; 

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
  preloadedState: {
    items: ITEMS, 
  },

});
