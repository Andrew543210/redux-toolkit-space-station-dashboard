import { createSlice } from '@reduxjs/toolkit';

const alertsSlice = createSlice({
  name: 'alerts',
  initialState: {
    alerts: [
      {
        id: 'a1',
        message: 'Системи станції працюють у штатному режимі',
        type: 'info',
        timestamp: '12:00',
      },
    ],
  },
  reducers: {
    addAlert: (state, action) => {
      state.alerts.unshift(action.payload);
    },
    removeAlert: (state, action) => {
      state.alerts = state.alerts.filter(
        (alert) => alert.id !== action.payload
      );
    },
    clearAlerts: (state) => {
      state.alerts = [];
    },
  },
});

export const alertsActions = alertsSlice.actions;
export default alertsSlice.reducer;
