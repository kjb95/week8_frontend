export function isInvalidRageNumber(target: number, min: number, max: number) {
	return target < min || target > max;
}