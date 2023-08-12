/**
 * 프로미스
 */
// 타입을 지정하지 않으면 성공했을 때의 return 타입이 unknown 이다.
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20)
    reject('error');
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); // 20
})
// 실패 했을때에 대한 타입은 정해줄 수 없다.
promise.catch((err) => {
  if(typeof err === 'string') {
    console.log(err);
  }
})

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */
interface Post {
  id: number;
  title: string;
  content: string;
}
function fetchPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1, 
        title: 'asd',
        content: 'adsdas',
      })
    }, 3000);
  })
}
