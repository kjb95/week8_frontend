import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {updateItemsInAdgroup} from "../../../../constants/Function";
import {AdMngItem} from "../../../../constants/Interface";
import AdPageBody from "../../AdPageBody";
import AdGroupSet from "./contentbody/adgroupset/AdGroupSet";
import ItemList from './contentbody/adgroupset/ItemList';
import ItemSearch from "./contentbody/adgroupset/ItemSearch";

function AdMngItemsContent() {
	const [items, setItems] = useState<AdMngItem[]>([]);
	const [itemName, setItemName] = useState<string>("");
	const [itemNo, setItemNo] = useState<string>("");
	const params = useParams();

	useEffect(() => {
		updateItemsInAdgroup(params.id, "", "", setItems);
	}, [params.id, setItems]);

	return (
		<AdPageBody title="광고관리 / 상품">
			<AdGroupSet items={items} setItems={setItems}/>
			<ItemSearch itemName={itemName} setItemName={setItemName} itemNo={itemNo} setItemNo={setItemNo} setItems={setItems}/>
			<ItemList items={items} itemName={itemName} itemNo={itemNo} setItems={setItems}/>
		</AdPageBody>
	);
}

export default AdMngItemsContent;