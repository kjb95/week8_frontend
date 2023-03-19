import {Button, message, Table} from "antd";
import Column from "antd/es/table/Column";
import React, {Key, useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import {findAdGroups, updateAdGroupUseConfig} from "../../../../../../../api/Api";
import {AdGroup, AdGroupContext, AdGroupSearch} from "../../../../../../../contexts/admnggroups/AdGroupContextProvider";
import SectionBody from "../../../../../../section/SectionBody";

export function updateGroupSearch(adGroupContext: AdGroupSearch) {
	findAdGroups(adGroupContext.adGroupNameSearchKeyword)
		.then(res => adGroupContext.setAdGroups(res.data.agroups))
		.catch(e => console.log(e))
}

function GroupListBody() {
	const adGroupContext: AdGroupSearch = useContext(AdGroupContext);
	const [messageApi, contextHolder] = message.useMessage();
	const rowSelection = {onChange: (keys: React.Key[]) => adGroupContext.setSelectedRowKeys(keys), selectedRowKeys: adGroupContext.selectedRowKeys};

	useEffect(() => {
		updateGroupSearch(adGroupContext);
	}, []);

	function updateAdGroupUseConfigSuccess() {
		updateGroupSearch(adGroupContext)
		return messageApi.success("광고그룹 사용 설정 여부가 변경되었습니다");
	}

	function handleAgroupUseConfigYnClick(record: AdGroup) {
		const adGroupIds: Key[] = [record.key];
		const isOn = record.agroupUseConfigYn === 'ON';
		updateAdGroupUseConfig(adGroupIds, !isOn)
			.then(() => updateAdGroupUseConfigSuccess())
			.catch(e => console.log(e));
	}

	return (
		<SectionBody>
			{contextHolder}
			<Table dataSource={adGroupContext.adGroups} bordered rowSelection={rowSelection}
			       pagination={{showTotal: ((total) => <p>총 {total}건</p>)}}>
				<Column title="번호" dataIndex="key" align="center"/>
				<Column title="그룹명" dataIndex="agroupName" align="center" render={(value, record: AdGroup) => <Link to={"/adMng/items/" + record.key}>{value}</Link>}/>
				<Column title="그룹 ON/OFF" dataIndex="agroupUseConfigYn" align="center" render={(value, record: AdGroup) =>
					<Button onClick={() => handleAgroupUseConfigYnClick(record)}>{value}</Button>}/>
				<Column title="상품 수(LIVE/전체)" dataIndex="itemCountLiveAndAll" align="center"/>
			</Table>
		</SectionBody>
	);
}

export default GroupListBody;