import {Key, ReactNode} from "react";

export interface ChildProps {
	children: ReactNode
}

export interface Adv {
	adIngActYn: boolean,
	balance: number,
	eventMoney: number,
	dayLimitBudget: number
}

export interface AdMngItem {
	key: number,
	itemNo: string,
	itemName: string,
	adUseConfigYn: boolean
}

export interface AdRegItem {
	key: string,
	itemNo: string,
	itemName: string,
	adultYn: string,
	itemOrgCost: number,
	itemActYn: string
}

export interface AdRegKwd {
	key: string,
	keywordName: string,
	bid: string
}

export interface AdRegKwdWithoutKey {
	keywordName: string,
	bid: string
}

export interface AdMngAdGroupListAdGroup {
	key: Key,
	agroupName: string,
	agroupUseConfigYn: string,
	itemCountLiveAndAll: string,
}

export interface AdRegAdGroup {
	agroupId: string,
	agroupName: string
}

export interface AdMngSetAdGroup {
	agroupName: string,
	agroupUseConfigYn: boolean,
	regTime: string
}