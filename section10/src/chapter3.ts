/**
 * Exclude<T, U>
 * > 제외하다, 추방하다
 * > T 에서 U 를 제거하는 타입
 */

type A = Exclude<string | boolean , boolean>;
type ExcludeYYJ<T, U> = T extends U ? never : T;

/**
 * Extract<T, U>
 * > T 에서 U 를 추출하는 타입
 */
type B = Extract<string | boolean, boolean>;
type ExtractYYJ<T, U> = T extends U ? T : never;


/**
 * ReturnType
 * > 함수의 반환값 타입을 추출하는 타입
 */
function funcA() {
  return "hello";
}
function funcB() {
  return 10;
}
type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;

type ReturnTypeYYJ<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never