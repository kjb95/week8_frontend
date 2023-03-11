import React, {useContext, useState} from 'react';
import {Button, Input, Modal} from "antd";
import {AGroupSelectContext} from "../adpage/content/adreg/contentbody/agroupselect/AGroupSelect";

function AddAGroupModal() {
	const context = useContext(AGroupSelectContext);
	const [aGroupName, setAGroupName] = useState<string>("");

	function handleCancel() {
		context.setIsModalOpen(false);
		setAGroupName("");
	}

	function handleRegister(aGroupName: string) {
		context.setAGroupNames([...context.aGroupNames, aGroupName]);
		context.setIsModalOpen(false);
		setAGroupName("");
	}

	return (
		<Modal title="신규 광고 그룹 생성" width={800} open={context.isModalOpen} onCancel={handleCancel}
		       footer={[
			       <Button type="primary" size="large" className="gray" onClick={handleCancel}>취소</Button>,
			       <Button type="primary" size="large" className="pink" onClick={() => handleRegister(aGroupName)}>등록</Button>
		       ]}
		>
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