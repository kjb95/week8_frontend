import {Content} from 'antd/es/layout/layout';
import React, {createContext, useMemo, useState} from 'react';
import {AUTHENTICATED_MEMBER_ID} from "../../../../const/Const";
import AdKeyword from "./contentbody/adkeywordlist/AdKeywordList";
import AdRegister from "./contentbody/AdRegister";
import AGroupSelect from "./contentbody/agroupselect/AGroupSelect";
import Items from './contentbody/itemlookup/ItemLookUp';

export interface Keyword {
	key: string,
	keywordName: string,
	bid: string
}

export const KeywordDefaultValue: Keyword = {
	key: "",
	keywordName: "",
	bid: "0"
}

export interface AdRegisterContextData {
	agroupId: string,
	setAGroupId: React.Dispatch<React.SetStateAction<string>>
	itemId: string,
	setItemId: React.Dispatch<React.SetStateAction<string>>
	advId: string | null,
	keywordList: Keyword[],
	setKeywordList: React.Dispatch<React.SetStateAction<Keyword[]>>
}

const AdRegisterContextDefaultValue: AdRegisterContextData = {
	agroupId: "",
	setAGroupId: () => {
	},
	itemId: "",
	setItemId: () => {
	},
	advId: "",
	keywordList: [],
	setKeywordList: () => {
	},
}

export const AdRegisterContext = createContext(AdRegisterContextDefaultValue);

function AdRegContent() {
	const [agroupId, setAGroupId] = useState<string>("");
	const [isSelectedItem, setIsSelectedItem] = useState<boolean>(false);
	const [itemId, setItemId] = useState<string>("");
	const [keywordList, setKeywordList] = useState<Keyword[]>([]);
	const advId = sessionStorage.getItem(AUTHENTICATED_MEMBER_ID);

	const value = useMemo(
		() => ({
			agroupId: agroupId,
			setAGroupId: setAGroupId,
			itemId: itemId,
			setItemId: setItemId,
			advId: advId,
			keywordList: keywordList,
			setKeywordList: setKeywordList
		}),
		[agroupId, itemId, advId, keywordList]
	);
	return (
		<Content>
			<div className="site-layout-content">
				<div className="inner-content">
					<div className="content-header"><h1 className="fz-32 fc-gray-900">광고 등록</h1></div>
					<div className="content-body">
						<AdRegisterContext.Provider value={value}>
							<Items setIsSelectedItem={setIsSelectedItem}/>
							{isSelectedItem && <AGroupSelect/>}
							{isSelectedItem && <AdKeyword/>}
							{isSelectedItem && <AdRegister/>}
						</AdRegisterContext.Provider>
					</div>
				</div>
			</div>
		</Content>
	);
}

export default AdRegContent;