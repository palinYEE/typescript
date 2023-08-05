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