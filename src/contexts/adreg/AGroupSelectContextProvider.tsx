import React, {createContext, useEffect, useMemo, useState} from "react";
import {findAllAGroup} from "../../api/Api";
import {ChildProps} from "../../constants/Interface";

export interface AGroup {
	agroupId: string,
	agroupName: string
}

interface AGroupSelectContextInterface {
	isModalOpen: boolean,
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
	aGroups: AGroup[],
	setAGroups: React.Dispatch<React.SetStateAction<AGroup[]>>
}

const AGroupSelectContextDefaultValue: AGroupSelectContextInterface = {
	isModalOpen: false,
	setIsModalOpen: () => {
	},
	aGroups: [],
	setAGroups: () => {
	},
}

export const AGroupSelectContext = createContext(AGroupSelectContextDefaultValue);

function AGroupSelectContextProvider({children}: ChildProps) {
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
		<AGroupSelectContext.Provider value={value}>
			{children}
		</AGroupSelectContext.Provider>
	);
}

export default AGroupSelectContextProvider;