import React, {createContext} from "react";
import {Item, ItemDefaultValue} from "./ItemLookUpContext";

export interface Keyword {
	key: string,
	keywordName: string,
	bid: string
}

export const KeywordDefaultValue: Keyword = {
	key: "",
	keywordName: "",
	bid: "0"
}

export interface AdRegisterContextData {
	agroupId: string,
	setAGroupId: React.Dispatch<React.SetStateAction<string>>
	itemId: string,
	setItemId: React.Dispatch<React.SetStateAction<string>>
	advId: string | null,
	keywordList: Keyword[],
	setKeywordList: React.Dispatch<React.SetStateAction<Keyword[]>>
	selectedItem: Item
	setSelectedItem: React.Dispatch<React.SetStateAction<Item>>
}

const AdRegisterContextDefaultValue: AdRegisterContextData = {
	agroupId: "",
	setAGroupId: () => {
	},
	itemId: "",
	setItemId: () => {
	},
	advId: "",
	keywordList: [],
	setKeywordList: () => {
	},
	selectedItem: ItemDefaultValue,
	setSelectedItem: () => {
	}
}
export const AdRegisterContext = createContext(AdRegisterContextDefaultValue);
