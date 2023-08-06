/**
 * 인터페이스의 확장
 */

type Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  // name: 'hello',    // 상속받은 프로퍼티에 대해서 재정의 가능. 단 원본 타입의 서브 타입이어야 한다.
  isBark: boolean;
}

const dog: Dog = {
  name: 'hello', 
  age: 21,
  isBark: false,
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean
}

// 다중 확장이 가능
interface DogCat extends Dog, Cat {
}