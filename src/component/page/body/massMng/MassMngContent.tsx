import React from 'react';
import AdPageBody from "../../AdPageBody";
import JobReq from "./contentBody/JobReq";
import JobReqHistory from "./contentBody/JobReqHistory";

function DataDownloadContent() {
	return (
		<AdPageBody title="작업 관리">
			<JobReq/>
			{/*<JobReqHistory/>*/}
		</AdPageBody>
	);
}

export default DataDownloadContent;