import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces";
import {authService} from "../../services/auth.service";

const initialState={
    result:[]
}
export const registrationUser=createAsyncThunk(
    'registration/user',
    async (data:IUser)=>{
        await authService.registration(data)
    }
)

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{}
})
const authReducer=authSlice.reducer;
export default  authReducer;