import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {dishService} from "../../services/dish.service";
import {IDish} from "../../interfaces/dish.interface";

const initialState = {
    result: [] as IDish[]
}
export const getDishes = createAsyncThunk(
    'dish/allDishes',
    async (_, {dispatch}) => {
        try {
            const {data} = await dishService.getDish()
            if (data) {
                dispatch(setFirstDish(data))
            }
        } catch (e) {
            console.log(e);
        }
    }
)
const dishSlice = createSlice({
    name: 'dish',
    initialState,
    reducers: {
        setFirstDish: (state, action: PayloadAction<IDish[]>) => {
            state.result = action.payload;
        },
    }
})
const dishReducer = dishSlice.reducer;
export default dishReducer;
export const {
    setFirstDish
} = dishSlice.actions