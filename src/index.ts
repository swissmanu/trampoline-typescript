import {Trampoline, trampoline2} from './trampoline';

export function tailRecursionFactorial(n: number, prevResult: number = 1): number {
	if (n < 0) {
		return 0
	} else if (n === 0) {
		return 1;
	} else if (n === 1) {
		return prevResult;
	} else {
		const thisResult = n * prevResult;
		return tailRecursionFactorial(--n, thisResult);
	}
}

export const trampolineFactorial = trampoline2(function factorial(n: number, prevResult: number): Trampoline<number> {
	if (n < 0) {
		return 0;
	} else if (n === 0) {
		return 1;
	} else if (n === 1) {
		return prevResult;
	} else {
		const thisResult = n * prevResult;
		return () => factorial(--n, thisResult);
	}
});
