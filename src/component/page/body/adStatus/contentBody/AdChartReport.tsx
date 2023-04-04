import {Line, LineConfig} from "@ant-design/plots";
import {Select} from "antd";
import React, {useEffect, useState} from 'react';
import {findAllDadDetReportCategory} from "../../../../../api/dadDetReport/DadDetReportApi";
import {DadDetReport, SelectOption} from "../../../../../constants/Interface";
import SectionBody from "../../../../section/SectionBody";
import SectionHeader from "../../../../section/SectionHeader";

interface Props {
	selectedItemName: string,
	dadDetReports: DadDetReport[]
}

function AdChartReport({selectedItemName, dadDetReports}: Props) {
	const [leftSelect, setLeftSelect] = useState<string>("노출 수");
	const [rightSelect, setRightSelect] = useState<string>("클릭 수");
	const [dadDetReportCategory, setDadDetReportCategory] = useState<SelectOption[]>([]);
	const [selectedDadDetReport, setSelectedDadDetReport] = useState<DadDetReport[]>([]);

	const lineConfig: LineConfig = {
		data: selectedDadDetReport,
		xField: 'date',
		yField: 'value',
		seriesField: 'category',
		legend: {
			position: 'bottom',
			offsetY: 20,
		},
		interactions: [{type: 'legend-filter', enable: false}]
	}

	useEffect(() => {
		findAllDadDetReportCategory()
			.then((res) => setDadDetReportCategory(res.data.categories))
			.catch((e) => console.log(e))
	}, []);

	useEffect(() => {
		const filteredDadDetReports = dadDetReports.filter(dadReport => dadReport.category === leftSelect || dadReport.category === rightSelect);
		setSelectedDadDetReport(filteredDadDetReports);
	}, [leftSelect, rightSelect, dadDetReports]);

	return (
		<section className="wrap-section wrap-datagrid">
			<SectionHeader>
				<h2 className="fz-24 fc-gray-700">{selectedItemName} 리포트</h2>
				<>
					<Select options={dadDetReportCategory} value={leftSelect} onChange={(value) => setLeftSelect(value)}/>
					<Select style={{marginLeft: 20}} options={dadDetReportCategory} value={rightSelect} onChange={(value) => setRightSelect(value)}/>
				</>
			</SectionHeader>
			<SectionBody>
				<Line {...lineConfig}/>
			</SectionBody>
		</section>
	);
}

export default AdChartReport;