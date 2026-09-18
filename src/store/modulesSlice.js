import {createSlice} from "@reduxjs/toolkit";

const modulesSlice = createSlice({
    name: "modules",
    initialState: {
        items: [
            {id: 'm1', name: 'Living Quarters', isPowered: true, powerConsumption: 15},
            {id: 'm2', name: 'Science Lab', isPowered: true, powerConsumption: 25},
            {id: 'm3', name: 'Propulsion Module', isPowered: false, powerConsumption: 40},
            {id: 'm4', name: 'Greenhouse Bay', isPowered: true, powerConsumption: 20},
        ]
    },
    reducers: {
        toggleModulePower: (state, action) => {
            const module = state.items.find(m => m.id === action.payload);
            if (module) {
                module.isPowered = !module.isPowered;
            }
        }
    }
});

export const modulesActions = modulesSlice.actions;
export default modulesSlice.reducer;