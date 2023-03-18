import React from 'react';
import AdvAccountSetBody from "./AdvAccountSetBody";
import AdvAccountSetHeader from "./AdvAccountSetHeader";

function AdvAccountSet() {
	return (
		<section className="wrap-section wrap-tbl">
			<AdvAccountSetHeader/>
			<AdvAccountSetBody/>
		</section>
	);
}

export default AdvAccountSet;