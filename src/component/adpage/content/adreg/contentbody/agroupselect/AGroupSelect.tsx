import React, {createContext, useEffect, useMemo, useState} from 'react';
import AGroupSelectHeader from "./AGroupSelectHeader";
import AGroupSelectBody from "./AGroupSelectBody";
import {findAllAGroup} from "../../../../../../api/customApi";
import AddAGroupModal from "../../../../../modal/AddAGroupModal";

interface IAGroupSelect {
	isModalOpen: boolean,
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
	aGroupNames: string[],
	setAGroupNames: React.Dispatch<React.SetStateAction<string[]>>
}

const AGroupSelectContextDefaultValue: IAGroupSelect = {
	isModalOpen: false,
	setIsModalOpen: () => {
	},
	aGroupNames: [],
	setAGroupNames: () => {
	},
}

export const AGroupSelectContext = createContext(AGroupSelectContextDefaultValue);


function AGroupSelect() {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [aGroupNames, setAGroupNames] = useState<string[]>([]);
	const value = useMemo(
		() => ({
			isModalOpen: isModalOpen,
			setIsModalOpen: setIsModalOpen,
			aGroupNames: aGroupNames,
			setAGroupNames: setAGroupNames,
		}),
		[isModalOpen, aGroupNames]
	);

	useEffect(() => {
		findAllAGroup()
			.then((res) => setAGroupNames(res.data.names))
			.catch()
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