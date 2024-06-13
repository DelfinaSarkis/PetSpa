import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    userAppointments: []
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
        },
        addAppointments: (state, action) => {
            state.userAppointments.push(action.payload);
        },
        setAppointments: (state, action) => {
            state.userAppointments = action.payload;
        }
    },
});

export const { addUser, addAppointments, setAppointments } = userSlice.actions;

export default userSlice.reducer;