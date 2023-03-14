import React, {useMemo, useState} from 'react';
import {Item, ItemLookUpContext} from "../../../../../../contexts/ItemLookUpContext";
import ItemLookUpByCondition from "./itemlookupcondition/ItemLookUpByCondition";
import ItemLookUpResult from "./itemlookupresult/ItemLookUpResult";

function ItemLookUp() {
	const [items, setItems] = useState<Item[]>([]);
	const value = useMemo(
		() => ({
			items: items,
			setItems: setItems,
		}),
		[items]
	);
	const isLookUp = items.length !== 0;

	return (
		<ItemLookUpContext.Provider value={value}>
			<ItemLookUpByCondition/>
			{isLookUp && <ItemLookUpResult/>}
		</ItemLookUpContext.Provider>
	);
}

export default ItemLookUp;