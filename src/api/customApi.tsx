import axios from "axios";
import { JWT_TOKEN } from "../const/Const";

export const api = axios.create({
	headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(function (config) {
	const jwtToken = sessionStorage.getItem(JWT_TOKEN);
	config.headers.Authorization = `Bearer ${jwtToken}`;
	return config;
});

export function findAllImpCnt() {
	return api.get("/api/user-access/all/impCnt");
}

export function findAllClickCnt() {
	return api.get("/api/user-access/all/clickCnt");
}

export function findAllUserAccess() {
	return api.get("/api/user-access/all");
}

interface user {
	username: string;
	password: string;
}

export function jwtAuthenticate(data: user) {
	return api.post("/api/jwt", data);
}

export function findAuthorities(username: string) {
	return api.get("/api/client/" + username);
}
