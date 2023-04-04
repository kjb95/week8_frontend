import {Table} from "antd";
import Column from "antd/es/table/Column";
import React, {useEffect, useState} from 'react';
import {findAdStatus} from "../../../../../api/dadDet/DadDetApi";
import {findDadDetReport} from "../../../../../api/dadDetReport/DadDetReportApi";
import {DadDetReport} from "../../../../../constants/Interface";
import SectionBody from "../../../../section/SectionBody";
import SectionHeader from "../../../../section/SectionHeader";

interface AdStatus {
	key: number,
	itemNo: string,
	kwdName: string,
	adultYn: string
}

interface Props {
	setSelectedItemName: React.Dispatch<React.SetStateAction<string>>
	setDadDetReports: React.Dispatch<React.SetStateAction<DadDetReport[]>>
}

function AdStatusList({setSelectedItemName, setDadDetReports}: Props) {
	const [adStatus, setAdStatus] = useState<AdStatus[]>([]);

	useEffect(() => {
		findAdStatus()
			.then(res => setAdStatus(res.data.adStatus))
			.catch(e => console.log(e));
	}, []);

	function handleItemNoOnClick(record: AdStatus) {
		setSelectedItemName(record.itemNo);
		findDadDetReport(record.key)
			.then(res => setDadDetReports(res.data.dadDetReport))
			.catch(e => console.log(e));
	}

	return (
		<section className="wrap-section wrap-datagrid">
			<SectionHeader>
				<h2 className="fz-24 fc-gray-700">광고 현황 리스트</h2>
			</SectionHeader>
			<SectionBody>
				<Table dataSource={adStatus} bordered pagination={{showTotal: ((total) => <p>총 {total}건</p>)}}>
					<Column title="직접광고 상세 ID" dataIndex="key" align="center"/>
					<Column title="상품 명" dataIndex="itemNo" align="center" render={((value, record: AdStatus) => <a onClick={() => handleItemNoOnClick(record)}>{value}</a>)}/>
					<Column title="키워드 명" dataIndex="kwdName" align="center"/>
					<Column title="성인 여부" dataIndex="adultYn" align="center"/>
				</Table>
			</SectionBody>
		</section>
	);
}

export default AdStatusList;