import {Button, message, Table} from "antd";
import Column from "antd/es/table/Column";
import React, {useContext} from 'react';
import {INACTIVE_ITEM} from "../../../../../../../constants/Constant";
import {AdRegisterContext} from "../../../../../../../contexts/AdRegisterContext";
import {Item, ItemDefaultValue, ItemLookUpContext} from "../../../../../../../contexts/ItemLookUpContext";
import SectionBody from "../../../../../../section/SectionBody";

function ItemLookUpResultBody() {
	const itemLookUpContext = useContext(ItemLookUpContext);
	const adRegisterContext = useContext(AdRegisterContext);
	const actN = INACTIVE_ITEM;
	const [messageApi, contextHolder] = message.useMessage();

	function handleItemSelect(record: Item) {
		if (record.itemActYn === actN) {
			adRegisterContext.setSelectedItem(ItemDefaultValue);
			return messageApi.error("비활성화된 상품은 광고 등록을 진행 X");
		}
		adRegisterContext.setSelectedItem(record);
		adRegisterContext.setItemId(record.key);
	}

	return (
		<SectionBody>
			{contextHolder}
			<Table dataSource={itemLookUpContext.items} bordered pagination={{showSizeChanger: true, showTotal: ((total) => <p>Total {total} items</p>)}}>
				<Column title="상품번호" dataIndex="itemNo" align="center"/>
				<Column title="상품명" dataIndex="itemName" align="center"/>
				<Column title="성인 상품 여부" dataIndex="adultYn" align="center"/>
				<Column title="상품 가격" dataIndex="itemOrgCost" align="center"/>
				<Column title="상품 활성화 여부" dataIndex="itemActYn" align="center"/>
				<Column title="상품 선택" dataIndex="itemSelect" align="center"
				        render={(_, record: Item) => (<Button type="default" size="small" className="pink" onClick={() => handleItemSelect(record)}>선택</Button>)}
				/>
			</Table>
		</SectionBody>
	);
}

export default ItemLookUpResultBody;