import React, {createContext, ReactNode, useMemo, useState} from "react";
import {AUTHENTICATED_MEMBER_ID} from "../../constants/Constant";
import {Item, ItemDefaultValue} from "./ItemLookUpContextProvider";

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

interface Props {
	children: ReactNode
}

function AdRegisterContextProvider({children}: Props) {
	const [agroupId, setAGroupId] = useState<string>("");
	const [itemId, setItemId] = useState<string>("");
	const [keywordList, setKeywordList] = useState<Keyword[]>([]);
	const [selectedItem, setSelectedItem] = useState<Item>(ItemDefaultValue);
	const advId = sessionStorage.getItem(AUTHENTICATED_MEMBER_ID);

	const value = useMemo(
		() => ({
			agroupId: agroupId,
			setAGroupId: setAGroupId,
			itemId: itemId,
			setItemId: setItemId,
			advId: advId,
			keywordList: keywordList,
			setKeywordList: setKeywordList,
			selectedItem: selectedItem,
			setSelectedItem: setSelectedItem
		}),
		[agroupId, itemId, advId, keywordList, selectedItem]
	);
	return (
		<AdRegisterContext.Provider value={value}>
			{children}
		</AdRegisterContext.Provider>
	);
}

export default AdRegisterContextProvider;