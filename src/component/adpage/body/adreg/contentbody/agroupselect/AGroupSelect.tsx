import React from 'react';
import AGroupSelectContextProvider from '../../../../../../contexts/adreg/AGroupSelectContextProvider';
import AddAGroupModal from "../../../../../modal/adreg/AddAGroupModal";
import AGroupSelectBody from "./AGroupSelectBody";
import AGroupSelectHeader from "./AGroupSelectHeader";

function AGroupSelect() {
	return (
		<section className="wrap-section wrap-tbl">
			<AGroupSelectContextProvider>
				<AGroupSelectHeader/>
				<AGroupSelectBody/>
				<AddAGroupModal/>
			</AGroupSelectContextProvider>
		</section>
	);
}

export default AGroupSelect;