import React, {useState} from 'react';
import {DadDetReport} from "../../../../constants/Interface";
import AdPageBody from "../../AdPageBody";
import AdChartReport from "./contentBody/AdChartReport";
import AdStatusList from "./contentBody/AdStatusList";

function AdStatusContent() {
	const [selectedItemName, setSelectedItemName] = useState<string>("");
	const [dadDetReports, setDadDetReports] = useState<DadDetReport[]>([]);

	return (
		<AdPageBody title="광고 현황">
			<AdStatusList setSelectedItemName={setSelectedItemName} setDadDetReports={setDadDetReports}/>
			{selectedItemName !== "" && <AdChartReport selectedItemName={selectedItemName} dadDetReports={dadDetReports}/>}
		</AdPageBody>
	);
}

export default AdStatusContent;