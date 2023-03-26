import React from 'react';
import AdPageBody from "../../AdPageBody";
import AdStatusList from "./contentBody/AdStatusList";

function AdStatusContent() {
	return (
		<AdPageBody title="광고 현황">
			<AdStatusList/>
		</AdPageBody>
	);
}

export default AdStatusContent;