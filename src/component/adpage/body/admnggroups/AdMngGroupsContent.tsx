import React from 'react';
import AdGroupContextProvider from "../../../../contexts/admng/AdGroupContextProvider";
import AdPageBody from "../../AdPageBody";
import AdvAccountSet from "./contentbody/advaccountset/AdvAccountSet";
import GroupList from "./contentbody/groupsearchlist/grouplist/GroupList";
import GroupSearch from "./contentbody/groupsearchlist/groupsearch/GroupSearch";

function AdMngGroupsContent() {
	return (
		<AdPageBody>
			<AdvAccountSet/>
			<AdGroupContextProvider>
				<GroupSearch/>
				<GroupList/>
			</AdGroupContextProvider>
		</AdPageBody>
	);
}

export default AdMngGroupsContent;