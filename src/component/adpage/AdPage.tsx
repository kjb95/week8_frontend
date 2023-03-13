import React, {ReactNode} from 'react';
import AdPageFooter from "./footer/AdPageFooter";
import {Layout} from "antd";
import AdPageHeader from "./header/AdPageHeader";

interface Props {
	children: ReactNode
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