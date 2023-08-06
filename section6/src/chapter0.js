/**
 * 클래스
 */

let studentA = {
  name: '윤영진',
  grade: 'A+',
  age: 27,
  study() {
    console.log('열심히 공부하는 중입니다.');
  },
  introduce() {
    console.log('안녕하세요!');
  }
}

let studentB = {
  name: '홍길동',
  grade: 'A+',
  age: 27,
  study() {
    console.log('열심히 공부하는 중입니다.');
  },
  introduce() {
    console.log('안녕하세요!');
  }
}

// 클래스 선언은 파스칼 표기법을 사용한다.
class Student {
  // 필드 
  name;
  grade;
  age;

  // 셍성자
  // 클래스를 호출하면 실제로 객체를 생성하는 메소드
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log('열심히 공부하는 중입니다.');
  }

  introduce() {
    console.log('안녕하세요!' + ` ${this.name} 입니다.`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
let studentUsedClassA = new Student('윤영진', 'a+', 27);
console.log(studentUsedClassA)
studentUsedClassA.study();
studentUsedClassA.introduce();

class StudentDeveloper extends Student {
  favoriteSkill;
  constructor(name, grade, age ,favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill} 으로 프로그래밍함.`)
  }
}
const studentDeveloper = new StudentDeveloper("윤영진", "b+", 27, "TS");
console.log(studentDeveloper);
studentDeveloper.study();
studentDeveloper.introduce();
studentDeveloper.programming();