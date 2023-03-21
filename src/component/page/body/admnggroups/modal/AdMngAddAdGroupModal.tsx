import {Button, Input, message, Modal} from "antd";
import React, {useState} from 'react';
import {registerAdGroup} from "../../../../../api/agroup/AgroupApi";
import {updateGroupSearch} from "../../../../../constants/Function";
import {AdMngAdGroupListAdGroup} from "../../../../../constants/Interface";
import {hasBlank} from "../../../../../utils/Utils";
import SectionBody from "../../../../section/SectionBody";
import Dd from "../../../../table/Dd";
import DtModal from "../../../../table/DtModal";

interface Props {
	isAddGroupModalOpen: boolean,
	setIsAddGroupModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
	adGroupNameSearchKeyword: string,
	setAdGroups: React.Dispatch<React.SetStateAction<AdMngAdGroupListAdGroup[]>>,
}

function AdMngAddAdGroupModal({isAddGroupModalOpen, setIsAddGroupModalOpen, adGroupNameSearchKeyword, setAdGroups}: Props) {
	const [messageApi, contextHolder] = message.useMessage();
	const [aGroupName, setAGroupName] = useState<string>("");

	function closeModal() {
		setIsAddGroupModalOpen(false);
		setAGroupName("");
	}

	function registerAdGroupSuccess() {
		updateGroupSearch(adGroupNameSearchKeyword, setAdGroups);
		closeModal();
		return messageApi.success("광고 그룹 등록 성공");
	}

	function handleRegister() {
		if (hasBlank(aGroupName)) {
			return messageApi.error("공백은 입력할 수 없습니다");
		}
		registerAdGroup(aGroupName)
			.then(() => registerAdGroupSuccess())
			.catch((e) => messageApi.error(e.response.data.message));
	}

	return (
		<Modal title="광고그룹 등록" width={800} open={isAddGroupModalOpen} onCancel={closeModal}
		       footer={[
			       <Button key="cancel" type="primary" size="large" className="gray" onClick={closeModal}>취소</Button>,
			       <Button key="register" type="primary" size="large" className="pink" onClick={() => handleRegister()}>등록</Button>
		       ]}
		>
			{contextHolder}
			<section className="wrap-section wrap-tbl">
				<SectionBody>
					<dl>
						<DtModal title="광고그룹 명"/>
						<Dd><Input style={{width: 300}} type="text" value={aGroupName} placeholder="등록할 광고그룹 명을 입력하세요" onChange={(e) => setAGroupName(e.target.value)} onPressEnter={() => handleRegister()}/></Dd>
					</dl>
				</SectionBody>
			</section>
		</Modal>
	);
}

export default AdMngAddAdGroupModal;