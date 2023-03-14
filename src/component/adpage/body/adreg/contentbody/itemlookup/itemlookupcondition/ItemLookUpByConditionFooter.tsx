import {Button} from "antd";
import React, {useContext} from 'react';
import {itemLookUp} from "../../../../../../../api/Api";
import {ItemLookUpContext} from "../../../../../../../contexts/ItemLookUpContext";
import SectionFooter from "../../../../../../section/SectionFooter";
import {ItemData} from "./ItemLookUpByCondition";

interface Props {
	itemData: ItemData
}

function ItemLookUpByConditionFooter({itemData}: Props) {
	const itemLookUpContext = useContext(ItemLookUpContext);

	function handleClick(itemData: ItemData) {
		itemLookUp(itemData)
			.then((res) => itemLookUpContext.setItems(res.data.items))
			.catch((e) => console.log(e))
	}

	return (
		<SectionFooter>
			<Button type="primary" size="large" className="pink" onClick={() => handleClick(itemData)}>조회</Button>
		</SectionFooter>
	);
}

export default ItemLookUpByConditionFooter;