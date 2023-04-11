import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: process.env.REACT_BASE_URL || "http://localhost:80/api/"
})