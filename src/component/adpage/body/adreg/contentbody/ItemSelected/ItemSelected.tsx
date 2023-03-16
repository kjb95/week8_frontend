import React from 'react';
import ItemSelectedBody from "./ItemSelectedBody";
import ItemSelectedHeader from "./ItemSelectedHeader";

function ItemSelected() {
	return (
		<section className="wrap-section wrap-tbl">
			<ItemSelectedHeader/>
			<ItemSelectedBody/>
		</section>
	);
}

export default ItemSelected;