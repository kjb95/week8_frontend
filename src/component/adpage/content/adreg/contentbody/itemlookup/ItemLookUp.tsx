import React, {createContext, useEffect, useMemo, useState} from 'react';
import ItemSelected from "./ItemSelected";
import ItemLookUpByCondition from "./ItemLookUpByCondition";
import ItemLookUpResult from "./ItemLookUpResult";

export interface Item {
	key: string,
	itemNo: string,
	itemName: string,
	adultYn: string,
	itemOrgCost: number,
	itemActYn: string
}

const ItemDefaultValue: Item = {
	key: "",
	itemNo: "",
	itemName: "",
	adultYn: "",
	itemOrgCost: 0,
	itemActYn: "",
}

interface ItemLookUp {
	items: Item[],
	setItems: React.Dispatch<React.SetStateAction<Item[]>>
	selectedItem: Item,
	setSelectedItem: React.Dispatch<React.SetStateAction<Item>>
}

const ItemContextDefaultValue: ItemLookUp = {
	items: [],
	setItems: () => {
	},
	selectedItem: ItemDefaultValue,
	setSelectedItem: () => {
	},
}

export const ItemContext = createContext(ItemContextDefaultValue);

interface Props {
	setIsSelectedItem: React.Dispatch<React.SetStateAction<boolean>>
}

function Items({setIsSelectedItem}: Props) {
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
	const isLookUp = items.length !== 0;

	useEffect(() => {
		if (selectedItem.key !== "") {
			setIsSelectedItem(true)
		}
	}, [selectedItem, setIsSelectedItem])

	return (
		<ItemContext.Provider value={value}>
			<ItemLookUpByCondition/>
			{isLookUp && <ItemLookUpResult/>}
			{selectedItem.key !== "" && <ItemSelected/>}
		</ItemContext.Provider>
	);
}

export default Items;