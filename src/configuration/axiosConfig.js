import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: process.env.REACT_BASE_URL || "https://api-rest-0sf0.onrender.com/api/"
})