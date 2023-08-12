/**
 * infer
 */
type Func = () => string;
type Func2 = () => number;
type ReturnType<T> = T extends () => string ? string : never;
// T extends () => infer R 조건식이 참이 되게 하는 R 을 셋팅한다.
type inferType<T> = T extends () => infer R ? R : never;

type a = inferType<Func>
type b = inferType<Func2>
// 추론할 수 없는 타입의 경우에는 never 가 된다.
type c = inferType<number>

/**
 * 예제
 */
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>
type PromiseB = PromiseUnpack<Promise<string>>
