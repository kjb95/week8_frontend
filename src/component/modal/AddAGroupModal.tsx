import {Button, Input, message, Modal} from "antd";
import React, {useContext, useState} from 'react';
import {AdRegisterContext} from "../../contexts/AdRegisterContext";
import {AGroupSelectContext} from "../../contexts/AGroupSelectContext";
import SectionBody from "../section/SectionBody";
import Dd from "../table/Dd";
import DtModal from "../table/DtModal";

function AddAGroupModal() {
	const aGroupSelectContext = useContext(AGroupSelectContext);
	const adRegisterContext = useContext(AdRegisterContext);
	const [aGroupName, setAGroupName] = useState<string>("");
	const [messageApi, contextHolder] = message.useMessage();

	function closeModal() {
		aGroupSelectContext.setIsModalOpen(false);
		setAGroupName("");
	}

	function isExistAGroup() {
		return aGroupSelectContext.aGroups.filter(aGroup => aGroup.agroupName === aGroupName).length !== 0;
	}

	function handleRegister() {
		if (isExistAGroup()) {
			return messageApi.error("동일한 광고그룹명이 존재합니다 !!");
		}
		adRegisterContext.setAGroupId(aGroupName);
		aGroupSelectContext.setAGroups([...aGroupSelectContext.aGroups, {agroupId: aGroupName, agroupName: aGroupName}]);
		closeModal();
	}

	return (
		<Modal title="신규 광고 그룹 생성" width={800} open={aGroupSelectContext.isModalOpen} onCancel={closeModal}
		       footer={[
			       <Button key="cancel" type="primary" size="large" className="gray" onClick={closeModal}>취소</Button>,
			       <Button key="register" type="primary" size="large" className="pink" onClick={() => handleRegister()}>등록</Button>
		       ]}
		>
			{contextHolder}
			<section className="wrap-section wrap-tbl">
				<SectionBody>
					<dl>
						<DtModal title="신규 광고그룹 명"/>
						<Dd>
							<Input style={{width: 300}} type="text" value={aGroupName} onChange={(e) => setAGroupName(e.target.value)}/>
						</Dd>
					</dl>
				</SectionBody>
			</section>
		</Modal>
	);
}

export default AddAGroupModal;