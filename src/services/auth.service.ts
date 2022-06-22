import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IUser} from "../interfaces";

export const authService={
    registration:(data:IUser)=>axiosService.post<IUser>(urls.registration,data),
    login: (data:Partial<IUser>)=>axiosService.post<IUser>(urls.login,data)
}