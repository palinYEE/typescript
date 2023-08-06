/**
 * 선언 합침
 * 동일한 이름으로 여러번 선언하면 이것들이 모두 합쳐진다. 
 */

interface Person {
  name: string;
}

interface Person {
  name: string;     // 재정의 할 때 무조건 동일한 타입으로 해야 한다.
  age: number;
}

const person: Person = {
  name: '',
  age: 27,
}

/**
 * 모듈 보강
 */

interface Lib {
  a: number; 
  b: number;
}

// 모듈 보강
interface Lib {
  c: string;
}

const lib: Lib ={
  a: 1,
  b: 2,
  c: "hello"
};

