import {Input} from "antd";
import {Button} from "antd/lib";
import React, {useContext} from 'react';
import {AdGroupContext} from "../../../../../../../contexts/admnggroups/AdGroupContextProvider";
import SectionBody from "../../../../../../section/SectionBody";
import Dd from "../../../../../../table/Dd";
import Dt from "../../../../../../table/Dt";
import {updateGroupSearch} from "../grouplist/GroupListBody";

function GroupSearchBody() {
	const adGroupContext = useContext(AdGroupContext);

	return (
		<SectionBody>
			<dl>
				<Dt title="광고 설정"/>
				<Dd><Input style={{width: 300}} type="text" placeholder="그룹명을 입력해주세요" value={adGroupContext.adGroupNameSearchKeyword} onChange={(e) => adGroupContext.setAdGroupNameSearchKeyword(e.target.value)}/></Dd>
				<div className="box-right"><Dd><Button type="primary" className="gray" onClick={() => updateGroupSearch(adGroupContext)}>그룹 조회</Button></Dd></div>
			</dl>
		</SectionBody>
	);
}

export default GroupSearchBody;