import * as engine from 'store/src/store-engine'
import { configureStore } from "@reduxjs/toolkit";
import { paletteReducer, INITIAL_STATE } from "./reducers/palette";

const storages = [
  require('store/storages/localStorage'),
]

const storage = engine.createStore(storages, [], '_COLOUR_PALETTES_')
let hasSynced = false
export const syncState = (store) => {
  if (!hasSynced) {
    hasSynced = true
    store.subscribe(() => {
      const {
        palette,
      } = store.getState()
      storage.set('palette', palette)
    })
  }
}

const reducer = {
  palette: paletteReducer,
};

const store = configureStore({
  reducer,
  preloadedState: {
    palette: {
      ...(storage.get('palette') || INITIAL_STATE),
    } 
  }
});

syncState(store)

export default store;
