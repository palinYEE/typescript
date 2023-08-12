/**
 * 인덱스드 엑세스 타입
 */

interface Post {
  title: string;
  content: string; 
  author: {
    id: number;
    name: string;
    age: number;
  }
}

// 특정 프로퍼티의 타입만 가져다가 쓴다. --> 인덱스를 이용함. 여기서 인덱스는 타입이다! value 가 아님. 중첩 대괄호를 통해서 n-depth 의 프로퍼티 타입을 추출할 수 있음.
function printAuthorInfo(author: Post['author']) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: '게시글 제목',
  content: '본문',
  author: {
    id: 1,
    name: '윤영진',
    age: 27,
  }
};

printAuthorInfo(post.author);

// 배열에서 사용하는 방법
type PostList = {
  title: string;
  content: string; 
  author: {
    id: number;
    name: string;
    age: number;
  }
}[];

function printAuthorInfo2(author: PostList[number]['author']) {
  console.log(`${author.name}-${author.id}`);
}
//  PostList[number]==> number 를 넣으면 배열에서 하나의 값만 가져오겠다 라는 뜻임. 여기서 number 도 타입이다.
const post2: PostList[number] = {
  title: '게시글 제목',
  content: '본문',
  author: {
    id: 1,
    name: '윤영진',
    age: 27,
  }
};

// 튜플에서 사용하는 방법
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Typ2 = Tup[2];
type TupNum = Tup[number]; // 해당 튜플에서 유니온 타입을 가져온다.