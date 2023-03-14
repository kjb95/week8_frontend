import React, {createContext} from "react";

interface AdKeyword {
	isAddKeywordModalOpen: boolean,
	setIsAddKeywordModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
	isSetBidModalOpen: boolean
	setIsSetBidModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const AdKeywordContextDefaultValue: AdKeyword = {
	isAddKeywordModalOpen: false,
	setIsAddKeywordModalOpen: () => {
	},
	isSetBidModalOpen: false,
	setIsSetBidModalOpen: () => {
	},
}

export const AdKeywordContext = createContext(AdKeywordContextDefaultValue);