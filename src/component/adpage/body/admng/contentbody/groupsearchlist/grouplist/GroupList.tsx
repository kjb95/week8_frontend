import React from 'react';
import GroupListBody from "./GroupListBody";
import GroupListHeader from "./GroupListHeader";

function GroupList() {
	return (
		<section className="wrap-section wrap-datagrid">
			<GroupListHeader/>
			<GroupListBody/>
		</section>
	);
}

export default GroupList;