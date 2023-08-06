/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기 
function func(a: number, b: numer ): number {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 * 선택적 매개변수는 무조건 필수 매개변수 앞에 있어야 한다.
 */
function introduce(name: string = "윤영진", tall?: number): void {
  console.log(`name: ${name}`);
  if(typeof tall === "number")
    console.log(`tall: ${tall + 10}`);
}
introduce("윤영진" ,175);
introduce();

// rest 파라미터
function getSum(...rest: number[]){
  let sum = 0;
  rest.forEach((it) => sum += it);
  return sum
}
getSum(1,2,3);
getSum(1,2,3,4,5);