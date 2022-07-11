import {IDish} from "../interfaces/dish.interface";
import {axiosService}  from "./axios.service";
import {urls} from "../constants";
import {ILocality} from "../interfaces/locality.interface";


export const adminService={
    addDish:(data:IDish)=>axiosService.post<any>(urls.dish,data),
    getLocality:()=>axiosService.get<ILocality[]>(urls.locality),
    addLocality:(data:any)=>axiosService.post<any>(urls.locality,data),
    getRestaurant:()=>axiosService.get<any>(urls.restaurant),
    addRestaurant:(data:any)=>axiosService.post<any>(urls.restaurant,data)
}
