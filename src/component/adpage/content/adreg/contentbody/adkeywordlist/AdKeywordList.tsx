import React, {createContext, useMemo, useState} from 'react';
import AdKeywordListHeader from "./AdKeywordListHeader";
import AddKeywordModal from "../../../../../modal/AddKeywordModal";
import AdKeywordListBody from "./AdKeywordListBody";
import SetKeywordBidModal from "../../../../../modal/SetKeywordBidModal";

export interface Keyword {
	key: number,
	keywordName: string,
	bid: string
}

interface AdKeyword {
	isAddKeywordModalOpen: boolean,
	setIsAddKeywordModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
	isSetBidModalOpen: boolean
	setIsSetBidModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
	keywordList: Keyword[],
	setKeywordList: React.Dispatch<React.SetStateAction<Keyword[]>>,
}

const AdKeywordContextDefaultValue: AdKeyword = {
	isAddKeywordModalOpen: false,
	setIsAddKeywordModalOpen: () => {
	},
	isSetBidModalOpen: false,
	setIsSetBidModalOpen: () => {
	},
	keywordList: [],
	setKeywordList: () => {
	},
}

export const KeywordDefaultValue: Keyword = {
	key: 0,
	keywordName: "",
	bid: "0"
}

export const AdKeywordContext = createContext(AdKeywordContextDefaultValue);

function AdKeywordList() {
	const [isAddKeywordModalOpen, setIsAddKeywordModalOpen] = useState<boolean>(false);
	const [isSetBidModalOpen, setIsSetBidModalOpen] = useState<boolean>(false);
	const [keywordList, setKeywordList] = useState<Keyword[]>([]);
	const value = useMemo(
		() => ({
			isAddKeywordModalOpen: isAddKeywordModalOpen,
			setIsAddKeywordModalOpen: setIsAddKeywordModalOpen,
			isSetBidModalOpen: isSetBidModalOpen,
			setIsSetBidModalOpen: setIsSetBidModalOpen,
			keywordList: keywordList,
			setKeywordList: setKeywordList
		}),
		[isAddKeywordModalOpen, isSetBidModalOpen, keywordList]
	);

	return (
		<section className="wrap-section wrap-datagrid">
			<AdKeywordContext.Provider value={value}>
				<AdKeywordListHeader/>
				<AdKeywordListBody/>
				<AddKeywordModal/>
				<SetKeywordBidModal/>
			</AdKeywordContext.Provider>
		</section>
	);
}

export default AdKeywordList;