import axios from "axios";
import {JWT_TOKEN} from "../const/Const";
import {ItemData} from "../component/adreg/content/contentbody/ItemLookUp";
import {LoginForm} from "../page/Login";

export const api = axios.create({
	headers: {"Content-Type": "application/json"},
});

api.interceptors.request.use(function (config) {
	const jwtToken = sessionStorage.getItem(JWT_TOKEN);
	config.headers.Authorization = `Bearer ${jwtToken}`;
	return config;
});

export function jwtAuthenticate(data: LoginForm) {
	return api.post("/api/jwt", data);
}

export function findAuthorities(username: string) {
	return api.get("/api/member/" + username);
}

export function itemLookUp(itemData: ItemData) {
	return api.post("/api/item/search", itemData);
}