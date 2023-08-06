/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void; // 함수 호출 시그니처
  sayHi(a: number, b: number): void // 오버로딩 시그니처. 이를 쓰려면 함수 표현식이 아닌 호출 시그니처를 사용해야 한다.
}
// 인터페이스는 | 나 & 를 사용할 수 없다.

const person: Person = {
  name: '윤영진', 
  age: 27,
  sayHi: function() {
    console.log("Hi")
  }
}
