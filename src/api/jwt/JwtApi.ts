import {api} from "../Api";

/**
 * 로그인 성공시 jwt 토큰 반환
 */
export function jwtAuthenticate(username: string, password: string) {
	return api.post("/api/jwt", {
		username: username,
		password: password
	});
}

/**
 * 유저가 가진 모든 권한 조회
 */
export function findAuthorities() {
	return api.get("/api/jwt/authority");
}