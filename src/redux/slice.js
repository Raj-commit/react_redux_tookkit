import { createSlice } from "@reduxjs/toolkit";

//Onclick -> dispactch(action)-> it trigger fn -> it will update store
//Onclick -> dispatch(action)-> it call reducer fn -> it will update slice of redux store

const testSlice = createSlice({
  name: "test",
  initialState: {
    isClicked: false,
  },
  reducers: {
    updateState: (state, action) => {
      state.isClicked = action.payload;
    },
  },
});
export const { updateState } = testSlice.actions;
export default testSlice.reducer;
