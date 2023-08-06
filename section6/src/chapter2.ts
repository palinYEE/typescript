/**
 * 접근 제어자
 * accewss modifier
 * -> public, private, protected
 */


class Employee {
  // field
  // private name: string; // 클래스 내에서만 사용할 수 있음. 파생 클래스 에서도 사용 못함
  // protected age: number; // 외부에서는 접근할 수는 없지만. 파생 클래스에서는 사용 가능하다.
  // public position: string;

  // 생성자
  // 생성자에 접근 제어자를 붙이면 필드를 자동으로 생성해주고, 초기값도 자동으로 만들어 준다.
  constructor(private name: string, protected age: number, public position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // method
  work() {
    console.log('working');
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(name: string, age:number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  func() {
    // this.name
    this.age;
  }
}

const employee = new Employee('윤영진', 27, 'developer');
console.log(employee)