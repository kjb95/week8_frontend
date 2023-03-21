import React, {useEffect, useState} from 'react';
import {updateGroupSearch} from "../../../../constants/Function";
import {AdMngAdGroupListAdGroup} from "../../../../constants/Interface";
import AdPageBody from "../../AdPageBody";
import AdvAccountSet from "./contentbody/AdvAccountSet";
import GroupList from "./contentbody/GroupList";
import GroupSearch from "./contentbody/GroupSearch";

function AdMngGroupsContent() {
	const [adGroups, setAdGroups] = useState<AdMngAdGroupListAdGroup[]>([]);
	const [adGroupNameSearchKeyword, setAdGroupNameSearchKeyword] = useState<string>("");

	useEffect(() => {
		updateGroupSearch("", setAdGroups);
	}, [setAdGroups]);

	return (
		<AdPageBody>
			<AdvAccountSet/>
			<GroupSearch adGroupNameSearchKeyword={adGroupNameSearchKeyword} setAdGroupNameSearchKeyword={setAdGroupNameSearchKeyword} setAdGroups={setAdGroups}/>
			<GroupList adGroupNameSearchKeyword={adGroupNameSearchKeyword} adGroups={adGroups} setAdGroups={setAdGroups}/>
		</AdPageBody>
	);
}

export default AdMngGroupsContent;