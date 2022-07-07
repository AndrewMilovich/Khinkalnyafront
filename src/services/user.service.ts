import {IUser} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const userService = {
    getAllUsers: () => axiosService.get<IUser[]>(urls.user)
}
