import axios from "axios";
import {JWT_TOKEN} from "../constants/Constant";

export const api = axios.create({
	headers: {"Content-Type": "application/json"},
});

api.interceptors.request.use(function (config) {
	const jwtToken = sessionStorage.getItem(JWT_TOKEN);
	config.headers.Authorization = `Bearer ${jwtToken}`;
	return config;
});
