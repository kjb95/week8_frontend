import {Content} from "antd/es/layout/layout";
import React from 'react';
import {ChildProps} from "../../constants/Interface";

function AdPageBody({children}: ChildProps) {
	return (
		<Content>
			<div className="site-layout-content">
				<div className="inner-content">
					<div className="content-header"><h1 className="fz-32 fc-gray-900">광고 관리</h1></div>
					<div className="content-body">
						{children}
					</div>
				</div>
			</div>
		</Content>
	);
}

export default AdPageBody;