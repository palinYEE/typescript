/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
}

// value => number: toFixed
// value => string: toUpperCase
// value => Date: getTime
// value => Person: name은 age살입니다.
function func(value: number | string | Date | Person | null) {
  if(typeof value === "number") {
    console.log(value.toFixed()); // number 로 추론됨
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // string 으로 추론됨
  } else if(value instanceof Date) {
    console.log(value.getTime())
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`)
  }
}