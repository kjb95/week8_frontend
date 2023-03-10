import React, {useContext} from 'react';
import {Button} from "antd";
import {AdKeywordContext} from "./AdKeywordList";

function AdKeywordListHeader() {
	const context = useContext(AdKeywordContext);

	function showModal() {
		context.setIsModalOpen(true);
	}

	return (
		<div className="box-header">
			<div className="box-left">
				<h2 className="fz-24 fc-gray-700">광고 키워드 리스트</h2>
			</div>
			<div className="box-right">
				<Button type="default" className="pink" onClick={showModal}>
					<span>키워드 추가</span>
				</Button>
				<Button type="default" className="gray">
					<span>입찰가 일괄 설정</span>
				</Button>
			</div>
		</div>
	);
}

export default AdKeywordListHeader;