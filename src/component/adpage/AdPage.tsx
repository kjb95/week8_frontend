import {Layout} from "antd";
import React, {ReactNode} from 'react';
import AdPageFooter from "./AdPageFooter";
import AdPageHeader from "./AdPageHeader";

interface Props {
	children: ReactNode  // AdPageContent
}

function AdPage({children}: Props) {
	return (
		<Layout>
			<AdPageHeader/>
			{children}
			<AdPageFooter/>
		</Layout>
	);
}

export default AdPage;