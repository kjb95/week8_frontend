import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router";
import {findAdGroup} from "../../../../api/Api";
import {AUTHENTICATED_MEMBER_ID} from "../../../../constants/Constant";
import {AdItemsContext, AdItemsContextInterface} from "../../../../contexts/admngitems/AdItemsContextProvider";
import AdPageBody from "../../AdPageBody";
import AdGroupSet from "./contentbody/adgroupset/AdGroupSet";

export function updateAdMngItems(adItemsContext: AdItemsContextInterface, adGroupId: string | undefined, advId: string | null) {
	findAdGroup(adGroupId, advId)
		.then(res => updateAdMngItem(adItemsContext, res.data))
		.catch(e => console.log(e));
}

function updateAdMngItem(adItemsContext: AdItemsContextInterface, data: AdItemsContextInterface) {
	adItemsContext.setAgroupName(data.agroupName);
	adItemsContext.setAgroupUseConfigYn(data.agroupUseConfigYn);
	adItemsContext.setRegTime(data.regTime);
	adItemsContext.setItems(data.items);
}

function AdMngItemsContent() {
	const adItemsContext = useContext(AdItemsContext);
	const params = useParams();

	useEffect(() => {
		updateAdMngItems(adItemsContext, params.id, sessionStorage.getItem(AUTHENTICATED_MEMBER_ID));
	}, [params.id]);

	return (
		<AdPageBody>
			<AdGroupSet/>
		</AdPageBody>
	);
}

export default AdMngItemsContent;