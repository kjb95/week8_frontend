import React, {createContext, ReactNode, useMemo, useState} from "react";

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

interface Props {
	children: ReactNode
}

function AdKeywordContextProvider({children}: Props) {
	const [isAddKeywordModalOpen, setIsAddKeywordModalOpen] = useState<boolean>(false);
	const [isSetBidModalOpen, setIsSetBidModalOpen] = useState<boolean>(false);
	const value = useMemo(
		() => ({
			isAddKeywordModalOpen: isAddKeywordModalOpen,
			setIsAddKeywordModalOpen: setIsAddKeywordModalOpen,
			isSetBidModalOpen: isSetBidModalOpen,
			setIsSetBidModalOpen: setIsSetBidModalOpen,
		}),
		[isAddKeywordModalOpen, isSetBidModalOpen]
	);
	return (
		<AdKeywordContext.Provider value={value}>
			{children}
		</AdKeywordContext.Provider>
	);
}

export default AdKeywordContextProvider;