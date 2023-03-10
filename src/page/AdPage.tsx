import React, {ReactNode} from 'react';
import AdPageFooter from "../component/adpage/footer/AdPageFooter";
import {Layout} from "antd";
import AdPageHeader from "../component/adpage/header/AdPageHeader";

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