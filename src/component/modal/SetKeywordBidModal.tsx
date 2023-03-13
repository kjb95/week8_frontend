import {Button, Input, Modal} from "antd";
import React, {useContext, useState} from 'react';
import {MAX_BID, MIN_BID} from "../../utils/Const";
import {isInvalidRageNumber} from "../../utils/Utils";
import {AdRegisterContext, Keyword} from "../adpage/content/adreg/AdRegContent";
import {AdKeywordContext} from "../adpage/content/adreg/contentbody/adkeywordlist/AdKeywordList";

function SetKeywordBidModal() {
	const adKeywordContext = useContext(AdKeywordContext);
	const adRegisterContext = useContext(AdRegisterContext);
	const [bid, setBid] = useState<string>("0");

	function closeModal() {
		adKeywordContext.setIsSetBidModalOpen(false);
		setBid("");
	}

	function handleRegister(bid: string) {
		if (isInvalidRageNumber(Number(bid), MIN_BID, MAX_BID)) {
			return Modal.error({title: "입찰가는 90원이상, 99000원 이하"});
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
			       <Button type="primary" size="large" className="gray" onClick={closeModal}>취소</Button>,
			       <Button type="primary" size="large" className="pink" onClick={() => handleRegister(bid)}>등록</Button>
		       ]}
		>
			<section className="wrap-section wrap-tbl">
				<div className="box-body">
					<div className="tbl">
						<dl>
							<dt>
								<div className="dt-inner"><span className="fz-16 fw-med fc-7">입찰가 입력<i className="txt-essential"></i></span></div>
							</dt>
							<dd>
								<div className="form-group">
									<Input style={{width: 300}} type="number" value={bid} onChange={(e) => setBid(e.target.value)}/>
								</div>
							</dd>
						</dl>
					</div>
				</div>
			</section>
		</Modal>
	);
}

export default SetKeywordBidModal;