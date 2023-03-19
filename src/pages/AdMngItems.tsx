import React from 'react';
import AdPage from "../component/adpage/AdPage";
import AdMngItemsContent from "../component/adpage/body/admngitems/AdMngItemsContent";
import AdItemsContextProvider from "../contexts/admngitems/AdItemsContextProvider";

function AdMngItems() {
	return (
		<AdPage>
			<AdItemsContextProvider>
				<AdMngItemsContent/>
			</AdItemsContextProvider>
		</AdPage>
	);
}

export default AdMngItems;