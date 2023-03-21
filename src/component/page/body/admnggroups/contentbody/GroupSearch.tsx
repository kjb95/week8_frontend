import {Input} from "antd";
import {Button} from "antd/lib";
import React from 'react';
import {updateGroupSearch} from "../../../../../constants/Function";
import {AdMngAdGroupListAdGroup} from "../../../../../constants/Interface";
import SectionBody from "../../../../section/SectionBody";
import SectionHeader from "../../../../section/SectionHeader";
import Dd from "../../../../table/Dd";
import Dt from "../../../../table/Dt";

interface Props {
	adGroupNameSearchKeyword: string
	setAdGroupNameSearchKeyword: React.Dispatch<React.SetStateAction<string>>,
	setAdGroups: React.Dispatch<React.SetStateAction<AdMngAdGroupListAdGroup[]>>,
}

function GroupSearch({adGroupNameSearchKeyword, setAdGroupNameSearchKeyword, setAdGroups}: Props) {
	return (
		<section className="wrap-section wrap-tbl">
			<SectionHeader>
				<h2 className="fz-24 fc-gray-700">그룹 검색</h2>
			</SectionHeader>
			<SectionBody>
				<dl>
					<Dt title="그룹 명 검색"/>
					<Dd><Input style={{width: 300}} type="text" placeholder="그룹명을 입력해주세요" value={adGroupNameSearchKeyword} onChange={(e) => setAdGroupNameSearchKeyword(e.target.value)} onPressEnter={() => updateGroupSearch(adGroupNameSearchKeyword, setAdGroups)}/></Dd>
					<div className="box-right"><Dd><Button type="primary" className="gray" onClick={() => updateGroupSearch(adGroupNameSearchKeyword, setAdGroups)}>그룹 조회</Button></Dd></div>
				</dl>
			</SectionBody>
		</section>
	);
}

export default GroupSearch;