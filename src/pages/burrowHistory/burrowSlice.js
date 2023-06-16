import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burrowHistoryList:[],
 

};
const burrowHistorySlice = createSlice({
  name: "burrowHistory",
  initialState,
  reducers: {
    setburrowHistorys: (state, { payload }) => {
      state.burrowHistoryList = payload;
    },
  },
});

const { reducer, actions } = burrowHistorySlice;
export const { setburrowHistorys} = actions;

export default reducer;
