// 배열
let numArr: number[] = [1,2,3]
let stringArr: string[] = ['a', 'b', 'c']

// 제네릭 문법으로 사용하는 방법
let boolArr: Array<boolean> = [true, false, true]

// 배열에 들어가는 요소들의 타입들이 다양할 경우
let multiArr:(string | number)[] = [1, "hello"]

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [123,456],
  [1,2,3]
]

// 튜플
// 길이와 타입이 고정된 배열
let tup1:[number, number] = [1,2];
let tup2: [number, string, boolean] = [1, '2', true]

// 예시
const users: [string, number][] = [
  ['윤영진', 1],
  ['이무개', 2],
  ['랄랄라', 3]
]