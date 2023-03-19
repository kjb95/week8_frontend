import {Button, message, Modal} from "antd";
import React, {useContext} from 'react';
import {registerAd} from "../../../../../api/Api";
import {AdRegisterContext} from "../../../../../contexts/adreg/AdRegisterContextProvider";
import SectionFooter from "../../../../section/SectionFooter";

export interface AdRegisterData {
	agroupId: string,
	itemId: string,
	advId: string | null,
	keywordList: Kwd[]
}

interface Kwd {
	keywordName: string,
	bid: string
}

function AdRegister() {
	const context = useContext(AdRegisterContext);
	const kwds: Kwd[] = context.keywordList.map(keyword => ({keywordName: keyword.keywordName, bid: keyword.bid}));
	const adRegisterData: AdRegisterData = {
		agroupId: context.agroupId,
		itemId: context.itemId,
		advId: context.advId,
		keywordList: kwds
	};
	const [messageApi, contextHolder] = message.useMessage();

	function handleOnClick(adRegisterData: AdRegisterData) {
		if (adRegisterData.agroupId === "") {
			return messageApi.error("광고 그룹 등록이 필요합니다");
		}
		if (adRegisterData.keywordList.length === 0) {
			return messageApi.error("키워드 등록이 필요합니다");
		}
		registerAd(adRegisterData)
			.then(() => Modal.success({title: "광고 등록 성공", onOk: () => window.location.reload()}))
			.catch((e) => messageApi.error(e.response.data.message))
	}

	return (
		<SectionFooter>
			{contextHolder}
			<Button type="primary" size="large" className="pink" block={true} onClick={() => handleOnClick(adRegisterData)}>광고 등록</Button>
		</SectionFooter>
	);
}

export default AdRegister;