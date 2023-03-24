import {Button, Table} from "antd";
import Column from "antd/es/table/Column";
import React from 'react';
import {CSVLink} from "react-csv";
import {CheckKwd} from "../../../../../constants/Interface";
import SectionBody from "../../../../section/SectionBody";
import SectionHeader from "../../../../section/SectionHeader";

const csvHeaders = [
	{label: "키워드 명", key: "kwdName"}
];

interface Props {
	checkKwd: CheckKwd[],
	setCheckKwd: React.Dispatch<React.SetStateAction<CheckKwd[]>>,
}

function CheckKeywordList({checkKwd, setCheckKwd}: Props) {

	return (
		<section className="wrap-section wrap-datagrid">
			<SectionHeader>
				<h2 className="fz-24 fc-gray-700">검수 키워드 리스트</h2>
				<>
					<Button type="primary" className="pink">검수 키워드 등록</Button>
					<CSVLink data={checkKwd} headers={csvHeaders} style={{marginLeft: "8px"}}>
						<Button type="primary" className="pink">키워드 다운로드</Button>
					</CSVLink>
				</>
			</SectionHeader>
			<SectionBody>
				<Table dataSource={checkKwd} bordered pagination={{showTotal: ((total) => <p>총 {total}건</p>)}}>
					<Column title="키워드 명" dataIndex="kwdName" align="center"/>
					<Column title="검수 키워드 삭제" dataIndex="checkKwdDelete" align="center" render={(value, record: CheckKwd) =>
						<Button type="primary" size="small" className="pink">삭제</Button>
					}/>
				</Table>
			</SectionBody>
		</section>
	);
}

export default CheckKeywordList;