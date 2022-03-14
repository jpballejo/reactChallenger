import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        saveList: (state, action) => {
            state.value.push(action.payload);
        },
     
    },
});

export const { saveList } = itemsSlice.actions;

export const selectState = state => state;

export default itemsSlice.reducer;