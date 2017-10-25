export type Trampoline<T> = T | (() => Trampoline<T>);

type Fn0<T> = () => T;
type Fn1<T, A> = (a: A) => T;
type Fn2<T, A, B> = (a: A, b: B) => T;
type Fn3<T, A, B, C> = (a: A, b: B, c: C) => T;

function trampoline<T>(firstResult: Trampoline<T>) {
	let result = firstResult;
	while (result instanceof Function) {
		result = result();
	}
	return result;
}

export function trampoline0<T>(f: Fn0<Trampoline<T>>): Fn0<T> {
	return () => trampoline(f());
}

export function trampoline1<T, A>(f: Fn1<Trampoline<T>, A>): Fn1<T, A> {
	return (a: A) => trampoline(f(a));
}

export function trampoline2<T, A, B>(f: Fn2<Trampoline<T>, A, B>): Fn2<T, A, B> {
	return (a: A, b: B) => trampoline(f(a, b));
}

export function trampoline3<T, A, B, C>(f: Fn3<Trampoline<T>, A, B, C>): Fn3<T, A, B, C> {
	return (a: A, b: B, c: C) => trampoline(f(a, b, c));
}
