import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Ted Mosby'},
    {id: '1', name: 'Lilly Aldrin'},
    {id: '2', name: 'Barney Stinson'},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer