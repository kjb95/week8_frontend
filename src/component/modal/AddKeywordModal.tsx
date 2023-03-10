import React, {useContext, useState} from 'react';
import {Button, Input, Modal} from "antd";
import {AdKeywordContext, Keyword, KeywordDefaultValue} from "../adpage/content/adreg/contentbody/adkeywordlist/AdKeywordList";

function AddKeywordModal() {
	const context = useContext(AdKeywordContext);
	const [keyword, setKeyword] = useState<Keyword>(KeywordDefaultValue);

	function handleCancel() {
		context.setIsModalOpen(false);
		setKeyword(KeywordDefaultValue);
	}

	function handleRegister(keyword: Keyword) {
		context.setKeywordList([...context.keywordList, keyword]);
		context.setIsModalOpen(false);
		setKeyword(KeywordDefaultValue);
	}

	return (
		<Modal title="키워드 추가" width={800} open={context.isModalOpen} onCancel={handleCancel}
		       footer={[
			       <Button type="primary" size="large" className="gray" onClick={handleCancel}>
				       <span>취소</span>
			       </Button>,
			       <Button type="primary" size="large" className="pink" onClick={() => handleRegister(keyword)}>
				       <span>등록</span>
			       </Button>
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
									       onChange={(e) => setKeyword({key: new Date().getTime(), keywordName: e.target.value, bid: keyword.bid})}
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
									       onChange={(e) => setKeyword({key: new Date().getTime(), keywordName: keyword.keywordName, bid: e.target.value})}
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