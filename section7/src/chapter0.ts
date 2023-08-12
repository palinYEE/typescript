/**
 * 재내릭
 */

// 제네릭 함수 --> 우리가 원하는 대로 함수의 인수에 따라서 반환값의 타입을 가변적으로 정할 수 있다. 
// T: 타입 변수 - 타입을 저장함
function func<T>(value: T): T {
  return value;
}

let num = func(10);    // number 
let bool = func(true); // boolean
let str = func('asd'); // string

let arr = func<[number, number, number]>([1,2,3]); // tuple 
