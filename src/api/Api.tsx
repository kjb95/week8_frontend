import axios from "axios";
import React, {Key} from "react";
import {JWT_TOKEN} from "../constants/Constant";
import {AdRegKwdWithoutKey} from "../constants/Interface";

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
export function jwtAuthenticate(username: string, password: string) {
	return api.post("/api/jwt", {
		username: username,
		password: password
	});
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
export function itemLookUp(itemName: string, itemNo: string) {
	return api.post("/api/item/search", {
		itemName: itemName,
		itemNo: itemNo
	});
}

/**
 * 모든 광고 그룹의 아이디와 이름만 조회
 */
export function findAllAdGroupIdAndName() {
	return api.get("/api/agroup/all-id-name");
}

/**
 * 광고 등록
 */
export function registerAd(agroupId: string, itemId: string, advId: string | null, keywordList: AdRegKwdWithoutKey[]) {
	return api.post("/api/ad", {
		agroupId: agroupId,
		itemId: itemId,
		advId: advId,
		keywordList: keywordList
	})
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
	return api.post("/api/adv/ad-ing-act-yn", {
		advId: advId,
		on: isOn
	})
}

/**
 * 조건에 따른 광고 그룹 검색
 */
export function findAdGroups(groupNameCondition: string) {
	return api.get("/api/agroup/all?groupName=" + groupNameCondition);
}

/**
 * 광고 그룹의 사용 설정 여부 변경
 */
export function updateAdGroupUseConfig(adGroupIds: (Key | undefined)[], on: boolean) {
	return api.put("/api/agroup/use-config", {
		adGroupIds: adGroupIds,
		on: on
	})
}

/**
 * 광고 그룹 등록
 */
export function registerAdGroup(adGroupName: string) {
	return api.post("/api/agroup", {adGroupName: adGroupName});
}

/**
 * 광고 그룹 활성 여부 끄기
 */
export function updateAdGroupActOff(adGroupIds: React.Key[]) {
	return api.put("/api/agroup/act-off", {
		adGroupIds: adGroupIds
	})
}

/**
 * 광고 그룹 한개 조회
 */
export function findAdGroup(adGroupId: string | undefined, advId: string | null) {
	return api.post("/api/agroup/search", {
		adGroupId: adGroupId,
		advId: advId
	});
}

/**
 * 광고 그룹명 변경
 */
export function updateAdGroupName(adGroupId: string | undefined, adGroupName: string) {
	return api.put("/api/agroup/ad-group-name", {
		adGroupId: adGroupId,
		adGroupName: adGroupName
	})
}