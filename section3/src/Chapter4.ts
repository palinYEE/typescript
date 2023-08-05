/**
 * 1. 합집합 - Union 타입.
 */
let a: string | number = 'hello';
a = 1;
// a = true; // --> 이건 안됨.
let arr: (number | string | boolean)[] = [1, 'hello', true];

type Dog = {
  name : string; 
  color: string;
}

type Person = {
  name: string; 
  language: string; 
}

type Union1 = Dog | Person;

let union1: Union1 = {
  name: '',
  color: ''
}

let union2: Union1 = {
  name:'',
  language: ''
}

let union3: Union1 = {
  name: '',
  color: '',
  language: '',
}

// let union4: Union1 = {
//   name: ''
// } // --> 이건 안됨.


/**
 * 2. 교집합 타입
 */

let variable: number & string; // never 임 ㅋㅋ
// 기본 타입에서 교집합 타입을 사용하면 거의다 never 임.
type Intersection = Dog & Person;

let intersection: Intersection = {
  name: 'asd',
  color: '',
  language: ''
}