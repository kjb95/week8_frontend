import {Button, Input, Modal} from "antd";
import React, {useContext, useState} from 'react';
import {AdRegisterContext, Keyword, KeywordDefaultValue} from "../adpage/content/adreg/AdRegContent";
import {AdKeywordContext} from "../adpage/content/adreg/contentbody/adkeywordlist/AdKeywordList";

function AddKeywordModal() {
	const adKeywordContext = useContext(AdKeywordContext);
	const adRegisterContext = useContext(AdRegisterContext);
	const [keyword, setKeyword] = useState<Keyword>(KeywordDefaultValue);

	function handleCancel() {
		adKeywordContext.setIsAddKeywordModalOpen(false);
		setKeyword(KeywordDefaultValue);
	}

	function handleRegister(keyword: Keyword) {
		adRegisterContext.setKeywordList([...adRegisterContext.keywordList, keyword]);
		adKeywordContext.setIsAddKeywordModalOpen(false);
		setKeyword(KeywordDefaultValue);
	}

	return (
		<Modal title="키워드 추가" width={800} open={adKeywordContext.isAddKeywordModalOpen} onCancel={handleCancel}
		       footer={[
			       <Button type="primary" size="large" className="gray" onClick={handleCancel}>취소</Button>,
			       <Button type="primary" size="large" className="pink" onClick={() => handleRegister(keyword)}>등록</Button>
		       ]}
		>
			<section className="wrap-section wrap-tbl">
				<div className="box-body">
					<div className="tbl">
						<dl>
							<dt>
								<div className="dt-inner">
										<span className="fz-16 fw-med fc-7">
											키워드명 입력
											<i className="txt-essential"/>
										</span>
								</div>
							</dt>
							<dd>
								<div className="form-group">
									<Input style={{width: 300}} type="text" value={keyword.keywordName}
									       onChange={(e) => setKeyword({key: e.target.value, keywordName: e.target.value, bid: keyword.bid})}
									/>
								</div>
							</dd>
						</dl>
						<dl>
							<dt>
								<div className="dt-inner">
										<span className="fz-16 fw-med fc-7">
											입찰가 입력
											<i className="txt-essential"/>
										</span>
								</div>
							</dt>
							<dd>
								<div className="form-group">
									<Input style={{width: 300}} type="number" value={keyword.bid}
									       onChange={(e) => setKeyword({key: e.target.value, keywordName: keyword.keywordName, bid: e.target.value})}
									/>
								</div>
							</dd>
						</dl>
					</div>
				</div>
			</section>
		</Modal>
	);
}

export default AddKeywordModal;