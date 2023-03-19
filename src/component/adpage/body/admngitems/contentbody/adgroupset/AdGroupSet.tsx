import React from 'react';
import AdGroupSetBody from "./AdGroupSetBody";
import AdGroupSetHeader from "./AdGroupSetHeader";

function AdGroupSet() {
	return (
		<section className="wrap-section wrap-tbl">
			<AdGroupSetHeader/>
			<AdGroupSetBody/>
		</section>
	);
}

export default AdGroupSet;