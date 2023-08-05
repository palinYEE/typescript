// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): void {
  // return 'adas'
  console.log('hello')
}


// undefined vs void
// 

function func2(): undefined {
  return undefined;
}

// never
function func3(): never {
  while(true){}
}