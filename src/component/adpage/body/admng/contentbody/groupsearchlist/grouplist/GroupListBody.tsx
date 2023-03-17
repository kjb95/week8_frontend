import {Table} from "antd";
import Column from "antd/es/table/Column";
import React, {useContext, useState} from 'react';
import {AdGroupContext} from "../../../../../../../contexts/admng/AdGroupContextProvider";
import SectionBody from "../../../../../../section/SectionBody";

function GroupListBody() {
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
	const adGroupContext = useContext(AdGroupContext);

	const rowSelection = {selectedRowKeys, onChange: onSelectChange};

	function onSelectChange(newSelectedRowKeys: React.Key[]) {
		setSelectedRowKeys(newSelectedRowKeys);
	};

	return (
		<SectionBody>
			<Table dataSource={adGroupContext.adGroups} rowSelection={rowSelection} bordered pagination={{showSizeChanger: true, showTotal: ((total) => <p>총 {total}건</p>)}}>
				<Column title="번호" dataIndex="key" align="center"/>
				<Column title="그룹명" dataIndex="agroupName" align="center"/>
				<Column title="그룹 ON/OFF" dataIndex="agroupUseConfigYn" align="center"/>
				<Column title="상품 수(LIVE/전체)" dataIndex="itemCountLiveAndAll" align="center"/>
			</Table>
		</SectionBody>
	);
}

export default GroupListBody;