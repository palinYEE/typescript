/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 
 * 1. 반환 값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */
// 기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; // 이건 안됨.

// 기준 2. 매개변수가 호환되는가
//  2-1. 매개변수 개수가 같을 떄
//  매개변수에 대해서는 업캐스팅이 안되고 다운캐스팅으로는 된다.
//  왜냐면 서브 타입의 로직이 본문에 듫어가있기 떄문에 업캐스팅이 안되기 때문
//  반대로 다운 캐스팅이 되는 이유는 부모 타입의 프로퍼티를 서브타입이 다 가지고 있기 때문에 가능.
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 이게 안됨 
d = c; 

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal : Animal) => {
  console.log(animal.name)
};
let dogDunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
}

dogDunc = animalFunc;
// animalFunc = dogDunc; // 이건 안됨.


//  2-2. 매개변수 개수가 다를 때