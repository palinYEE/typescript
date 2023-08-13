/**
 * Pick<T, K>
 *  > 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 그런 타입.
 */

interface Post {
  title: string; 
  tag: string[];
  content: string;
  thumbnailURL?: string;
}

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠"
}

type PickYYJ<T, K extends keyof T> = {
  [P in K]: T[P]
};

const legacyPost2: PickYYJ<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠"
}

/**
 * Omit<T, K>
 *  > 객체 타입으로부터 특정 프로퍼티를 제거하는 타입.
 */

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tag: [],
  thumbnailURL: "asdads",
}

type OmitYYJ<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}

/**
 * Record<T, K>
 *  > 동일한 패턴을 갖는 프로퍼티를 만들기 쉽게 해준다.
 */

type ThumbnailLegacy = {
  large: {
    url: string;
  },
  medium: {
    url: string;
  },
  small: {
    url: string
  }
}

type Thumbnail = Record<"large" | "medium" | "small" | "watch", {url: string} >;

type  RecordYYJ<K extends keyof any, V> = {
  [key in K]: V
}

type Thumbnail2 = RecordYYJ<"large" | "medium" | "small" | "watch", {url: string} >;