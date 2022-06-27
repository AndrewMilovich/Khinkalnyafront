import axios from "axios";
import apiURL, {urls} from "../constants/urls";
import {authService} from "./auth.service";
import {useAppSelector} from "../hooks/redux";
import {IUser} from "../interfaces";
import {axiosService} from "./axios.service";


export const userService=  {
    getAllUsers:(accessToken: string)=>axiosService.get<IUser[]>(urls.user,{ headers:{
            Authorization: `Bearer ${accessToken}`
        }}),
}
