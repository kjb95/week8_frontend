import {Button, Modal} from "antd";
import React, {useContext, useState} from 'react';
import {registerAd} from "../../../../../api/Api";
import RegisterAdSuccessModal from "../../../../modal/RegisterAdSuccessModal";
import {AdRegisterContext} from "../AdRegContent";

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


function handleOnClick(adRegisterData: AdRegisterData) {
	registerAd(adRegisterData)
		.then(() => Modal.success({title: "광고 등록 성공"}))
		.catch(() => Modal.error({title: "광고 등록 실패"}))
}

function AdRegister() {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const context = useContext(AdRegisterContext);
	const kwds: Kwd[] = context.keywordList.map(keyword => ({keywordName: keyword.keywordName, bid: keyword.bid}));
	const adRegisterData: AdRegisterData = {
		agroupId: context.agroupId,
		itemId: context.itemId,
		advId: context.advId,
		keywordList: kwds
	};

	return (
		<div className="box-footer">
			<div className="box-center">
				<Button type="primary" size="large" className="pink" block={true} onClick={() => handleOnClick(adRegisterData)}>광고 등록</Button>
				<RegisterAdSuccessModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
			</div>
		</div>
	);
}

export default AdRegister;