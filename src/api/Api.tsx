import axios from "axios";
import {AdRegisterData} from "../component/adpage/body/adreg/contentbody/AdRegister";
import {ItemData} from "../component/adpage/body/adreg/contentbody/itemlookup/itemlookupcondition/ItemLookUpByCondition";
import {JWT_TOKEN} from "../constants/Constant";
import {LoginForm} from "../pages/Login";

export const api = axios.create({
	headers: {"Content-Type": "application/json"},
});

api.interceptors.request.use(function (config) {
	const jwtToken = sessionStorage.getItem(JWT_TOKEN);
	config.headers.Authorization = `Bearer ${jwtToken}`;
	return config;
});

/**
 * 로그인 성공시 jwt 토큰 반환
 */
export function jwtAuthenticate(data: LoginForm) {
	return api.post("/api/jwt", data);
}

/**
 * 유저가 가진 모든 권한 조회
 */
export function findAuthorities(username: string) {
	return api.get("/api/member/" + username);
}

/**
 * 조건에 따른 상품 조회
 */
export function itemLookUp(itemData: ItemData) {
	return api.post("/api/item/search", itemData);
}

/**
 * 모든 광고 그룹의 아이디와 이름만 조회
 */
export function findAllAGroup() {
	return api.get("/api/agroup");
}

/**
 * 광고 등록
 */
export function registerAd(adRegisterData: AdRegisterData) {
	return api.post("/api/ad", adRegisterData)
}