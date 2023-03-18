import axios from "axios";
import React from "react";
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
	return api.get("/api/agroup/all");
}

/**
 * 광고 등록
 */
export function registerAd(adRegisterData: AdRegisterData) {
	return api.post("/api/ad", adRegisterData)
}

/**
 * 광고주 조회
 */
export function findAdv(advId: string | null) {
	return api.get("/api/adv/" + advId);
}

/**
 * 일일 허용 예산 설정 변경
 */
export function updateDayLimitBudget(advId: string | null, dayLimitBudget: string) {
	return api.post("/api/adv/day-limit-budget", {
		advId: advId,
		dayLimitBudget: dayLimitBudget
	});
}

/**
 * 광고주의 광고 진행 활성 여부 변경
 */
export function updateAdIngActYn(advId: string | null, isOn: boolean) {
	return api.post("api/adv/ad-ing-act-yn", {
		advId: advId,
		on: isOn
	})
}

/**
 * 조건에 따른 그룹 검색
 */
export function findGroup(groupNameCondition: string) {
	return api.get("/api/agroup?groupName=" + groupNameCondition);
}

/**
 * 광고 그룹의 사용 설정 여부 변경
 */
export function updateAdGroupUseConfig(adGroupIds: React.Key[], on: boolean) {
	return api.put("api/agroup/use-config", {
		adGroupIds: adGroupIds,
		on: on
	})
}

/**
 * 광고 그룹 등록
 */
export function registerAdGroup(adGroupName: string) {
	return api.post("api/agroup", {adGroupName: adGroupName});
}

/**
 * 광고 그룹 활성 여부 끄기
 */
export function updateAdGroupActOff(adGroupIds: React.Key[]) {
	return api.put("api/agroup/act-off", {
		adGroupIds: adGroupIds
	})
}