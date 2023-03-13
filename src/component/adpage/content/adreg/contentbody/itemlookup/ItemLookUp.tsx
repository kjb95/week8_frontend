import React, {createContext, useContext, useMemo, useState} from 'react';
import {AdRegisterContext} from "../../AdRegContent";
import ItemLookUpByCondition from "./ItemLookUpByCondition";
import ItemLookUpResult from "./ItemLookUpResult";
import ItemSelected from "./ItemSelected";

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

interface IItemContext {
	items: Item[],
	setItems: React.Dispatch<React.SetStateAction<Item[]>>
	selectedItem: Item,
	setSelectedItem: React.Dispatch<React.SetStateAction<Item>>
}

const ItemContextDefaultValue: IItemContext = {
	items: [],
	setItems: () => {
	},
	selectedItem: ItemDefaultValue,
	setSelectedItem: () => {
	},
}

export const ItemContext = createContext(ItemContextDefaultValue);

function ItemLookUp() {
	const [items, setItems] = useState<Item[]>([]);
	const [selectedItem, setSelectedItem] = useState<Item>(ItemDefaultValue);
	const value = useMemo(
		() => ({
			items: items,
			setItems: setItems,
			selectedItem: selectedItem,
			setSelectedItem: setSelectedItem
		}),
		[items, selectedItem]
	);
	const adRegisterContext = useContext(AdRegisterContext);
	const isLookUp = items.length !== 0;

	return (
		<ItemContext.Provider value={value}>
			<ItemLookUpByCondition/>
			{isLookUp && <ItemLookUpResult/>}
			{adRegisterContext.isSelectedItem && <ItemSelected/>}
		</ItemContext.Provider>
	);
}

export default ItemLookUp;