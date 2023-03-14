import React, {createContext} from "react";

export interface Item {
	key: string,
	itemNo: string,
	itemName: string,
	adultYn: string,
	itemOrgCost: number,
	itemActYn: string
}

export const ItemDefaultValue: Item = {
	key: "",
	itemNo: "",
	itemName: "",
	adultYn: "",
	itemOrgCost: 0,
	itemActYn: "",
}

interface ItemLookUpContextInterface {
	items: Item[],
	setItems: React.Dispatch<React.SetStateAction<Item[]>>
}

const ItemLookUpContextDefaultValue: ItemLookUpContextInterface = {
	items: [],
	setItems: () => {
	},
}

export const ItemLookUpContext = createContext(ItemLookUpContextDefaultValue);