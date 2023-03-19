import {Switch} from "antd";
import {Button} from "antd/lib";
import React, {Key, useContext, useState} from 'react';
import {useParams} from "react-router";
import {updateAdGroupUseConfig} from "../../../../../../api/Api";
import {AUTHENTICATED_MEMBER_ID} from "../../../../../../constants/Constant";
import {AdItemsContext} from "../../../../../../contexts/admngitems/AdItemsContextProvider";
import SetAdGroupNameModal from "../../../../../modal/admngitems/SetAdGroupNameModal";
import SectionBody from "../../../../../section/SectionBody";
import Dd from "../../../../../table/Dd";
import DdTableCell from "../../../../../table/DdTableCell";
import Dt from "../../../../../table/Dt";
import {updateAdMngItems} from "../../AdMngItemsContent";

function AdGroupSetBody() {
	const adItemsContext = useContext(AdItemsContext);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const params = useParams();
	const itemCount = adItemsContext.items.length + "개";

	function handleAdGroupOnOff(checked: boolean) {
		const adGroupId: (Key | undefined)[] = [params.id];
		updateAdGroupUseConfig(adGroupId, checked)
			.then(() => updateAdMngItems(adItemsContext, params.id, sessionStorage.getItem(AUTHENTICATED_MEMBER_ID)))
			.catch(e => console.log(e));
	}

	return (
		<SectionBody>
			<dl>
				<Dt title="그룹 명"/>
				<DdTableCell>
					{adItemsContext.agroupName}
					<Button type="primary" className="pink" style={{marginLeft: "20px"}} onClick={() => setIsModalOpen(true)}>그룹명 변경</Button>
					<SetAdGroupNameModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
				</DdTableCell>
			</dl>
			<dl>
				<Dt title="그룹 ON/OFF"/>
				<Dd><Switch checkedChildren="ON" unCheckedChildren="OFF" size="small" onClick={(checked) => handleAdGroupOnOff(checked)} checked={adItemsContext.agroupUseConfigYn}/></Dd>
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
				<DdTableCell>{adItemsContext.regTime}</DdTableCell>
			</dl>
		</SectionBody>
	);
}

export default AdGroupSetBody;