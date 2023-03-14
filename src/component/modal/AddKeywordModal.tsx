import {Button, Input, message, Modal} from "antd";
import React, {useContext, useState} from 'react';
import {MAX_BID, MIN_BID} from "../../constants/Constant";
import {AdKeywordContext} from "../../contexts/AdKeywordContext";
import {AdRegisterContext, Keyword, KeywordDefaultValue} from "../../contexts/AdRegisterContext";
import {isInvalidRageNumber} from "../../utils/Utils";
import SectionBody from "../section/SectionBody";
import Dd from "../table/Dd";
import DtModal from "../table/DtModal";


function AddKeywordModal() {
	const adKeywordContext = useContext(AdKeywordContext);
	const adRegisterContext = useContext(AdRegisterContext);
	const [keyword, setKeyword] = useState<Keyword>(KeywordDefaultValue);
	const [messageApi, contextHolder] = message.useMessage();

	function closeModal() {
		adKeywordContext.setIsAddKeywordModalOpen(false);
		setKeyword(KeywordDefaultValue);
	}

	function isDuplicated() {
		return adRegisterContext.keywordList.filter(kwd => kwd.keywordName === keyword.keywordName).length !== 0;
	}

	function handleRegister(keyword: Keyword) {
		if (isDuplicated()) {
			return messageApi.error("동일한 키워드명이 존재합니다 !!");
		}
		if (isInvalidRageNumber(Number(keyword.bid), MIN_BID, MAX_BID)) {
			return messageApi.error("입찰가는 90원이상, 99000원 이하");
		}
		adRegisterContext.setKeywordList([...adRegisterContext.keywordList, keyword]);
		closeModal();
	}

	return (
		<Modal title="키워드 추가" width={800} open={adKeywordContext.isAddKeywordModalOpen} onCancel={closeModal}
		       footer={[
			       <Button type="primary" size="large" className="gray" onClick={closeModal}>취소</Button>,
			       <Button type="primary" size="large" className="pink" onClick={() => handleRegister(keyword)}>등록</Button>
		       ]}
		>
			{contextHolder}
			<section className="wrap-section wrap-tbl">
				<SectionBody>
					<dl>
						<DtModal title="키워드명 입력"/>
						<Dd>
							<Input style={{width: 300}} type="text" value={keyword.keywordName}
							       onChange={(e) => setKeyword({key: e.target.value, keywordName: e.target.value, bid: keyword.bid})}
							/>
						</Dd>
					</dl>
					<dl>
						<DtModal title="입찰가 입력"/>
						<Dd>
							<Input style={{width: 300}} type="number" value={keyword.bid}
							       onChange={(e) => setKeyword({key: e.target.value, keywordName: keyword.keywordName, bid: e.target.value})}
							/>
						</Dd>
					</dl>
				</SectionBody>
			</section>
		</Modal>
	);
}

export default AddKeywordModal;