import {UploadOutlined} from '@ant-design/icons';
import {Input, Modal, Upload, UploadFile, UploadProps} from "antd";
import {RcFile} from "antd/es/upload";
import {Button} from "antd/lib";
import React, {useState} from 'react';
import {CSVLink} from "react-csv";
import {multipartFormDataApi} from "../../../../../api/Api";
import {createTaskReq, deleteTaskReqFile} from "../../../../../api/taskReq/TaskReqApi";
import {AUTHENTICATED_MEMBER_ID} from "../../../../../constants/Constant";
import {onPressEnter} from "../../../../../constants/Function";
import {hasBlank} from "../../../../../utils/Utils";

import SectionBody from "../../../../section/SectionBody";
import SectionFooter from "../../../../section/SectionFooter";
import SectionHeader from "../../../../section/SectionHeader";
import Dd from "../../../../table/Dd";
import Dt from "../../../../table/Dt";

const csvHeaders = [
	{label: "날짜", key: "date"},
	{label: "직접 광고 ID", key: "dadDetId"},
	{label: "노출수", key: "impressions"},
	{label: "클릭수", key: "clicks"},
	{label: "평균 노출 순위", key: "averageImpressionRank"},
	{label: "평균 클릭 비용", key: "averageClickCost"},
	{label: "광고비", key: "advertisingCost"}
];

interface JobReqInterface {
	date: number,
	dadDetId: number,
	impressions: number,
	clicks: number,
	averageImpressionRank: number,
	averageClickCost: number,
	advertisingCost: number
}

function JobReq() {
	const [fileList, setFileList] = useState<UploadFile[]>([]);
	const [jobName, setJobName] = useState<string>("")

	const handleFileChange: UploadProps['onChange'] = ({fileList}) => {
		setFileList([...fileList]);
	};
	const uploadProps: UploadProps = {fileList, onChange: handleFileChange, onRemove: handleFileRemove};

	function handleFileRemove() {
		setFileList([]);
		if (fileList.length === 0) {
			return;
		}
		deleteTaskReqFile(fileList[0].name)
			.catch(e => console.log(e));
	}

	function validHandleRegister() {
		if (hasBlank(jobName)) {
			return "작업명에 공백은 입력할 수 없습니다";
		}
		if (fileList.length == 0) {
			return "파일 업로드는 필수 입니다";
		}
		return null;
	}

	function createTaskReqSuccess() {
		setJobName("");
		setFileList([]);
	}

	function handleRegister() {
		const errorMessage = validHandleRegister();
		if (errorMessage) {
			return Modal.error({title: errorMessage});
		}
		createTaskReq(sessionStorage.getItem(AUTHENTICATED_MEMBER_ID), jobName, fileList[0].name)
			.then(() => Modal.success({title: "작업 요청 등록 성공", onOk: createTaskReqSuccess}))
			.catch(e => console.log(e));
	}

	function handleCancel() {
		setJobName("");
		handleFileRemove();
	}

	function uploadCustomRequest(file: string | Blob | RcFile, action: string, onSuccess: ((body: any, xhr?: (XMLHttpRequest | undefined)) => void) | undefined) {
		const formData = new FormData();
		formData.append('file', file);
		multipartFormDataApi.post(action, formData)
			.then(() => onSuccess!(true))
			.catch(e => console.log(e));
	}

	return (
		<section className="wrap-section wrap-tbl">
			<SectionHeader>
				<h2 className="fz-24 fc-gray-700">작업 요청</h2>
			</SectionHeader>
			<SectionBody>
				<dl>
					<Dt title="요청 템플릿"/>
					<Dd>
						<CSVLink data={[]} headers={csvHeaders}>
							<Button type="primary" className="pink">템플릿 다운로드</Button>
						</CSVLink>
					</Dd>
				</dl>
				<dl>
					<Dt title="요청 파일 업로드"/>
					<Dd>
						<Upload {...uploadProps} maxCount={1} action="/api/taskReq/file" customRequest={({file, action, onSuccess}) => uploadCustomRequest(file, action, onSuccess)}>
							<Button icon={<UploadOutlined/>}>업로드</Button>
						</Upload>
					</Dd>
				</dl>
				<dl>
					<Dt title="작업명"/>
					<Dd>
						<Input style={{width: 300}} type="text" value={jobName} onChange={(e) => setJobName(e.target.value)} onPressEnter={(e) => onPressEnter(e, handleRegister)}/>
					</Dd>
				</dl>
			</SectionBody>
			<SectionFooter>
				<Button htmlType="button" type="primary" size="large" className="gray" onClick={handleCancel}>취소</Button>
				<Button htmlType="submit" type="primary" size="large" className="pink" onClick={handleRegister}>등록</Button>
			</SectionFooter>
		</section>
	);
}

export default JobReq;