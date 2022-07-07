import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authService} from "../../services/auth.service";
import {setToken} from "./auth.slice";
import {adminService} from "../../services/admin.service";
import {ILocality} from "../../interfaces/locality.interface";
import locality from "../../components/Locality/Locality";
const initialState = {
    result: [],
    accessToken: '',
    locality:[] as ILocality[]
}
export const getLocality= createAsyncThunk(
    'admin/addDish',
    async (_ , {dispatch}) => {
        try {
            const {data} = await adminService.getLocality()
            if (data){
                dispatch(setLocalityData(data))
            }

            // console.log(data)
        } catch (e) {
            console.log(e);
        }
    }
)
export const addDish= createAsyncThunk(
    'admin/addDish',
    async (data: any, {dispatch}) => {
        try {
            let response = await adminService.addDish(data);
            // console.log(response)
        } catch (e) {
            console.log(e);
        }
    }
)

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers:{
        setLocalityData: (state, action: PayloadAction<ILocality[]>) => {
           state.locality=action.payload;
        }
        }
})
const adminReducer = adminSlice.reducer;
export default adminReducer;
export const {
setLocalityData
} = adminSlice.actions