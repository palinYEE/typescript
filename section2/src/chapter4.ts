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