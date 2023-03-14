import React, {useContext} from 'react';
import {ADULT_ITEM, ADULT_YES, GENERAL_ITEM} from "../../../../../../constants/Constant";
import {AdRegisterContext} from "../../../../../../contexts/AdRegisterContext";
import DdTableCell from "../../../../../table/DdTableCell";
import Dt from "../../../../../table/Dt";
import SectionBody from "../../../../../section/SectionBody";

function ItemSelectedBody() {
	const adRegisterContext = useContext(AdRegisterContext);
	const adultYn = adRegisterContext.selectedItem.adultYn === ADULT_YES ? ADULT_ITEM : GENERAL_ITEM;

	return (
		<SectionBody>
			<dl>
				<Dt title="상품번호"/>
				<DdTableCell data={adRegisterContext.selectedItem.itemNo}/>
			</dl>
			<dl>
				<Dt title="상품명"/>
				<DdTableCell data={adRegisterContext.selectedItem.itemName}/>
			</dl>
			<dl>
				<Dt title="성인여부"/>
				<DdTableCell data={adultYn}/>
			</dl>
		</SectionBody>
	);
}

export default ItemSelectedBody;