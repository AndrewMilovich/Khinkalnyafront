import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import adminReducer from "./slices/admin.slice";
import dishReducer from "./slices/dish.slice";

const rootReducer = combineReducers({
    authReducer,
    adminReducer,
    dishReducer
})
export const setupStore = () => configureStore({
    reducer: rootReducer
})
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']