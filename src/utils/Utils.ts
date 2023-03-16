export function isInvalidRageNumber(target: number, min: number, max: number) {
	return target < min || target > max;
}

export function toWon(num: number) {
	return num.toLocaleString('ko-KR') + '원';
}