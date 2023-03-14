import React, {createContext} from "react";

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
