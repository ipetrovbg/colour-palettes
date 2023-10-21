import { createSlice, createSelector } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  active: {
    name: "",
    colors: [],
  },
  all: [],
};

const paletteSlice = createSlice({
  name: "palette",
  initialState: INITIAL_STATE,
  reducers: {
    createEmptyPalette: (state, action) => {
      state.all.push({ name: action.payload.name, colors: [], id: Date.now() });
    },
    deleteColour: (state, action) => {
      let paletteIndex = state.all.findIndex(
        (palette) => palette.id === action.payload.paletteId,
      );

      state.all[paletteIndex].colors = state.all[paletteIndex].colors.filter(
        (_, i) => i !== action.payload.colourId,
      );
    },
    deletePalette: (state, action) => {
      state.all = state.all.filter(
        (palette) => palette.id !== action.payload.paletteId,
      );
    },
    addColour: (state, action) => {
      let paletteIndex = state.all.findIndex(
        (palette) => palette.id === action.payload.paletteId,
      );

      state.all[paletteIndex].colors.push({
        token: action.payload.colour.name,
        hex: action.payload.colour.hex,
      });
    },
  },
});

const selectPalette = (state) => state.palette;
const selectActivePalette = createSelector(
  selectPalette,
  (state) => state.active,
);
const selectAllPalette = createSelector(selectPalette, (state) => state.all);

const { createEmptyPalette, deleteColour, addColour, deletePalette } =
  paletteSlice.actions;

const paletteReducer = paletteSlice.reducer;

export {
  paletteReducer,
  deletePalette,
  selectAllPalette,
  createEmptyPalette,
  addColour,
  deleteColour,
  selectActivePalette,
  INITIAL_STATE
};
