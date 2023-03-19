import React, {createContext, useMemo, useState} from 'react';
import {ChildProps} from "../../constants/Interface";

interface Item {
	key: number,
	itemNo: string,
	itemName: string,
	adUseConfigYn: boolean
}

export interface AdItemsContextInterface {
	agroupName: string,
	setAgroupName: React.Dispatch<React.SetStateAction<string>>,
	agroupUseConfigYn: boolean,
	setAgroupUseConfigYn: React.Dispatch<React.SetStateAction<boolean>>,
	regTime: string,
	setRegTime: React.Dispatch<React.SetStateAction<string>>,
	items: Item[],
	setItems: React.Dispatch<React.SetStateAction<Item[]>>,
}

const AdItemsContextDefaultValue: AdItemsContextInterface = {
	agroupName: "",
	setAgroupName: () => {
	},
	agroupUseConfigYn: false,
	setAgroupUseConfigYn: () => {
	},
	regTime: "",
	setRegTime: () => {
	},
	items: [],
	setItems: () => {
	}
}

export const AdItemsContext = createContext(AdItemsContextDefaultValue);

function AdItemsContextProvider({children}: ChildProps) {
	const [agroupName, setAgroupName] = useState<string>("");
	const [agroupUseConfigYn, setAgroupUseConfigYn] = useState<boolean>(false);
	const [regTime, setRegTime] = useState<string>("");
	const [items, setItems] = useState<Item[]>([]);
	const adItemsContextValue = useMemo(() => ({
			agroupName: agroupName,
			setAgroupName: setAgroupName,
			agroupUseConfigYn: agroupUseConfigYn,
			setAgroupUseConfigYn: setAgroupUseConfigYn,
			regTime: regTime,
			setRegTime: setRegTime,
			items: items,
			setItems: setItems
		}), [agroupName, agroupUseConfigYn, regTime, items]
	)
	return (
		<AdItemsContext.Provider value={adItemsContextValue}>
			{children}
		</AdItemsContext.Provider>
	);
}

export default AdItemsContextProvider;