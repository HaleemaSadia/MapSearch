import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Place } from '../../utils/types';

type HistoryState = {
  items: Place[];
};

const initialState: HistoryState = {
  items: [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHistory(state, action: PayloadAction<Place>) {
      const exists = state.items.find(item => item.place_id === action.payload.place_id);
      if (!exists) {
        state.items.unshift(action.payload);
        if (state.items.length > 10) {
          state.items.pop();
        }
      }
    },
    setHistory(state, action: PayloadAction<Place[]>) {
      state.items = action.payload;
    },
    clearHistory(state) {
      state.items = [];
    },
  },
});

export const { addToHistory, setHistory, clearHistory } = historySlice.actions;
export default historySlice.reducer;
