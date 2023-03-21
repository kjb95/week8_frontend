import React from "react";
import {findAdGroup, findAdGroups} from "../api/agroup/AgroupApi";
import {findItemsInAdGroup} from "../api/item/ItemApi";
import {AUTHENTICATED_MEMBER_ID} from "./Constant";
import {AdMngAdGroupListAdGroup, AdMngItem, AdMngSetAdGroup} from "./Interface";

export function updateGroupSearch(adGroupNameSearchKeyword: string, setAdGroups: React.Dispatch<React.SetStateAction<AdMngAdGroupListAdGroup[]>>) {
	findAdGroups(adGroupNameSearchKeyword)
		.then(res => setAdGroups(res.data.agroups))
		.catch(e => console.log(e))
}

export function updateAdGroup(adGroupId: string | undefined, setAdGroup: React.Dispatch<React.SetStateAction<AdMngSetAdGroup>>) {
	findAdGroup(adGroupId, sessionStorage.getItem(AUTHENTICATED_MEMBER_ID))
		.then(res => setAdGroup(res.data))
		.catch(e => console.log(e));
}

export function updateItemsInAdgroup(adGroupId: string | undefined, itemName: string, itemNo: string, setItems: React.Dispatch<React.SetStateAction<AdMngItem[]>>) {
	findItemsInAdGroup(adGroupId, itemName, itemNo)
		.then((res) => setItems(res.data.items))
		.catch(e => console.log(e));
}