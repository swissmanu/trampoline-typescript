import {tailRecursionFactorial, trampolineFactorial} from './';

describe('tailRecursionFactorial()', () => {
	it('should calculate factorial of 10', () => {
		expect(tailRecursionFactorial(10)).toBe(3628800);
	});

	it('should should fail to calculate the factorial of 3628800', () => {
		expect(() => tailRecursionFactorial(3628800)).toThrow();
	});
});

describe('trampolineFactorial()', () => {
	it('should calculate factorial of 10', () => {
		expect(trampolineFactorial(10, 1)).toBe(3628800);
	});

	it('should calculate the factorial of 3628800', () => {
		expect(trampolineFactorial(3628800, 1)).toBe(Infinity);
	});
});
