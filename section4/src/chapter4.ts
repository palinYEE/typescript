/**
 * 사용자 정의 타입 가드
 */

type Dog = {
  name: string; 
  isBark: boolean;
};

type Cat = {
  name: string; 
  isScratch: boolean;
};

type Animal = Dog | Cat;

// 사용자 정의 타입 가드
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  // 서로소 이넘을 사용할 수 없는 상황
  // if("isBark" in animal ){
  //   // 강아지
  // } else if("isScratch" in animal) {
  //   // 고양이
  // }
  if(isDog(animal)) {
    animal
  } else if(isCat(animal)) {
    animal
  }
}