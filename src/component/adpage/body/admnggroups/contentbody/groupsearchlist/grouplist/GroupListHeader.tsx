import {Button, message} from "antd";
import React, {useContext, useState} from 'react';
import {CSVLink} from "react-csv";
import {updateAdGroupActOff, updateAdGroupUseConfig} from "../../../../../../../api/Api";
import {AdGroupContext} from "../../../../../../../contexts/admnggroups/AdGroupContextProvider";
import AddAdGroupModal from "../../../../../../modal/admnggroups/AddAdGroupModal";
import SectionHeader from "../../../../../../section/SectionHeader";
import {updateGroupSearch} from "./GroupListBody";

const csvHeaders = [
	{label: "번호", key: "key"},
	{label: "그룹명", key: "agroupName"},
	{label: "그룹 ON/OFF", key: "agroupUseConfigYn"},
	{label: "상품 수(LIVE/전체)", key: "itemCountLiveAndAll"}
];

function GroupListHeader() {
	const adGroupContext = useContext(AdGroupContext);
	const [messageApi, contextHolder] = message.useMessage();
	const [isAddGroupModalOpen, setIsAddGroupModalOpen] = useState<boolean>(false);

	function updateAdGroupUseConfigSuccess() {
		if (adGroupContext.selectedRowKeys.length === 0) {
			return messageApi.error("체크한 그룹이 없습니다");
		}
		adGroupContext.setSelectedRowKeys([]);
		updateGroupSearch(adGroupContext);
		return messageApi.success("광고그룹 사용 설정 여부가 변경되었습니다");
	}

	function handleGroupOn() {
		updateAdGroupUseConfig(adGroupContext.selectedRowKeys, true)
			.then(() => updateAdGroupUseConfigSuccess())
			.catch(e => console.log(e));
	}

	function handleGroupOff() {
		updateAdGroupUseConfig(adGroupContext.selectedRowKeys, false)
			.then(() => updateAdGroupUseConfigSuccess())
			.catch(e => console.log(e));
	}

	function handleGroupDelete() {
		if (adGroupContext.selectedRowKeys.length === 0) {
			return messageApi.error("체크한 그룹이 없습니다");
		}
		updateAdGroupActOff(adGroupContext.selectedRowKeys)
			.then(() => {
				adGroupContext.setSelectedRowKeys([]);
				updateGroupSearch(adGroupContext);
				return messageApi.success("광고그룹 삭제가 완료되었습니다");
			})

	}

	return (
		<SectionHeader>
			<h2 className="fz-24 fc-gray-700">그룹 리스트</h2>
			<>
				{contextHolder}
				<AddAdGroupModal isAddGroupModalOpen={isAddGroupModalOpen} setIsAddGroupModalOpen={setIsAddGroupModalOpen}/>
				<Button type="primary" className="pink" onClick={handleGroupOn}>ON</Button>
				<Button type="primary" className="gray" onClick={handleGroupOff}>OFF</Button>
				<Button type="primary" className="pink" onClick={() => setIsAddGroupModalOpen(true)}>그룹 추가</Button>
				<Button type="primary" className="gray" onClick={handleGroupDelete}>그룹 삭제</Button>
				<CSVLink data={adGroupContext.adGroups} headers={csvHeaders}>
					<Button type="primary" className="pink">그룹 다운로드</Button>
				</CSVLink>
			</>
		</SectionHeader>
	);
}

export default GroupListHeader;