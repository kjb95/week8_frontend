import React, {createContext, useMemo, useState} from 'react';
import {Layout} from 'antd';
import ItemLookUp from "./contentbody/ItemLookUp";
import ItemLookUpResult from "./contentbody/ItemLookUpResult";

export interface Item {
	itemNo: string,
	itemName: string,
	adultYn: string,
	itemOrgCost: number,
	itemActYn: string
}

interface Items {
	items: Item[],
	setItems: React.Dispatch<React.SetStateAction<Item[]>>
}

const ItemContextDefaultValue: Items = {
	items: [],
	setItems: () => {
	},
}

export const ItemContext = createContext(ItemContextDefaultValue);

function AdRegContent() {
	const {Content} = Layout;
	const [items, setItems] = useState<Item[]>([]);
	const value = useMemo(
		() => ({
			items: items,
			setItems: setItems
		}),
		[items]
	);

	return (
		<Content>
			<div className="site-layout-content">
				<div className="inner-content">
					<div className="content-header"><h1 className="fz-32 fc-gray-900">광고 등록</h1></div>
					<div className="content-body">
						<ItemContext.Provider value={value}>
							<ItemLookUp/>
							<ItemLookUpResult/>
						</ItemContext.Provider>
					</div>
				</div>
			</div>
		</Content>
	);
}

export default AdRegContent;