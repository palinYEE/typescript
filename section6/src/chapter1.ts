/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: 'yjyoon',
  age: 27,
  position: 'developer',
  work() {
    console.log('working')
  }
}

class Employee {
  // field
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
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
}

const employeeB = new Employee('yjyoon', 27, 'developer');
console.log(employeeB);
employeeB.work();

const employeeC: Employee = {
  name: '',
  age: 0,
  position: '',
  work() {
      
  },
}