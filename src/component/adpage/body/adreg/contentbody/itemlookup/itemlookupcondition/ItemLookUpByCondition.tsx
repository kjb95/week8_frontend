import React, {useState} from 'react';
import ItemLookUpByConditionBody from "./ItemLookUpByConditionBody";
import ItemLookUpByConditionFooter from "./ItemLookUpByConditionFooter";
import ItemLookUpByConditionHeader from "./ItemLookUpByConditionHeader";

export interface ItemData {
	itemName: string,
	itemNo: string
}

const ItemDataDefault: ItemData = {
	itemName: "", itemNo: ""
}

function ItemLookUpByCondition() {
	const [itemData, setItemData] = useState<ItemData>(ItemDataDefault);

	return (
		<section className="wrap-section wrap-tbl">
			<ItemLookUpByConditionHeader/>
			<ItemLookUpByConditionBody itemData={itemData} setItemData={setItemData}/>
			<ItemLookUpByConditionFooter itemData={itemData}/>
		</section>
	);
}

export default ItemLookUpByCondition;