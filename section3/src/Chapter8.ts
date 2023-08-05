/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입으로만 만든 유니온 타입을 말함.
 */

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: number;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다. 
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {

  switch (user.tag) {
    case 'ADMIN':
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴하였습니다.`);
      break;
    case 'MEMBER':
      console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
      break;
    case 'GUEST':
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      break;
    default:
      break;
  }


  // if(user.tag === 'ADMIN') {
  //   // admin 타입
  //   console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴하였습니다.`);
  // } else if(user.tag === 'MEMBER') {
  //   // member 타입
  //   console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
  // } else {
  //   // guest 타입
  //   console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  // }
}


/**
 * 복습겸 한가지 더 사례
 */

// 비동기 작업의 결과를 처리하는 객체
type AsyncTask = {
  state: 'LOADING' | 'FAILED' | 'SUCCESS';
  error?: {
    message: string;
  };
  response?: {
    data: string;
  }
}

type SuccessTask = {
  state: 'SUCCESS';
  response: {
    data: string;
  }
};

type FailedTask = {
  state: 'FAILED';
  error: {
    message: string;
  }
};

type LoadingTask = {
  state: 'LOADING'
}

// 로딩중 -> 콘솔에 로딩중 출력
// 실패 -> 실패: 에러메시지 출력
// 성공 -> 성공: 데이터를 출력
function processResult(task: SuccessTask | FailedTask | LoadingTask) {
  switch(task.state) {
    case 'SUCCESS':
      console.log(`성공: ${task.response.data}`);
      break;
    case 'FAILED':
      console.log(`실패: ${task.error.message}`);
      break;
    case 'LOADING':
      console.log(`로딩중`);
      break;
    default:
      break;
  }
}

const loading: LoadingTask = {
  state: 'LOADING',
};
const failed: FailedTask = {
  state: "FAILED",
  error: {
    message: '오류 발생 원인 블라블라',
  }
}
const success: SuccessTask = {
  state: 'SUCCESS',
  response: {
    data: '데이터 ~~~'
  }
}