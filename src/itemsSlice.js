import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    setItems: (state, action) => {
      return action.payload; 
    },
  },
});

export const { addItem, deleteItem, setItems } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
