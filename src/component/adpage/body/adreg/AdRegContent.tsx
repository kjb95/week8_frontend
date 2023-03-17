import {Content} from 'antd/es/layout/layout';
import React, {useContext} from 'react';
import {AdRegisterContext} from "../../../../contexts/adreg/AdRegisterContextProvider";
import ItemLookUpContextProvider from "../../../../contexts/adreg/ItemLookUpContextProvider";
import AdKeyword from "./contentbody/adkeywordlist/AdKeywordList";
import AdRegister from "./contentbody/AdRegister";
import AGroupSelect from "./contentbody/agroupselect/AGroupSelect";
import ItemLookUp from "./contentbody/itemlookup/ItemLookUp";
import ItemSelected from "./contentbody/ItemSelected/ItemSelected";

function AdRegContent() {
	const adRegisterContext = useContext(AdRegisterContext);
	const isSelectedItem = adRegisterContext.selectedItem.key !== "";

	return (
		<Content>
			<div className="site-layout-content">
				<div className="inner-content">
					<div className="content-header"><h1 className="fz-32 fc-gray-900">광고 등록</h1></div>
					<div className="content-body">
						<ItemLookUpContextProvider>
							<ItemLookUp/>
						</ItemLookUpContextProvider>
						{isSelectedItem && <>
							<ItemSelected/>
							<AGroupSelect/>
							<AdKeyword/>
							<AdRegister/>
						</>}
					</div>
				</div>
			</div>
		</Content>
	);
}

export default AdRegContent;