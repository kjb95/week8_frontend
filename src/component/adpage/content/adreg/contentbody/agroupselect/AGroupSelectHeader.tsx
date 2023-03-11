import React, {useContext} from 'react';
import {Button} from "antd";
import {AGroupSelectContext} from "./AGroupSelect";

function AGroupSelectHeader() {
	const context = useContext(AGroupSelectContext);

	return (
		<div className="box-header">
			<div className="box-left">
				<h2 className="fz-24 fc-gray-700">광고 그룹 선택</h2>
			</div>
			<div className="box-right">
				<Button type="primary" size="large" className="gray" onClick={() => context.setIsModalOpen(true)}>
					<span>신규 그룹 생성</span>
				</Button>
			</div>
		</div>
	);
}

export default AGroupSelectHeader;