import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: '',
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        saveData: (state, action) => {
            state.value = action.payload;
        }
    },
});

export const { saveData } = dataSlice.actions;

export const selectState = state => state;

export default dataSlice.reducer;