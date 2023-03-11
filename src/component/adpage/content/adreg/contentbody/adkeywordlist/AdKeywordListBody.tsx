import React, {useContext} from 'react';
import {Button, Table} from "antd";
import {AdKeywordContext, Keyword} from "./AdKeywordList";
import Column from 'antd/es/table/Column';

function AdKeywordListBody() {
	const context = useContext(AdKeywordContext);

	function handleItemDelete(record: Keyword) {
		const keywordList = context.keywordList.filter(item => item.key !== record.key);
		context.setKeywordList(keywordList);
	}

	return (
		<div className="box-body">
			<Table dataSource={context.keywordList} bordered pagination={{showSizeChanger: true, showTotal: ((total) => <p>Total {total} items</p>)}}>
				<Column title="키워드명" dataIndex="keywordName" align="center"/>
				<Column title="입찰가" dataIndex="bid" align="center"/>
				<Column title="키워드 삭제" dataIndex="keywordDelete" align="center"
				        render={(_, record: Keyword) => (<Button type="default" size="small" className="pink" onClick={() => handleItemDelete(record)}>삭제</Button>)}
				/>
			</Table>
		</div>
	);
}

export default AdKeywordListBody;