import React, {useState} from 'react';
import {CheckKwd} from "../../../../constants/Interface";
import AdPageBody from "../../AdPageBody";
import CheckKeywordFind from "./contentBody/CheckKeywordFind";
import CheckKeywordList from "./contentBody/CheckKeywordList";


function CheckKeywordContent() {
	const [checkKwd, setCheckKwd] = useState<CheckKwd[]>([]);

	return (
		<AdPageBody title="키워드 검수">
			<CheckKeywordFind setCheckKwd={setCheckKwd}/>
			<CheckKeywordList checkKwd={checkKwd} setCheckKwd={setCheckKwd}/>
		</AdPageBody>
	);
}

export default CheckKeywordContent;