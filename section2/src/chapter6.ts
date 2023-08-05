let anyVar: any = 10;
anyVar = 'hello'

// unknown
// 기본적으로 any 와 비슷함
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 차이점
let num: number = 10;

// num = unknownVar; // unknown 타입은 다른 곳에 할당 또는 메소드를 사용할 수 없음