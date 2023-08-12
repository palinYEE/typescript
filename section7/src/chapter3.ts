/**
 * 제네릭 인터페이스
 */
interface KeyPair<K, V> {
  key: K,
  value: V,
}
// 타입으로 사용할 떄 타입 변수를 반드시 기입해주어야 한다.
let keyPair: KeyPair<string, number> = {
  key: 'test',
  value: 1
}
let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ['asd']
}

/**
 * 인덱스 시그니처
 */
interface NumberMap {
  [key: string]: number; 
}
let numberMap1: NumberMap = {
  key: -123,
  key2: 123,
}

interface Map<V> {
  [key: string]: V;
}

let stringMap:Map<string> = {
  test: 'asfasf',
}
let booleanMap:Map<boolean> = {
  test: true,
}

/**
 * 제네릭 타입 별칭
 */
type Map2<V> = {
  [key: string]: V;
}
let stringMap2: Map2<string> = {
  key: "hello",
}

/**
 * 제네릭 인터페이스 활용 예시
 *  > 유저 관리 프로그램
 *  > 유저 구분 : 학생 유저 / 개발자 유저
 */
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}
interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // if(user.profile.type != 'student') {
  //   console.log('잘못 오셨습니다.')
  //   return
  // }
  console.log(user.profile.school + "로 등교한다.")
}

const developerUser: User<Developer> = {
  name: '윤영진',
  profile: {
    type: 'developer',
    skill: 'TS',
  }
}
const studentUser: User<Student> = {
  name: '홍길동',
  profile: {
    type: 'student',
    school: '국민대학교'
  }
}

