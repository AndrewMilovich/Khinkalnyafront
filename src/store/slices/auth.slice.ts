import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces";
import {authService} from "../../services/auth.service";
import {userService} from "../../services/user.service";

const initialState = {
    result: [],
    accessToken: '',
    isLog: false,
    refreshToken: ''
}
export const registrationUser = createAsyncThunk(
    'auth/registration',
    async (data: any, {dispatch}) => {
        try {
            let response = await authService.registration(data);
            dispatch(setToken(response.data))
        } catch (e) {
            console.log(e);
        }
    }
)

export const getAll = createAsyncThunk(
    'auth/user',
    async (_, {dispatch, getState}) => {
        try {
            const response = await userService.getAllUsers();
            console.log(response)
            // dispatch(setUsers(response.data))

        }catch (e) {
            console.log(e);
        }

    });


export const loginUser = createAsyncThunk(
    'auth/login',
    async (data: Partial<IUser>, {dispatch, getState}) => {

        let response = await authService.login(data);
        dispatch(setToken(response.data))
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: any) => {
            localStorage.setItem('access', action.payload.tokenPair.accessToken)
            localStorage.setItem('refresh', action.payload.tokenPair.refreshToken)
            state.isLog = true;
        },
        setUsers: (state, action: any) => {
            console.log('-----------------');
            console.log(action.payload);
            console.log('-----------------');
            // state.users = action.payload
        }
    }
})
const authReducer = authSlice.reducer;
export default authReducer;
export const {
    setToken,setUsers
} = authSlice.actions