import React, {useState} from 'react';
import {AdMngItem} from "../../../../constants/Interface";
import AdPageBody from "../../AdPageBody";
import AdGroupSet from "./contentbody/adgroupset/AdGroupSet";

function AdMngItemsContent() {
	const [items, setItems] = useState<AdMngItem[]>([]);

	return (
		<AdPageBody>
			<AdGroupSet items={items} setItems={setItems}/>
		</AdPageBody>
	);
}

export default AdMngItemsContent;