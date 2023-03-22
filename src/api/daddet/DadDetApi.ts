import React, {Key} from "react";
import {api} from "../Api";

/**
 * 직접광고 사용 설정 여부 변경
 */
export function updateDadDetUseConfig(kwdIds: Key[], on: boolean) {
	return api.put("/api/daddet/use-config", {
		kwdIds: kwdIds,
		on: on
	})
}

/**
 * 한 상품이 가지는 키워드 조회
 */
export function findKeywordsInItem(itemId: string | undefined, keywordNameSearch: string) {
	return api.post("/api/daddet/kwd/search", {
		itemId: itemId,
		keywordNameSearch: keywordNameSearch
	})
}

/**
 * 직접광고 활성 여부 끄기
 */
export function updateDadDetActOff(kwdIds: React.Key[]) {
	return api.put("/api/daddet/act-off", {
		kwdIds: kwdIds
	})
}