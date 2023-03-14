import React, {useMemo, useState} from 'react';
import {AdKeywordContext} from '../../../../../../contexts/AdKeywordContext';
import AddKeywordModal from "../../../../../modal/AddKeywordModal";
import SetKeywordBidModal from "../../../../../modal/SetKeywordBidModal";
import AdKeywordListBody from "./AdKeywordListBody";
import AdKeywordListHeader from "./AdKeywordListHeader";

function AdKeywordList() {
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