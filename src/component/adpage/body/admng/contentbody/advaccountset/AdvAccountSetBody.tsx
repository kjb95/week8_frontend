import {Button, Switch} from "antd";
import React, {useEffect, useState} from 'react';
import {findAdv, updateAdIngActYn} from "../../../../../../api/Api";
import {AUTHENTICATED_MEMBER_ID} from "../../../../../../constants/Constant";
import {toWon} from "../../../../../../utils/Utils";
import SetDayLimitBudgetModal from "../../../../../modal/SetDayLimitBudgetModal";
import SectionBody from "../../../../../section/SectionBody";
import Dd from "../../../../../table/Dd";
import DdTableCell from "../../../../../table/DdTableCell";
import Dt from "../../../../../table/Dt";

export interface Adv {
	adIngActYn: boolean,
	balance: number,
	eventMoney: number,
	dayLimitBudget: number
}

const AdvDefaultValue: Adv = {
	adIngActYn: false,
	balance: 0,
	eventMoney: 0,
	dayLimitBudget: 0
}

function AdvAccountSetBody() {
	const [adv, setAdv] = useState<Adv>(AdvDefaultValue);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const advId = sessionStorage.getItem(AUTHENTICATED_MEMBER_ID);

	useEffect(() => {
		findAdv(advId)
			.then(res => setAdv(res.data))
			.catch(e => console.log(e))
	}, []);

	function computeBalanceStatus() {
		return adv.balance + adv.eventMoney > 0 ? "정상" : "잔액 없음";
	}

	function computeDayLimitBudget() {
		return adv.dayLimitBudget == 0 ? "무제한" : adv.dayLimitBudget;
	}

	function handleAdSet(checked: boolean) {
		updateAdIngActYn(advId, checked)
			.then(() => setAdv({adIngActYn: checked, balance: adv.balance, eventMoney: adv.eventMoney, dayLimitBudget: adv.dayLimitBudget}))
			.catch(e => console.log(e));
	}

	return (
		<SectionBody>
			<dl>
				<Dt title="광고 설정"/>
				<Dd><Switch checkedChildren="ON" unCheckedChildren="OFF" size="small" onClick={(checked) => handleAdSet(checked)} checked={adv.adIngActYn}/></Dd>
			</dl>
			<dl>
				<Dt title="충전금 잔액"/>
				<DdTableCell>{toWon(adv.balance)}</DdTableCell>
			</dl>
			<dl>
				<Dt title="이벤트 머니 잔액"/>
				<DdTableCell>{toWon(adv.eventMoney)}</DdTableCell>
			</dl>
			<dl>
				<Dt title="잔액 상태"/>
				<DdTableCell>{computeBalanceStatus()}</DdTableCell>
			</dl>
			<dl>
				<Dt title="일일 허용 예산"/>
				<DdTableCell>
					<span style={{marginRight: "20px"}}>{computeDayLimitBudget()}</span>
					<Button type="primary" onClick={() => setIsModalOpen(true)}>일일 허용 예산 설정</Button>
					<SetDayLimitBudgetModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} adv={adv} setAdv={setAdv}/>
				</DdTableCell>
			</dl>
		</SectionBody>
	);
}

export default AdvAccountSetBody;