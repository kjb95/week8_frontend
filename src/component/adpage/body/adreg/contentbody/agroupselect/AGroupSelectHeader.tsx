import {Button} from "antd";
import React, {useContext} from 'react';
import {AGroupSelectContext} from "../../../../../../contexts/adreg/AGroupSelectContextProvider";
import SectionHeader from "../../../../../section/SectionHeader";

function AGroupSelectHeader() {
	const context = useContext(AGroupSelectContext);

	return (
		<SectionHeader>
			<h2 className="fz-24 fc-gray-700">광고 그룹 선택</h2>
			<Button type="primary" size="large" className="gray" onClick={() => context.setIsModalOpen(true)}>신규 그룹 생성</Button>
		</SectionHeader>
	);
}

export default AGroupSelectHeader;