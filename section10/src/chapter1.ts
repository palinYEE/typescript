/**
 * Parial<T>
 *  > 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string; 
  tag: string[];
  content: string;
  thumbnailURL?: string;
}

type PartialYYJ<T> = {
  [U in keyof T]?: T[U];
};

const draft: Partial<Post> = {
  title: '제목 나중에 짓자',
  content: '초안...',
}

const draft2: PartialYYJ<Post> = {
  title: 'ss',
  content: 'asdads'
}

/**
 * Required<T>
 *  > 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

const withThumbnailPost: Post = {
  title: '한입 타스 후기',
  tag: ['ts'],
  content: "",
  // thumbnailURL: 'adsjkhadskjh'
}

const withThumbnailPostRequired: Required<Post> = {
  title: '한입 타스 후기',
  tag: ['ts'],
  content: "",
  thumbnailURL: 'adsjkhadskjh'
}

type RequriedYYJ<T> = {
  [key in keyof T]-?: T[key];
};
const withThumbnailPostRequired2: RequriedYYJ<Post> = {
  title: '한입 타스 후기',
  tag: ['ts'],
  content: "",
  thumbnailURL: 'adsjkhadskjh'
}

/**
 * Readonly<T>
 *  > 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

const readonlyPost: Readonly<Post> = {
  title: '보호된 게시글 입니다.',
  tag: ['aads'],
  content: 'asdads',
}

type ReadonlyYYJ<T> = {
  readonly [key in keyof T]: T[key];
}

const readonlyPost2: ReadonlyYYJ<Post> = {
  title: '보호된 게시글 입니다.',
  tag: ['aads'],
  content: 'asdads',
}
