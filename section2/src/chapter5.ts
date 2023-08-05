// Enum
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2
}

enum Language {
  KOREAN = 'ko',
  ENGLISH = "en"
}

type User = {
  name: string,
  role: Role
  language: Language
}

const user1: User = {
  name: '윤영진',
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.ENGLISH,
}

const user2: User = {
  name: '홍길동',
  role: Role.USER, // 1 <- 일반 유저
  language: Language.KOREAN
}

const user3: User = {
  name: '아무개',
  role: Role.GUEST, // 2 <- 게스트
  language: Language.ENGLISH
}