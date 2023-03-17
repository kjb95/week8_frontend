import {Button, Table} from "antd";
import Column from 'antd/es/table/Column';
import React, {useContext} from 'react';
import {AdRegisterContext, Keyword} from "../../../../../../contexts/adreg/AdRegisterContextProvider";
import SectionBody from "../../../../../section/SectionBody";

function AdKeywordListBody() {
	const context = useContext(AdRegisterContext);

	function handleItemDelete(record: Keyword) {
		const keywordList = context.keywordList.filter(item => item.key !== record.key);
		context.setKeywordList(keywordList);
	}

	return (
		<SectionBody>
			<Table dataSource={context.keywordList} bordered pagination={{showSizeChanger: true, showTotal: ((total) => <p>Total {total} items</p>)}}>
				<Column title="키워드명" dataIndex="keywordName" align="center"/>
				<Column title="입찰가" dataIndex="bid" align="center"/>
				<Column title="키워드 삭제" dataIndex="keywordDelete" align="center"
				        render={(_, record: Keyword) => (<Button type="default" size="small" className="pink" onClick={() => handleItemDelete(record)}>삭제</Button>)}
				/>
			</Table>
		</SectionBody>
	);
}

export default AdKeywordListBody;