import React, {createContext, useMemo, useState} from "react";

export interface AdGroup {
	key: string,
	agroupName: string,
	agroupUseConfigYn: boolean,
	numOfItemLive: number,
	numOfItemAll: number
}

interface AdGroupSearch {
	adGroups: AdGroup[],
	setAdGroups: React.Dispatch<React.SetStateAction<AdGroup[]>>
}

const AdGroupSearchContextDefaultValue: AdGroupSearch = {
	adGroups: [],
	setAdGroups: () => {
	},
}

export const AdGroupContext = createContext(AdGroupSearchContextDefaultValue);

interface Props {
	children: React.ReactNode
}

function AdGroupContextProvider({children}: Props) {
	const [adGroups, setAdGroups] = useState<AdGroup[]>([]);
	const adGroupContextValue = useMemo(() => ({
			adGroups: adGroups,
			setAdGroups: setAdGroups
		}),
		[adGroups]
	);

	return (
		<AdGroupContext.Provider value={adGroupContextValue}>
			{children}
		</AdGroupContext.Provider>
	);
}

export default AdGroupContextProvider;