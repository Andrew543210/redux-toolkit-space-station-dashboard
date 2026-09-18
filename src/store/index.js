import {configureStore} from "@reduxjs/toolkit";
import stationReducer from "./stationSlice";
import modulesReducer from "./modulesSlice";
import alertsReducer from "./alertsSlice";

const store = configureStore({
    reducer: {
        station: stationReducer,
        modules: modulesReducer,
        alerts: alertsReducer
    }
});

export default store;