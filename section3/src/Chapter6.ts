/**
 * 타입 단언 (type assertion)
 */
type Person = {
  name: string;
  age: number;
}
let person = {} as Person;
person.name = '윤영진';
person.age = 27;

type Dog = {
  name: string;
  color: string;
}
let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도"
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B 
 * A 가 B의 슈퍼타입이거나
 * A 가 B의 서브타입이어야 함.
 */
let num1 = 10 as never;
let num3 = 10 as unknown;
// let num2 = 10 as string // 이건 안됨
let num4 = 10 as unknown as string; // --> 이건 됨

/**
 * const 단언
 * let 으로 선언할 떄 타입을 const 로 선언한 것과 동일하게 한다.
 */
let num5 = 10 as const;

let cat = {
  name: '야옹이',
  color: 'yellow'
} as const // 모든 프로퍼티를 readonly 로 변경


/**
 * Non Null 선언
 */
type Post = {
  title: string;
  author?: string;
};
let post: Post = {
  title: '게시글1',
  author: '윤영진',
};
const len: number = post.author!.length; // optioanl chaining 