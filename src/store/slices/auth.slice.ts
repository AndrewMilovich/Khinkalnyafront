import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces";
import {authService} from "../../services/auth.service";

const initialState = {
    result: [],
    accessToken: '',
    isLog:false,
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


export const loginUser = createAsyncThunk(
    'auth/login',
    async (data: Partial<IUser>, {dispatch, getState}) => {
        let response = await authService.login(data);
        console.log(response.data);
        dispatch(setToken(response.data))
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: any) => {
            console.log(action.payload);
            state.accessToken = action.payload.tokenPair.accessToken;
            state.refreshToken = action.payload.tokenPair.refreshToken;
            localStorage.setItem('access',action.payload.tokenPair.accessToken)
            localStorage.setItem('refresh',action.payload.tokenPair.refreshToken)
            state.isLog=true;
        }
    }
})
const authReducer = authSlice.reducer;
export default authReducer;
export const {
    setToken
} = authSlice.actions