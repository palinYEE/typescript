/**
 * 첫번째 사례 --> 두 인자의 타입이 다를 경우에는 어떻게 해야 할까?
 */
function swap<T, U>(a: T, b: U) {
  return [b,a];
}

const [a, b] = swap(1, 2); 
const [c, d] = swap("3", 4)

/**
 * 두번째 사례 --> 입력값이 배열이고 출력값이 원소일 떄.
 */
// [T, ...unknown[]] --> 첫번쨰 타입을 T 고 그 다음 인덱스는 몰라~~
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}
let num = returnFirstValue([0,2,3]);
let str = returnFirstValue([1, "hello", "mynameis"]);

/**
 * 세번째 사례 --> 
 */
// T는 확장하는 타입인데 {length: number} 를 확장하는 타입으로 제한한다.
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1,2,3]);
let var2 = getLength("12345");
let var3 = getLength({length: 10});
// let var4 = getLength(10); // 이건 안됨.