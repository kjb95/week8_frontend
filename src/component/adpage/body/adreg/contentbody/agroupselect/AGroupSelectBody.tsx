import {Select} from "antd";
import React, {useContext} from 'react';
import {AdRegisterContext} from "../../../../../../contexts/adreg/AdRegisterContextProvider";
import {AGroupSelectContext} from "../../../../../../contexts/adreg/AGroupSelectContextProvider";
import Dd from "../../../../../table/Dd";
import Dt from "../../../../../table/Dt";
import SectionBody from "../../../../../section/SectionBody";

function AGroupSelectBody() {
	const aGroupSelectContext = useContext(AGroupSelectContext);
	const adRegisterContext = useContext(AdRegisterContext);
	const aGroups = aGroupSelectContext.aGroups.map((aGroup) => ({value: aGroup.agroupId, label: aGroup.agroupName}))
	const agroupId = adRegisterContext.agroupId === "" ? null : adRegisterContext.agroupId;

	return (
		<SectionBody>
			<dl>
				<Dt title="광고 그룹"/>
				<Dd>
					<Select style={{width: 250}} options={aGroups} value={agroupId} placeholder="광고그룹을 선택해주세요"
					        onChange={(value) => adRegisterContext.setAGroupId(value)}
					/>
				</Dd>
			</dl>
		</SectionBody>
	);
}

export default AGroupSelectBody;