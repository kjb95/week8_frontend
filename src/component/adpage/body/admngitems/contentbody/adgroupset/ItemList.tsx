import {Button, message, Table} from "antd";
import Column from "antd/es/table/Column";
import React, {Key, useState} from 'react';
import {CSVLink} from "react-csv";
import {Link} from "react-router-dom";
import {AdMngAdGroupListAdGroup, AdMngItem} from "../../../../../../constants/Interface";
import SectionBody from "../../../../../section/SectionBody";
import SectionHeader from "../../../../../section/SectionHeader";

const csvHeaders = [
	{label: "번호", key: "itemId"},
	{label: "상품번호", key: "itemNo"},
	{label: "상품명", key: "itemName"},
	{label: "광고 상품 ON/OFF", key: "adUseConfigYn"}
];

interface Props {
	items: AdMngItem[]
}

function ItemList({items}: Props) {
	const [messageApi, contextHolder] = message.useMessage();
	const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
	const rowSelection = {onChange: (keys: React.Key[]) => setSelectedRowKeys(keys), selectedRowKeys: selectedRowKeys};

	return (
		<section className="wrap-section wrap-datagrid">
			<SectionHeader>
				<h2 className="fz-24 fc-gray-700">상품 리스트</h2>
				<>
					<Button type="primary" className="pink">ON</Button>
					<Button type="primary" className="gray">OFF</Button>
					<Button type="primary" className="gray">광고 상품 삭제</Button>
					<CSVLink data={items} headers={csvHeaders}>
						<Button type="primary" className="pink">광고 상 다운로드</Button>
					</CSVLink>
				</>
			</SectionHeader>
			<SectionBody>
				{contextHolder}
				<Table dataSource={items} rowSelection={rowSelection} bordered pagination={{showTotal: ((total) => <p>총 {total}건</p>)}}>
					<Column title="번호" dataIndex="itemId" align="center"/>
					<Column title="상품번호" dataIndex="itemNo" align="center" render={(value, record: AdMngItem) => <Link to={"/adMng/item/" + record.itemId}>{value}</Link>}/>
					<Column title="상품명" dataIndex="itemName" align="center"/>
					<Column title="광고 상품 ON/OFF" dataIndex="adUseConfigYn" align="center" render={(value, record: AdMngAdGroupListAdGroup) => <Button>{value}</Button>}/>
				</Table>
			</SectionBody>
		</section>
	);
}

export default ItemList;