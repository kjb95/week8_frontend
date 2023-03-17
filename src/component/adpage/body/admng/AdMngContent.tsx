import {Content} from "antd/es/layout/layout";
import React from 'react';
import AdGroupContextProvider from "../../../../contexts/admng/AdGroupContextProvider";
import AdvAccountSet from "./contentbody/advaccountset/AdvAccountSet";
import GroupSearchList from "./contentbody/groupsearchlist/GroupSearchList";

function AdMngContent() {
	return (
		<Content>
			<div className="site-layout-content">
				<div className="inner-content">
					<div className="content-header"><h1 className="fz-32 fc-gray-900">광고 관리</h1></div>
					<div className="content-body">
						<AdvAccountSet/>
						<AdGroupContextProvider>
							<GroupSearchList/>
						</AdGroupContextProvider>
					</div>
				</div>
			</div>
		</Content>
	);
}

export default AdMngContent;