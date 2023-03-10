import React, {createContext, useMemo, useState} from 'react';
import AdKeywordListHeader from "./AdKeywordListHeader";
import AddKeywordModal from "../../../../modal/AddKeywordModal";
import AdKeywordListBody from "./AdKeywordListBody";

export interface Keyword {
	key: number,
	keywordName: string,
	bid: string
}

interface AdKeyword {
	isModalOpen: boolean,
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
	keywordList: Keyword[],
	setKeywordList: React.Dispatch<React.SetStateAction<Keyword[]>>,
}

const AdKeywordContextDefaultValue: AdKeyword = {
	isModalOpen: false,
	setIsModalOpen: () => {
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
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [keywordList, setKeywordList] = useState<Keyword[]>([]);
	const value = useMemo(
		() => ({
			isModalOpen: isModalOpen,
			setIsModalOpen: setIsModalOpen,
			keywordList: keywordList,
			setKeywordList: setKeywordList
		}),
		[isModalOpen, keywordList]
	);

	return (
		<section className="wrap-section wrap-datagrid">
			<AdKeywordContext.Provider value={value}>
				<AdKeywordListHeader/>
				<AdKeywordListBody/>
				<AddKeywordModal/>
			</AdKeywordContext.Provider>
		</section>
	);
}

export default AdKeywordList;