import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from './itemsSlice';
// import logger from 'redux-logger';

import { ITEMS } from './ITEMS'; // Import the ITEMS array

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
  preloadedState: {
    items: ITEMS, // Set the initial state to ITEMS array
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // Uncomment if you want to use redux-logger
  // devTools: true, // Add this line if you want to use Redux DevTools
});
