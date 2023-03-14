import React from 'react';
import SectionHeader from "../../../../../section/SectionHeader";
import ItemSelectedBody from "./ItemSelectedBody";

function ItemSelected() {
	return (
		<section className="wrap-section wrap-tbl">
			<SectionHeader>
				<h2 className="fz-24 fc-gray-700">선택한 상품 정보</h2>
			</SectionHeader>
			<ItemSelectedBody/>
		</section>
	);
}

export default ItemSelected;