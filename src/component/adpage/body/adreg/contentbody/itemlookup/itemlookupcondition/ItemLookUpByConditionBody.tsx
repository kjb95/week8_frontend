import {Input} from "antd";
import React from 'react';
import Dd from "../../../../../../table/Dd";
import Dt from "../../../../../../table/Dt";
import SectionBody from "../../../../../../section/SectionBody";
import {ItemData} from "./ItemLookUpByCondition";

interface Props {
	itemData: ItemData,
	setItemData: React.Dispatch<React.SetStateAction<ItemData>>
}

function ItemLookUpByConditionBody({itemData, setItemData}: Props) {
	return (
		<SectionBody>
			<dl>
				<Dt title="상품명"/>
				<Dd>
					<Input value={itemData.itemName} placeholder="상품명을 입력하세요." style={{width: 500}}
					       onChange={(e) => setItemData({itemName: e.target.value, itemNo: itemData.itemNo})}
					/>
				</Dd>
			</dl>
			<dl>
				<Dt title="상품번호"/>
				<Dd>
					<Input value={itemData.itemNo} placeholder="상품번호를 입력하세요." style={{width: 500}}
					       onChange={(e) => setItemData({itemName: itemData.itemName, itemNo: e.target.value})}
					/>
				</Dd>
			</dl>
		</SectionBody>
	);
}

export default ItemLookUpByConditionBody;