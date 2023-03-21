import {Switch} from "antd";
import {Button} from "antd/lib";
import React, {Key, useEffect, useState} from 'react';
import {useParams} from "react-router";
import {updateAdGroupUseConfig} from "../../../../../../api/agroup/AgroupApi";
import {updateAdGroup} from "../../../../../../constants/Function";
import {AdMngItem, AdMngSetAdGroup} from "../../../../../../constants/Interface";
import SetAdGroupNameModal from "../../../../../modal/admngitems/SetAdGroupNameModal";
import SectionBody from "../../../../../section/SectionBody";
import SectionHeader from "../../../../../section/SectionHeader";
import Dd from "../../../../../table/Dd";
import DdTableCell from "../../../../../table/DdTableCell";
import Dt from "../../../../../table/Dt";

const AdMngAdGroupDefaultValue: AdMngSetAdGroup = {
	agroupName: "",
	agroupUseConfigYn: false,
	regTime: ""
}

interface Props {
	items: AdMngItem[],
	setItems: React.Dispatch<React.SetStateAction<AdMngItem[]>>,
}

function AdGroupSet({items}: Props) {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const params = useParams();
	const [adGroup, setAdGroup] = useState<AdMngSetAdGroup>(AdMngAdGroupDefaultValue);
	const itemCount = items.length + "개";

	useEffect(() => {
		updateAdGroup(params.id, setAdGroup);
	}, [params.id]);

	function handleAdGroupOnOff(checked: boolean) {
		const adGroupIds: (Key | undefined)[] = [params.id];
		updateAdGroupUseConfig(adGroupIds, checked)
			.then(() => updateAdGroup(params.id, setAdGroup))
			.catch(e => console.log(e));
	}

	return (
		<section className="wrap-section wrap-tbl">
			<SectionHeader>
				<h2 className="fz-24 fc-gray-700">{adGroup.agroupName} 설정 및 정보</h2>
			</SectionHeader>
			<SectionBody>
				<dl>
					<Dt title="그룹 명"/>
					<DdTableCell>
						{adGroup.agroupName}
						<Button type="primary" className="pink" style={{marginLeft: "20px"}} onClick={() => setIsModalOpen(true)}>그룹명 변경</Button>
						<SetAdGroupNameModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setAdGroup={setAdGroup}/>
					</DdTableCell>
				</dl>
				<dl>
					<Dt title="그룹 ON/OFF"/>
					<Dd><Switch checkedChildren="ON" unCheckedChildren="OFF" size="small" onClick={(checked) => handleAdGroupOnOff(checked)} checked={adGroup.agroupUseConfigYn}/></Dd>
				</dl>
				<dl>
					<Dt title="광고상품 수"/>
					<DdTableCell>
						{itemCount}
						<Button type="primary" className="pink" style={{marginLeft: "20px"}} onClick={() => window.location.href = "/adReg"}>광고 상품 등록</Button>
					</DdTableCell>
				</dl>
				<dl>
					<Dt title="광고 설정"/>
					<DdTableCell>{adGroup.regTime}</DdTableCell>
				</dl>
			</SectionBody>
		</section>
	);
}

export default AdGroupSet;