import React, {useContext, useState} from 'react';
import {Button, Input, Modal} from "antd";
import {AdKeywordContext, Keyword} from "../adpage/content/adreg/contentbody/adkeywordlist/AdKeywordList";

function SetKeywordBidModal() {
	const context = useContext(AdKeywordContext);
	const [bid, setBid] = useState<string>("0");

	function handleCancel() {
		context.setIsSetBidModalOpen(false);
		setBid("");
	}

	function handleRegister(bid: string) {
		const keywordList = context.keywordList.map(changeBid);
		context.setKeywordList(keywordList);
		context.setIsSetBidModalOpen(false);
		setBid("");
	}

	function changeBid(keyword: Keyword) {
		keyword.bid = bid;
		return keyword;
	}

	return (
		<Modal title="키워드 입찰가 일괄 설정" width={800} open={context.isSetBidModalOpen} onCancel={handleCancel}
		       footer={[
			       <Button type="primary" size="large" className="gray" onClick={handleCancel}>취소</Button>,
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
									<Input style={{width: 300}} type="text" value={bid} onChange={(e) => setBid(e.target.value)}/>
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