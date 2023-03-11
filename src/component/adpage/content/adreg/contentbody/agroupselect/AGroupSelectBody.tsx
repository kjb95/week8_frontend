import React, {useContext} from 'react';
import {Select} from "antd";
import {AGroupSelectContext} from "./AGroupSelect";

function AGroupSelectBody() {
	const context = useContext(AGroupSelectContext);
	const aGroups = context.aGroups.map((aGroup) => ({value: aGroup.agroupId, label: aGroup.agroupName}))

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
							/>
						</div>
					</dd>
				</dl>
			</div>
		</div>
	);
}

export default AGroupSelectBody;