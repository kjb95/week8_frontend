import React, {useContext} from 'react';
import {ItemLookUpContext} from "../../../../../../contexts/adreg/ItemLookUpContextProvider";
import ItemLookUpByCondition from "./itemlookupcondition/ItemLookUpByCondition";
import ItemLookUpResult from "./itemlookupresult/ItemLookUpResult";

function ItemLookUp() {
	const itemLookUpContext = useContext(ItemLookUpContext);
	const isLookUp = itemLookUpContext.items.length !== 0;
	return (
		<>
			<ItemLookUpByCondition/>
			{isLookUp && <ItemLookUpResult/>}
		</>
	);
}

export default ItemLookUp;