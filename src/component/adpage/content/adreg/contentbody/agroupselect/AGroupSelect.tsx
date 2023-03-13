import React, {createContext, useEffect, useMemo, useState} from 'react';
import {findAllAGroup} from "../../../../../../api/customApi";
import AddAGroupModal from "../../../../../modal/AddAGroupModal";
import AGroupSelectBody from "./AGroupSelectBody";
import AGroupSelectHeader from "./AGroupSelectHeader";

interface AGroup {
	agroupId: string,
	agroupName: string
}

interface IAGroupSelect {
	isModalOpen: boolean,
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
	aGroups: AGroup[],
	setAGroups: React.Dispatch<React.SetStateAction<AGroup[]>>
}

const AGroupSelectContextDefaultValue: IAGroupSelect = {
	isModalOpen: false,
	setIsModalOpen: () => {
	},
	aGroups: [],
	setAGroups: () => {
	},
}

export const AGroupSelectContext = createContext(AGroupSelectContextDefaultValue);


function AGroupSelect() {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [aGroups, setAGroups] = useState<AGroup[]>([]);
	const value = useMemo(
		() => ({
			isModalOpen: isModalOpen,
			setIsModalOpen: setIsModalOpen,
			aGroups: aGroups,
			setAGroups: setAGroups,
		}),
		[isModalOpen, aGroups]
	);

	useEffect(() => {
		findAllAGroup()
			.then((res) => setAGroups(res.data.agroups))
			.catch((e) => console.log(e))
	}, [])

	return (
		<section className="wrap-section wrap-tbl">
			<AGroupSelectContext.Provider value={value}>
				<AGroupSelectHeader/>
				<AGroupSelectBody/>
				<AddAGroupModal/>
			</AGroupSelectContext.Provider>
		</section>
	);
}

export default AGroupSelect;