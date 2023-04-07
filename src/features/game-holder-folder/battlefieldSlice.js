import { createSlice } from "@reduxjs/toolkit";

export const battlefieldSlice = createSlice({
    name: 'battlefield',
    initialState: {
       selectedPiece: '',
    },
    reducers: {
        selectPiece (state, action) {
            state.selectedPiece = action.payload;
        }
    }
});

export const {
  selectPiece,
} = battlefieldSlice.actions;

export default battlefieldSlice.reducer;