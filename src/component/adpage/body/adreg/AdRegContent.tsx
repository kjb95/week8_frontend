import React, {useContext} from 'react';
import {AdRegisterContext} from "../../../../contexts/adreg/AdRegisterContextProvider";
import ItemLookUpContextProvider from "../../../../contexts/adreg/ItemLookUpContextProvider";
import AdPageBody from "../../AdPageBody";
import AdKeyword from "./contentbody/adkeywordlist/AdKeywordList";
import AdRegister from "./contentbody/AdRegister";
import AGroupSelect from "./contentbody/agroupselect/AGroupSelect";
import ItemLookUp from "./contentbody/itemlookup/ItemLookUp";
import ItemSelected from "./contentbody/ItemSelected/ItemSelected";

function AdRegContent() {
	const adRegisterContext = useContext(AdRegisterContext);
	const isSelectedItem = adRegisterContext.selectedItem.key !== "";

	return (
		<AdPageBody>
			<ItemLookUpContextProvider>
				<ItemLookUp/>
			</ItemLookUpContextProvider>
			{isSelectedItem && <>
				<ItemSelected/>
				<AGroupSelect/>
				<AdKeyword/>
				<AdRegister/></>
			}
		</AdPageBody>
	);
}

export default AdRegContent;