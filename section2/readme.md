# Chapter 1

## 원시 타입

* 원시 타입이란: 하나의 값만 저장하는 타입
  * `number, string, boolean, null, undefine`

* 생각해 볼만한 주제
  * 우리가 변수에 값을 넣는데 잠깐 `null` 을 넣어야 할 때가 있다. 이런 경우는 어떻게 할까
  * `tsconfig.json` 에 아래 옵션을 넣는다.
    * ` "strictNullChecks": false `
    * 이 옵션은 해당 변수에 null 검사를 하지 않겠다는 옵션이다.
    * 근데 이게 좋을까...? 

## 리터럴 타입

* 리터럴 타입: 값 그 자체가 타입이 되는 타입
  ```ts
  // 리터럴 타입
  let numA: 10 = 10;
  numA = 20 // <- 오류 발생
  ```

# Chapter 2

##  배열과 튜플

* 배열의 타입: `{타입}[]`
  ```ts
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
  ```

* 튜플: 타입스크립트에서만 제공하는 타입으로 길이와 타입이 고정된 배열을 의미한다.
  ```ts
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
  ```
  * 중요: 튜플에 대해서 배열 메소드는 사용할 수 있다. 우리가 의도하지 않는 로직이 발생할 가능성이 있음.

# Chapter 3

## 객체

```ts
// object
let user: object = {
  id: 1,
  name: '윤영진'
}
```
위와 같이 정의를 하면 ts 는 아래와 같이 해석한다.

<center>
아 모르겠고 일단 이 데이터는 객체야! 그래서 안에 어떤 필드가 있는지 몰라!
</center>

그래서 user 데이터의 id, name 값에 접근하려고 하면 tsc 에서 에러를 반환한다. 그래서 객체의 속성에 대해서는 객체 리터럴 타입으로 정의해야 한다.
```ts
let user2: {
  id: number,
  name: string
} = {
  id: 1,
  name: '윤영진'
}
```

위 처럼 객체의 구조를 기준으로 타입을 정의한다. 타입스크립트의 이런 특징을 *구조적 타입 시스템(property type system)* 이라고 한다.

optional property: 있어도 되고 없어도 되는 필드

```ts
// object
let user: object = {
  id: 1,
  name: '윤영진'
}

let user2: {
  id?: number, // optional property
  name: string
} = {
  id: 1,
  name: '윤영진'
}

let dog: {
  name: string,
  color: string,
} = {
  name: "돌돌이",
  color: "brown"
}

user2 = {
  name: "홍길동"
}

let config: {
  readonly apiKey: string;  // 값을 수정할 수 없게 
} = {
  apiKey: "My API Key"
}
```

# Chapter 4

## 타입 별칭 

* `type` 을 이용하여 타입을 변수화 한다
  ```ts
  // 타입 별칭
  type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
  }

  let user: User = {
    id: 1,
    name: '윤영진',
    nickname: 'yjyoon',
    birth: '1997.02.28',
    bio: '안녕하세요',
    location: '서울'
  }

  let user2: User = {
    id: 2,
    name: '홍길동',
    nickname: 'hoho',
    birth: '1997.02.28',
    bio: '안녕하세요',
    location: '서울'
  }
  ``` 

## 인덱스 시그니처

규칙에 대해서 시그니처화 시킨다.
```ts
// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
}
let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
}

type CountryNumberCodes = {
  [key: string]: number;
}

let countryNumberCodes:CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826
}
```

# Chapter 5

## Enum

* `enum` : 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입, tsc 로 컴파일 시 사라지지 않음. 자바스크립트의 객체로 변환됨.

```ts
// Enum
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2
}

type User = {
  name: string,
  role: Role
}

const user1: User = {
  name: '윤영진',
  role: Role.ADMIN // 0 <- 관리자
}

const user2: User = {
  name: '홍길동',
  role: Role.USER // 1 <- 일반 유저
}

const user3: User = {
  name: '아무개',
  role: Role.GUEST // 2 <- 게스트
}
```

# Chapter 6

## any

* any: 특정 변수의 타입을 우리가 확실히 모를때 사용
```ts
let anyVar: any = 10;
anyVar = 'hello'
// 어느 형식 다 자유롭게 사용할 수 있음.
```
* 어찌되었든 타입을 다 통과시키기 때문에 타입스크립트의 이점을 안쓰는 것과 동일하다..

## unknown

```ts
// unknown
// 기본적으로 any 와 비슷함
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 차이점
let num: number = 10;

num = unknownVar; // unknown 타입은 다른 곳에 할당 또는 메소드를 사용할 수 없음
```
타입 정제를 통해서 사용해야지만 다른 변수에 할당 또는 메소드를 사용할 수 있다.
any 타입보다는 조금 더 안전하다.

# Chapter 7

## void

* void : 아무것도 없음을 의미하는 타입

```ts
function func1(): void {
  // return 'adas'
  console.log('hello')
}
```
* undefined vs void ==> undefined 로 함수 반환값을 한다면 오류를 반환함
  * undefined 를 사용하면 반환이 없는게 아닌 undefined 를 반환해줘야함. 
  ```ts
  function func2(): undefined {
    return undefined;
  }
  ```

## never

* never: 불가능, 모순을 의미하는 타입
```ts
function func3(): never {
  while(true){}
}
```
위 함수 같이 반환값이 있는것 자체가 모순임으로 never 가 사용.