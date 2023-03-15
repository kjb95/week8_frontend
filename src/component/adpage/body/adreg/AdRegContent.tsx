import {Content} from 'antd/es/layout/layout';
import React, {useMemo, useState} from 'react';
import {AUTHENTICATED_MEMBER_ID} from "../../../../constants/Constant";
import {AdRegisterContext, Keyword} from "../../../../contexts/AdRegisterContext";
import {Item, ItemDefaultValue} from "../../../../contexts/ItemLookUpContext";
import AdKeyword from "./contentbody/adkeywordlist/AdKeywordList";
import AdRegister from "./contentbody/AdRegister";
import AGroupSelect from "./contentbody/agroupselect/AGroupSelect";
import ItemLookUp from "./contentbody/itemlookup/ItemLookUp";
import ItemSelected from "./contentbody/ItemSelected/ItemSelected";

function AdRegContent() {
	const [agroupId, setAGroupId] = useState<string>("");
	const [itemId, setItemId] = useState<string>("");
	const [keywordList, setKeywordList] = useState<Keyword[]>([]);
	const [selectedItem, setSelectedItem] = useState<Item>(ItemDefaultValue);
	const advId = sessionStorage.getItem(AUTHENTICATED_MEMBER_ID);
	const isSelectedItem = selectedItem.key !== "";

	const value = useMemo(
		() => ({
			agroupId: agroupId,
			setAGroupId: setAGroupId,
			itemId: itemId,
			setItemId: setItemId,
			advId: advId,
			keywordList: keywordList,
			setKeywordList: setKeywordList,
			selectedItem: selectedItem,
			setSelectedItem: setSelectedItem
		}),
		[agroupId, itemId, advId, keywordList, selectedItem]
	);
	return (
		<Content>
			<div className="site-layout-content">
				<div className="inner-content">
					<div className="content-header"><h1 className="fz-32 fc-gray-900">광고 등록</h1></div>
					<div className="content-body">
						<AdRegisterContext.Provider value={value}>
							<ItemLookUp/>
							{isSelectedItem && <>
								<ItemSelected/>
								<AGroupSelect/>
								<AdKeyword/>
								<AdRegister/>
							</>}
						</AdRegisterContext.Provider>
					</div>
				</div>
			</div>
		</Content>
	);
}

export default AdRegContent;