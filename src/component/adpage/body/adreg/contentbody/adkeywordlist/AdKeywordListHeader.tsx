import {Button} from "antd";
import React, {useContext} from 'react';
import {AdKeywordContext} from "../../../../../../contexts/AdKeywordContext";
import SectionHeader from "../../../../../section/SectionHeader";

function AdKeywordListHeader() {
	const context = useContext(AdKeywordContext);

	return (
		<SectionHeader>
			<h2 className="fz-24 fc-gray-700">광고 키워드 리스트</h2>
			<>
				<Button type="default" className="pink" onClick={() => context.setIsAddKeywordModalOpen(true)}>키워드 추가</Button>
				<Button type="default" className="gray" onClick={() => context.setIsSetBidModalOpen(true)}>입찰가 일괄 설정</Button>
			</>
		</SectionHeader>
	);
}

export default AdKeywordListHeader;