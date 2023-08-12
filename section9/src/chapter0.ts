/**
 * 조건부 타입
 */
// number 는 string 에 상속되어있지 않음. 따라서 number
type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;
const test: StringNumberSwitch<number> = 'ASD';
const test2: StringNumberSwitch<string> = 123;

function removeSpaces<T>(text: T): T extends string ? string : undefined
function removeSpaces(text: any){
  if(typeof text === 'string') {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}
let result = removeSpaces('hi im winterlood');