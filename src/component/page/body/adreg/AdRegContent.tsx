import React, {useState} from 'react';
import {ItemDefaultValue} from "../../../../constants/Constant";
import {AdRegItem, AdRegKwd} from "../../../../constants/Interface";
import AdPageBody from "../../AdPageBody";
import AdKeyword from "./contentbody/AdKeywordList";
import AdRegister from "./contentbody/AdRegister";
import AGroupSelect from "./contentbody/AGroupSelect";
import ItemLookUpByCondition from "./contentbody/ItemLookUpByCondition";
import ItemLookUpResult from "./contentbody/ItemLookUpResult";
import ItemSelected from "./contentbody/ItemSelected";

export const KeywordDefaultValue: AdRegKwd = {
	key: "",
	keywordName: "",
	bid: "0"
}

function AdRegContent() {
	const [agroupId, setAGroupId] = useState<string>("");
	const [itemId, setItemId] = useState<string>("");
	const [keywordList, setKeywordList] = useState<AdRegKwd[]>([]);
	const [selectedItem, setSelectedItem] = useState<AdRegItem>(ItemDefaultValue);
	const [items, setItems] = useState<AdRegItem[]>([]);
	const isSelectedItem = selectedItem.key !== "";
	const isLookUp = items.length !== 0;

	return (
		<AdPageBody title="광고 등록">
			<ItemLookUpByCondition setItems={setItems}/>
			{isLookUp && <ItemLookUpResult setSelectedItem={setSelectedItem} setItemId={setItemId} items={items}/>}
			{isSelectedItem && <>
				<ItemSelected selectedItem={selectedItem}/>
				<AGroupSelect setAGroupId={setAGroupId} agroupId={agroupId}/>
				<AdKeyword keywordList={keywordList} setKeywordList={setKeywordList}/>
				<AdRegister keywordList={keywordList} agroupId={agroupId} itemId={itemId}/></>
			}
		</AdPageBody>
	);
}

export default AdRegContent;