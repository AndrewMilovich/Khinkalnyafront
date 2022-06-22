import axios from "axios";
import apiURL from "../constants/urls";

export const axiosService=axios.create({baseURL:apiURL})