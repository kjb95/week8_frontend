import {Button, Input, message, Modal} from "antd";
import React, {useContext, useState} from 'react';
import {AGroupSelectContext} from "../adpage/content/adreg/contentbody/agroupselect/AGroupSelect";

function AddAGroupModal() {
	const context = useContext(AGroupSelectContext);
	const [aGroupName, setAGroupName] = useState<string>("");
	const [messageApi, contextHolder] = message.useMessage();

	function closeModal() {
		context.setIsModalOpen(false);
		setAGroupName("");
	}

	function isExistAGroup() {
		return context.aGroups.filter(aGroup => aGroup.agroupName === aGroupName).length != 0;
	}

	function handleRegister() {
		if (isExistAGroup()) {
			return messageApi.error("동일한 광고그룹명이 존재합니다 !!");
		}
		context.setAGroups([...context.aGroups, {agroupId: aGroupName, agroupName: aGroupName}]);
		closeModal();
	}

	return (
		<Modal title="신규 광고 그룹 생성" width={800} open={context.isModalOpen} onCancel={closeModal}
		       footer={[
			       <Button type="primary" size="large" className="gray" onClick={closeModal}>취소</Button>,
			       <Button type="primary" size="large" className="pink" onClick={() => handleRegister()}>등록</Button>
		       ]}
		>
			{contextHolder}
			<section className="wrap-section wrap-tbl">
				<div className="box-body">
					<div className="tbl">
						<dl>
							<dt>
								<div className="dt-inner">
									<span className="fz-16 fw-med fc-7">신규 광고그룹 명<i className="txt-essential"/></span>
								</div>
							</dt>
							<dd>
								<div className="form-group">
									<Input style={{width: 300}} type="text" value={aGroupName}
									       onChange={(e) => setAGroupName(e.target.value)}/>
								</div>
							</dd>
						</dl>
					</div>
				</div>
			</section>
		</Modal>
	);
}

export default AddAGroupModal;