import {Input} from "antd";
import {Button} from "antd/lib";
import React, {useContext, useState} from 'react';
import {findGroup} from "../../../../../../../api/Api";
import {AdGroupContext} from "../../../../../../../contexts/admng/AdGroupContextProvider";
import SectionBody from "../../../../../../section/SectionBody";
import Dd from "../../../../../../table/Dd";
import Dt from "../../../../../../table/Dt";

function GroupSearchBody() {
	const adGroupContext = useContext(AdGroupContext);
	const [groupName, setGroupName] = useState<string>("");

	function groupSearch() {
		findGroup(groupName)
			.then(res => adGroupContext.setAdGroups(res.data.agroups))
			.catch(e => console.log(e))
	}

	return (
		<SectionBody>
			<dl>
				<Dt title="광고 설정"/>
				<Dd><Input style={{width: 300}} type="text" placeholder="그룹명을 입력해주세요" value={groupName} onChange={(e) => setGroupName(e.target.value)}/></Dd>
				<div className="box-right"><Dd><Button type="primary" className="gray" onClick={groupSearch}>그룹 조회</Button></Dd></div>
			</dl>
		</SectionBody>
	);
}

export default GroupSearchBody;