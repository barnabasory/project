import { createSlice } from "@reduxjs/toolkit";
import data from "../calculator components/cards/data";

const initialState = {
  checkedIds: [],
};

const checkedSlice = createSlice({
  name: "checked",
  initialState,
  reducers: {
    addCheckedItems: (state, action) => {
      const checkedBoxes = data.map(
        (datum, index) => datum.index === action.payload.id
      );
      state.checkedIds.push(checkedBoxes);

      console.log(action.payload); // nothing in the console
    },
  },
});

export const { addCheckedItems } = checkedSlice.actions;
export const getAllCheckedItems = (state) => state.checked.checkedIds;
export default checkedSlice.reducer;
