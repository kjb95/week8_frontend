import {Button, Input, message, Modal} from "antd";
import React, {useContext, useState} from 'react';
import {MAX_BID, MIN_BID} from "../../constants/Constant";
import {AdKeywordContext} from "../../contexts/adreg/AdKeywordContextProvider";
import {AdRegisterContext, Keyword} from "../../contexts/adreg/AdRegisterContextProvider";
import {isInvalidRageNumber} from "../../utils/Utils";
import SectionBody from "../section/SectionBody";
import Dd from "../table/Dd";
import DtModal from "../table/DtModal";

function SetKeywordBidModal() {
	const adKeywordContext = useContext(AdKeywordContext);
	const adRegisterContext = useContext(AdRegisterContext);
	const [bid, setBid] = useState<string>("0");
	const [messageApi, contextHolder] = message.useMessage();

	function closeModal() {
		adKeywordContext.setIsSetBidModalOpen(false);
		setBid("");
	}

	function handleRegister(bid: string) {
		if (isInvalidRageNumber(Number(bid), MIN_BID, MAX_BID)) {
			return messageApi.error("입찰가는 90원이상, 99000원 이하");
		}
		const keywordList = adRegisterContext.keywordList.map(changeBid);
		adRegisterContext.setKeywordList(keywordList);
		closeModal();
	}

	function changeBid(keyword: Keyword) {
		keyword.bid = bid;
		return keyword;
	}

	return (
		<Modal title="키워드 입찰가 일괄 설정" width={800} open={adKeywordContext.isSetBidModalOpen} onCancel={closeModal}
		       footer={[
			       <Button key="cancel" type="primary" size="large" className="gray" onClick={closeModal}>취소</Button>,
			       <Button key="reegister" type="primary" size="large" className="pink" onClick={() => handleRegister(bid)}>등록</Button>
		       ]}
		>
			{contextHolder}
			<section className="wrap-section wrap-tbl">
				<SectionBody>
					<dl>
						<DtModal title="입찰가 입력"/>
						<Dd>
							<Input style={{width: 300}} type="number" value={bid} onChange={(e) => setBid(e.target.value)}/>
						</Dd>
					</dl>
				</SectionBody>
			</section>
		</Modal>
	);
}

export default SetKeywordBidModal;