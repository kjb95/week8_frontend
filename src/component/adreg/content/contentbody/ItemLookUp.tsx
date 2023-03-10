import React, {useContext, useState} from 'react';
import {Button, Input} from "antd";
import {itemLookUp} from "../../../../api/customApi";
import {ItemContext} from "../AdRegContent";

export interface ItemData {
	itemName: string,
	itemNo: string
}

const ItemDataDefault: ItemData = {
	itemName: "", itemNo: ""
}

function ItemLookUp() {
	const context = useContext(ItemContext);
	const [itemData, setItemData] = useState<ItemData>(ItemDataDefault);

	function handleClick(itemData: ItemData) {
		itemLookUp(itemData)
			.then((res) => context.setItems(res.data.items))
			.catch((e) => console.log(e))
	}

	return (
		<section className="wrap-section wrap-tbl">
			<div className="box-header">
				<div className="box-left">
					<div className="box-left"><h2 className="fz-24 fc-gray-700">상품 조회</h2></div>
				</div>
			</div>
			<div className="box-body">
				<div className="tbl">
					<dl>
						<dt>
							<div className="dt-inner"><span className="fz-15 fc-gray-500">상품명</span></div>
						</dt>
						<dd>
							<div className="form-group">
								<Input value={itemData.itemName} placeholder="상품명을 입력하세요." style={{width: 500}}
								       onChange={(e) => setItemData({itemName: e.target.value, itemNo: itemData.itemNo})}
								/>
							</div>
						</dd>
					</dl>
					<dl>
						<dt>
							<div className="dt-inner"><span className="fz-15 fc-gray-500">상품번호</span></div>
						</dt>
						<dd>
							<div className="form-group">
								<Input value={itemData.itemNo} placeholder="상품번호를 입력하세요." style={{width: 500}}
								       onChange={(e) => setItemData({itemName: itemData.itemName, itemNo: e.target.value})}
								/>
							</div>
						</dd>
					</dl>
				</div>
			</div>
			<div className="box-footer">
				<div className="box-center">
					<Button type="primary" size="large" className="pink" onClick={() => handleClick(itemData)}>
						<span>조회</span>
					</Button>
				</div>
			</div>
		</section>
	);
}

export default ItemLookUp;