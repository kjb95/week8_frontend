import {api} from "../Api";

/**
 * 모든 키워드 조회(수동 검수 키워드 1)
 */
export function findAllKwd(kwdName: string) {
	return api.get("/api/kwd?kwdName=" + kwdName);
}
