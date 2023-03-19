import React, {useContext} from 'react';
import {AdItemsContext} from "../../../../../../contexts/admngitems/AdItemsContextProvider";
import SectionHeader from "../../../../../section/SectionHeader";

function AdGroupSetHeader() {
	const adItemsContext = useContext(AdItemsContext);

	return (
		<SectionHeader>
			<h2 className="fz-24 fc-gray-700">{adItemsContext.agroupName} 설정 및 정보</h2>
		</SectionHeader>
	);
}

export default AdGroupSetHeader;