/**
 * 객체 타입간의 호환성
 *  -> 어떤 객체 타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
}

type Dog = {
  name: string;
  color: string;
  breed: string;
}

let animal: Animal = {
  name: '기린',
  color: 'yellow',
}

let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
}

animal = dog;
// dog = animal; // -> 이건 안됨

type Book = {
  name: string;
  price: number; 
}

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
}

let book: Book; // 슈퍼 타입
let programmingBook: ProgrammingBook = {
  name: 'yjyoon',
  price: 1,
  skill: 'typescript'
} // 서브 타입
