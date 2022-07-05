import apiURL, {urls} from "../constants/urls";
import {IUser} from "../interfaces";
import {axiosService} from "./axios.service";


export const userService=  {
    getAllUsers:(accessToken: string)=>axiosService.get<IUser[]>(urls.user,{ headers:{
            Authorization: `Bearer ${accessToken}`
        }}),
}
