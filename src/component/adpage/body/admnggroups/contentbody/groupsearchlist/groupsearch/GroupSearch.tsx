import React from 'react';
import GroupSearchBody from "./GroupSearchBody";
import GroupSearchHeader from "./GroupSearchHeader";

function GroupSearch() {
	return (
		<section className="wrap-section wrap-tbl">
			<GroupSearchHeader/>
			<GroupSearchBody/>
		</section>
	);
}

export default GroupSearch;