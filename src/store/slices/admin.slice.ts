import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {adminService} from "../../services/admin.service";
import {ILocality} from "../../interfaces/locality.interface";
import {IDish} from "../../interfaces/dish.interface";

const initialState = {
    result: [],
    accessToken: '',
    locality: [] as ILocality[],
    restaurant: [] as ILocality[],
    Dish: [] as IDish[]
}
export const getLocality = createAsyncThunk(
    'admin/addDish',
    async (_, {dispatch}) => {
        try {
            const {data} = await adminService.getLocality()
            console.log(data)
            if (data) {
                dispatch(setLocalityData(data))
            }
        } catch (e) {
            console.log(e);
        }
    }
)
export const getRestaurant = createAsyncThunk(
    'admin/addDish',
    async (_, {dispatch}) => {
        try {
            const {data} = await adminService.getRestaurant()
            if (data) {
                dispatch(setRestaurantData(data))
            }

        } catch (e) {
            console.log(e);
        }
    }
)
export const addRestaurant = createAsyncThunk(
    'admin/addRestaurant',
    async (data: any, {dispatch}) => {
        try {
            let response = await adminService.addRestaurant(data);
        } catch (e) {
            console.log(e);
        }
    }
)
export const addLocality = createAsyncThunk(
    'admin/addLocality',
    async (data: ILocality, {dispatch}) => {
        try {
            let response = await adminService.addLocality(data);
        } catch (e) {
            console.log(e);
        }
    }
)
export const addDish = createAsyncThunk(
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
    reducers: {
        setLocalityData: (state, action: PayloadAction<ILocality[]>) => {
            state.locality = action.payload;
            console.log(action.payload);
        },
        setRestaurantData: (state, action: PayloadAction<ILocality[]>) => {
            state.restaurant = action.payload;
        }
    }
})
const adminReducer = adminSlice.reducer;
export default adminReducer;
export const {
    setLocalityData, setRestaurantData
} = adminSlice.actions