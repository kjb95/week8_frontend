import React, {createContext, useMemo, useState} from 'react';
import {ChildProps} from "../../constants/Interface";

interface AdGroupList {
	selectedRowKeys: React.Key[],
	setSelectedRowKeys: React.Dispatch<React.SetStateAction<React.Key[]>>
}

const AdGroupListContextDefaultValue: AdGroupList = {
	selectedRowKeys: [],
	setSelectedRowKeys: () => {
	}
}

export const AdGroupListContext = createContext(AdGroupListContextDefaultValue);

function AdGroupListContextProvider({children}: ChildProps) {
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
	const adGroupListContextValue = useMemo(() => ({
			selectedRowKeys: selectedRowKeys,
			setSelectedRowKeys: setSelectedRowKeys
		}),
		[selectedRowKeys]
	);

	return (
		<AdGroupListContext.Provider value={adGroupListContextValue}>
			{children}
		</AdGroupListContext.Provider>
	);
}

export default AdGroupListContextProvider;