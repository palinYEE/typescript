/**
 * 분산적인 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string: number;
let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;
// 유니온 타입을 쓰면 우리가 알고 있는 로직으로 동작하지 않는다. ==> 분산적인 조건부 타입으로 동작이 바뀜
// number | string 이 한번에 T 로 할당 되는 것이 아니라 number, string 두번 T 에 전달 함으로 이에 대한 결과를 유니온으로 하여 해당 변수의 타입으로 할당한다.
let c: StringNumberSwitch<number | string>;
// == StringNumberSwitch<number> | StringNumberSwitch<string>;

let d: StringNumberSwitch<boolean | string | number>
// == StringNumberSwitch<boolean> | StringNumberSwitch<string> | StringNumberSwitch<number>
// == number | string | number == string | number

/**
 * 실용적인 예제
 */
type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean , string>;

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean , string>;
