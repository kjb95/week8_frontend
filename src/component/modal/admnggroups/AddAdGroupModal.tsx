import {Button, Input, message, Modal} from "antd";
import React, {useContext, useState} from 'react';
import {registerAdGroup} from "../../../api/Api";
import {AdGroupContext} from "../../../contexts/admnggroups/AdGroupContextProvider";
import {hasBlank} from "../../../utils/Utils";
import {updateGroupSearch} from "../../adpage/body/admnggroups/contentbody/groupsearchlist/grouplist/GroupListBody";
import SectionBody from "../../section/SectionBody";
import Dd from "../../table/Dd";
import DtModal from "../../table/DtModal";

interface Props {
	isAddGroupModalOpen: boolean,
	setIsAddGroupModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function AddAdGroupModal({isAddGroupModalOpen, setIsAddGroupModalOpen}: Props) {
	const adGroupContext = useContext(AdGroupContext);
	const [messageApi, contextHolder] = message.useMessage();
	const [aGroupName, setAGroupName] = useState<string>("");

	function closeModal() {
		setIsAddGroupModalOpen(false);
		setAGroupName("");
	}

	function registerAdGroupSuccess() {
		updateGroupSearch(adGroupContext);
		closeModal();
		return messageApi.success("광고 등록 성공");
	}

	function handleRegister() {
		if (hasBlank(aGroupName)) {
			return messageApi.error("공백은 입력할 수 없습니다");
		}
		registerAdGroup(aGroupName)
			.then(registerAdGroupSuccess)
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
						<Dd><Input style={{width: 300}} type="text" value={aGroupName} placeholder="등록할 광고그룹 명을 입력하세요" onChange={(e) => setAGroupName(e.target.value)}/></Dd>
					</dl>
				</SectionBody>
			</section>
		</Modal>
	);
}

export default AddAdGroupModal;