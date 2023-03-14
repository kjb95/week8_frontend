import React, {useState} from 'react';
import SectionHeader from "../../../../../../section/SectionHeader";
import ItemLookUpByConditionBody from "./ItemLookUpByConditionBody";
import ItemLookUpByConditionFooter from "./ItemLookUpByConditionFooter";

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
			<SectionHeader>
				<h2 className="fz-24 fc-gray-700">상품 조회</h2>
			</SectionHeader>
			<ItemLookUpByConditionBody itemData={itemData} setItemData={setItemData}/>
			<ItemLookUpByConditionFooter itemData={itemData}/>
		</section>
	);
}

export default ItemLookUpByCondition;