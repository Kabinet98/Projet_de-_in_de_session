import { createSlice } from "@reduxjs/toolkit";
const downloadListSlice = createSlice({
  name: "downloadListSlice",
  initialState: {
    download: [],
  },
  reducers: {
    addToList: (state, action) => {
      let newState = [
        ...state.download,
        {
          id: action.payload.id,
          img: action.payload.img,
          title: action.payload.title,
          description: action.payload.description,
          date: action.payload.date,
        },
      ];
      let oldState = [...state.download];
      const index = state.download.findIndex(
        (downloadItem) => downloadItem.id === action.payload.id
      );
      if (index >= 0) {
       return {
         download: oldState
       }
      } else {
        return {
          download: newState,
        };
      }
    },
    removeFromList: (state, action) => {
      return {
        ...state,
        download: [
          ...state.download.filter((link) => link.id !== action.payload.id),
        ],
      };
    },
  },
});
const downloadListReducer = downloadListSlice.reducer;
export const { addToList, removeFromList } = downloadListSlice.actions;
export const downloadListSelector = (state) => state.download.download;
export default downloadListReducer;
