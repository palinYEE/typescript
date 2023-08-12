/**
 * 맵드 타입
 *  > interface 에서는 사용할 수 없다. 
 */

interface User {
  id: number;
  name: string; 
  age: number;
}

type PartialUser = {
  [key in keyof User]?: User[key]
}
// 위와 같이 in 을 사용하는게 맵드 타입이다.

type booleanUser = {
  [key in keyof User]: boolean
}

type ReadonlyUser = {
  readonly [key in keyof User]: User[key]
}

// 한의 유저 정보를 불러오는 기능
function fetchUser(): User {
  return {
    id: 1, 
    name: '윤영진', 
    age: 27
  }
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // 수정하는 기능
}

updateUser({
  // id: 1, 
  // name: "윤영진", 
  age: 25,
});