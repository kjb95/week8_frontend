import {Select} from "antd";
import React, {useContext} from 'react';
import {AdRegisterContext} from "../../AdRegContent";
import {AGroupSelectContext} from "./AGroupSelect";

function AGroupSelectBody() {
	const aGroupSelectContext = useContext(AGroupSelectContext);
	const adRegisterContext = useContext(AdRegisterContext);
	const aGroups = aGroupSelectContext.aGroups.map((aGroup) => ({value: aGroup.agroupId, label: aGroup.agroupName}))

	return (
		<div className="box-body">
			<div className="tbl">
				<dl>
					<dt>
						<div className="dt-inner">
							<span className="fz-15 fc-gray-500">광고 그룹</span>
						</div>
					</dt>
					<dd>
						<div className="form-group">
							<Select
								style={{width: 250}}
								options={aGroups}
								placeholder="광고그룹을 선택해주세요"
								onChange={(value) => adRegisterContext.setAGroupId(value)}
							/>
						</div>
					</dd>
				</dl>
			</div>
		</div>
	);
}

export default AGroupSelectBody;