# Chapter 1 - 타입은 집합이다.

* 타입은 값들을 포함하는 집합이다. 
* 타입 호환성: 어떤 타입을 다른 타입으로 취급해도 괜찮은지 판단하는 것
  * number literal type $\in$ number type
  * 정사각형을 직사각형으로 말해도 되는데, 직사각형을 정사각형으로 말할 수는 없다. 
  * code 예시
    ```ts
    let num1: number = 10;
    let num2: 10 = 10;
    num1 = num2;
    num2 = num1;  // 이건 안됨.
    ```
* 업 캐스트: 서브타입을 슈퍼타입으로 취급
  * 모든 상황에 허용
* 다운 캐스트: 슈퍼타입을 서브타입으로 취급 
  * 거의 모든 상황에 허용되지 않음.


# Chapter 2 - 타입 계층도와 함꼐 기본타입 살펴보기

[소스코드](./src/chapter2.ts)

# Chapter 3 - 객체 타입간의 호환성

[소스코드](./src/chapter3.ts)

# Chapter 4 - 대수 타입

* 대수 타입: 여러개의 타입을 합성해서 새롭게 단들어낸 타입
  * 합집합 타입과 교집합 타입이 존재한다.

* 합집합 (Union)
  ```ts
  let a: string | number = 'hello';
  a = 1;
  // a = true; // --> 이건 안됨.
  ```
  * 객체에서 사용하는 방식은 다음과 같다 
    ```ts
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
    ```
* 교집합 (intersection)
  ```ts
  let variable: number & string; // never 임 ㅋㅋ
  // 기본 타입에서 교집합 타입을 사용하면 거의다 never 임.
  type Intersection = Dog & Person;

  let intersection: Intersection = {
    name: 'asd',
    color: '',
    language: ''
  }
  ```

# Chapter 5 - 타입 추론

타입스크립트는 자동으로 타입을 추론한다. 
* 변수 추론 기준: 초기값
* 함수 return 은 return 되는 값 기준으로 추론

암묵적인 any 타입을 선언하면 타입이 진화한다. 
```ts
// 당황스러운 상황의 타입 추론
// any 타입의 진화. 
let d; // 암묵적인 any 타입. 이 변수에 들어가는 값에 따라서 타입이 진화한다.
d = 1;
// d.toUpperCase() // --> any 인데 number 로 인식하네?

d = "hello"
d.toLowerCase() // 이건 되네?
```

# Chapter 6 - 타입 단언

[소스코드](./src/Chapter6.ts)

# Chapter 7 - 타입 좁히기

[소스코드](./src/Chapter7.ts)

# Chapter 8 - 서로소 유니온 타입

[소스코드](./src/Chapter8.ts)