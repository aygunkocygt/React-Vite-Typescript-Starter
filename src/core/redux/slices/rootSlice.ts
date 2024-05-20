import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RootState {
  isLoading: boolean;
  isAuthenticate: boolean;
}

const initialState: RootState = {
  isLoading: true,
  isAuthenticate: false,
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setAuthenticate: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticate = action.payload;
    },
  },
});

export const { setIsLoading, setAuthenticate } = rootSlice.actions;

export default rootSlice.reducer;
