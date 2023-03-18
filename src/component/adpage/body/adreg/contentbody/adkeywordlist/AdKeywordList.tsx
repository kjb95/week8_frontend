import React from 'react';
import AdKeywordContextProvider from '../../../../../../contexts/adreg/AdKeywordContextProvider';
import AddKeywordModal from "../../../../../modal/adreg/AddKeywordModal";
import SetKeywordBidModal from "../../../../../modal/adreg/SetKeywordBidModal";
import AdKeywordListBody from "./AdKeywordListBody";
import AdKeywordListHeader from "./AdKeywordListHeader";

function AdKeywordList() {
	return (
		<section className="wrap-section wrap-datagrid">
			<AdKeywordContextProvider>
				<AdKeywordListHeader/>
				<AdKeywordListBody/>
				<AddKeywordModal/>
				<SetKeywordBidModal/>
			</AdKeywordContextProvider>
		</section>
	);
}

export default AdKeywordList;