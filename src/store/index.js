import { configureStore} from "@reduxjs/toolkit";
import stationReducer from "./stationSlice";

const store = configureStore({
    reducer: {
        station: stationReducer
    }
});

export default store;