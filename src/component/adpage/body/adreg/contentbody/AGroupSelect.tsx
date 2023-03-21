import {Button, Select} from "antd";
import React, {useEffect, useState} from 'react';
import {findAllAdGroupIdAndName} from "../../../../../api/agroup/AgroupApi";
import {AdRegAdGroup} from "../../../../../constants/Interface";
import AdRegAddAdGroupModal from "../../../../modal/adreg/AdRegAddAdGroupModal";
import SectionBody from "../../../../section/SectionBody";
import SectionHeader from "../../../../section/SectionHeader";
import Dd from "../../../../table/Dd";
import Dt from "../../../../table/Dt";

interface Props {
	agroupId: string,
	setAGroupId: React.Dispatch<React.SetStateAction<string>>,
}

function AGroupSelect({setAGroupId, agroupId}: Props) {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [aGroups, setAGroups] = useState<AdRegAdGroup[]>([]);
	const aGroupsOptions = aGroups.map((aGroup) => ({value: aGroup.agroupId, label: aGroup.agroupName}))
	const selectValue = agroupId === "" ? null : agroupId;

	useEffect(() => {
		findAllAdGroupIdAndName()
			.then((res) => setAGroups(res.data.agroups))
			.catch((e) => console.log(e))
	}, [])
	return (
		<section className="wrap-section wrap-tbl">
			<SectionHeader>
				<h2 className="fz-24 fc-gray-700">광고 그룹 선택</h2>
				<Button type="primary" size="large" className="gray" onClick={() => setIsModalOpen(true)}>신규 그룹 생성</Button>
			</SectionHeader>
			<SectionBody>
				<dl>
					<Dt title="광고 그룹"/>
					<Dd>
						<Select style={{width: 250}} options={aGroupsOptions} value={selectValue} placeholder="광고그룹을 선택해주세요"
						        onChange={(value) => setAGroupId(value)}
						/>
					</Dd>
				</dl>
			</SectionBody>
			<AdRegAddAdGroupModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} aGroups={aGroups} setAGroups={setAGroups} setAGroupId={setAGroupId}/>
		</section>
	);
}

export default AGroupSelect;