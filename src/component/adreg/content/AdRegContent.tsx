import React, {createContext, useMemo, useState} from 'react';
import {Layout} from 'antd';
import ItemLookUp from "./contentbody/ItemLookUp";
import ItemLookUpResult from "./contentbody/ItemLookUpResult";
import ItemSelected from "./contentbody/ItemSelected";
import AdGroupSelect from "./contentbody/AdGroupSelect";
import AdKeyword from "./contentbody/adkeywordlist/AdKeywordList";

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

interface Items {
	items: Item[],
	setItems: React.Dispatch<React.SetStateAction<Item[]>>
	selectedItem: Item,
	setSelectedItem: React.Dispatch<React.SetStateAction<Item>>
}

const ItemContextDefaultValue: Items = {
	items: [],
	setItems: () => {
	},
	selectedItem: ItemDefaultValue,
	setSelectedItem: () => {
	},
}

export const ItemContext = createContext(ItemContextDefaultValue);

function AdRegContent() {
	const {Content} = Layout;
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
	const isSelectedItem = selectedItem.key !== "";

	return (
		<Content>
			<div className="site-layout-content">
				<div className="inner-content">
					<div className="content-header"><h1 className="fz-32 fc-gray-900">광고 등록</h1></div>
					<div className="content-body">
						<ItemContext.Provider value={value}>
							<ItemLookUp/>
							{isLookUp && <ItemLookUpResult/>}
							{isSelectedItem && <ItemSelected/>}
							{isSelectedItem && <AdGroupSelect/>}
							{isSelectedItem && <AdKeyword/>}
						</ItemContext.Provider>
					</div>
				</div>
			</div>
		</Content>
	);
}

export default AdRegContent;