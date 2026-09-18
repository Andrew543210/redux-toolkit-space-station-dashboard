import { createSlice } from '@reduxjs/toolkit';

const stationSlice = createSlice({
  name: 'station',
  initialState: {
    oxygen: 85,
    energy: 100,
    shields: 50,
    alertLevel: 'GREEN',
  },
  reducers: {
    changeOxygen: (state, action) => {
      const newOxygen = state.oxygen + action.payload;
      state.oxygen = Math.max(0, Math.min(100, newOxygen));
    },
    changeEnergy: (state, action) => {
      const newEnergy = state.energy + action.payload;
      state.energy = Math.max(0, Math.min(100, newEnergy));
    },
    changeShields: (state, action) => {
      const newShields = state.shields + action.payload;
      state.shields = Math.max(0, Math.min(100, newShields));
    },
    setAlertLevel: (state, action) => {
      state.alertLevel = action.payload;
    },
  },
});

export const stationActions = stationSlice.actions;
export default stationSlice.reducer;
