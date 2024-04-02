import { configureStore, createSlice } from "@reduxjs/toolkit" 

    const initialState ={value: {username: ""}}
    const userSlice = createSlice({
        name: "user",
        initialState,
        reducers: {
            Login: (state, action) =>{
                state.value = action.payload;
            },
            Logout: (state) => {
                state = initialState
            }
        }
    })

    export const {Login, Logout} = userSlice.actions;
export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    },
})