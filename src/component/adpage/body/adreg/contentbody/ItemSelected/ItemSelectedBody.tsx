import React, {useContext} from 'react';
import {AdRegisterContext} from "../../../../../../contexts/AdRegisterContext";
import SectionBody from "../../../../../section/SectionBody";
import DdTableCell from "../../../../../table/DdTableCell";
import Dt from "../../../../../table/Dt";

function ItemSelectedBody() {
	const adRegisterContext = useContext(AdRegisterContext);
	const adultYn = adRegisterContext.selectedItem.adultYn === "YES" ? "성인상품" : "일반상품";

	return (
		<SectionBody>
			<dl>
				<Dt title="상품번호"/>
				<DdTableCell>{adRegisterContext.selectedItem.itemNo}</DdTableCell>
			</dl>
			<dl>
				<Dt title="상품명"/>
				<DdTableCell>{adRegisterContext.selectedItem.itemName}</DdTableCell>
			</dl>
			<dl>
				<Dt title="성인여부"/>
				<DdTableCell>{adultYn}</DdTableCell>
			</dl>
		</SectionBody>
	);
}

export default ItemSelectedBody;