import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkedIds: [],
};

const checkedSlice = createSlice({
  name: "checked",
  initialState,
  reducers: {
    addCheckedItems: (state, action) => {
      state.checkedIds.push(action.payload);

      console.log(action.payload); // nothing in the console
    },
  },
});

export const { addCheckedItems } = checkedSlice.actions;
export const getAllCheckedItems = (state) => state.checked.checkedIds;
export default checkedSlice.reducer;
