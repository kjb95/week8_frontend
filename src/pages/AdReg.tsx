import React from 'react';
import AdPage from "../component/adpage/AdPage";
import AdRegContent from '../component/adpage/body/adreg/AdRegContent';
import AdRegisterContextProvider from "../contexts/adreg/AdRegisterContextProvider";

function AdReg() {
	return (
		<AdPage>
			<AdRegisterContextProvider>
				<AdRegContent/>
			</AdRegisterContextProvider>
		</AdPage>
	);

}

export default AdReg;