import React, {createContext, Key, useMemo, useState} from "react";
import {ChildProps} from "../../constants/Interface";

export interface AdGroup {
	key: Key,
	agroupName: string,
	agroupUseConfigYn: string,
	itemCountLiveAndAll: string,
}

export interface AdGroupSearch {
	adGroups: AdGroup[],
	setAdGroups: React.Dispatch<React.SetStateAction<AdGroup[]>>
	selectedRowKeys: Key[],
	setSelectedRowKeys: React.Dispatch<React.SetStateAction<React.Key[]>>
	adGroupNameSearchKeyword: string,
	setAdGroupNameSearchKeyword: React.Dispatch<React.SetStateAction<string>>

}

const AdGroupSearchContextDefaultValue: AdGroupSearch = {
	adGroups: [],
	setAdGroups: () => {
	},
	selectedRowKeys: [],
	setSelectedRowKeys: () => {
	},
	adGroupNameSearchKeyword: "",
	setAdGroupNameSearchKeyword: () => {
	}
}

export const AdGroupContext = createContext(AdGroupSearchContextDefaultValue);

function AdGroupContextProvider({children}: ChildProps) {
	const [adGroups, setAdGroups] = useState<AdGroup[]>([]);
	const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
	const [adGroupNameSearchKeyword, setAdGroupNameSearchKeyword] = useState<string>("");
	const adGroupContextValue = useMemo(() => ({
			adGroups: adGroups,
			setAdGroups: setAdGroups,
			selectedRowKeys: selectedRowKeys,
			setSelectedRowKeys: setSelectedRowKeys,
			adGroupNameSearchKeyword: adGroupNameSearchKeyword,
			setAdGroupNameSearchKeyword: setAdGroupNameSearchKeyword
		}),
		[adGroups, selectedRowKeys, adGroupNameSearchKeyword]
	);

	return (
		<AdGroupContext.Provider value={adGroupContextValue}>
			{children}
		</AdGroupContext.Provider>
	);
}

export default AdGroupContextProvider;