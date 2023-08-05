/**
 * 타입 추론
 */

// 당황스러운 상황의 타입 추론
// any 타입의 진화. 
let d; // 암묵적인 any 타입. 이 변수에 들어가는 값에 따라서 타입이 진화한다.
d = 1;
// d.toUpperCase() // --> any 인데 number 로 인식하네?

d = "hello"
d.toLowerCase() // 이건 되네?
