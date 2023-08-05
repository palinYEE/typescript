/**
 * Unknown 타입 --> 전체 집합.
 */
function unknownExam() {
  // 모든 타입에 대해서 업캐스트가 가능하다.
  // 당연히 다운캐스팅은 안된다.
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
}

/**
 * never 타입
 * 공집합.
 */
function neverExam() {
  function neverFunc(): never {
    while(true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

}

/**
 * void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log('hi');
    // return undefined --> 이것도 문제가 되지 않음.
  }
  let voidVar: void = undefined;
}

/**
 * any 타입
 * 타입계층도를 다 무시하는 치트키 타입이다.
*/
function anyExam() {
  // 모든 타입의 슈퍼타입 또는 서브타입에 위치한다 (never 빼고)
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;

  // neverVar = anyVar; // --> 이건 안됨. 
}

