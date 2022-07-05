import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authService} from "../../services/auth.service";
import {setToken} from "./auth.slice";
import {adminService} from "../../services/admin.service";
import {ILocality} from "../../interfaces/locality.interface";
const initialState = {
    result: [],
    accessToken: '',
    locality:[]
}
// export const getLocality= createAsyncThunk(
//     'admin/addDish',
//     async (data: any, {dispatch}) => {
//         try {
//             const {data} = await adminService.getLocality();
//             console.log(data)
//             dispatch(setLocalityData(data))
//         } catch (e) {
//             console.log(e);
//         }
//     }
// )
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

        }
})
const adminReducer = adminSlice.reducer;
export default adminReducer;
export const {
// setLocalityData
} = adminSlice.actions