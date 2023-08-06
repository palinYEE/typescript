/**
 * 인터페이스와 클래스
 */

// 인터페이스는 무조건 public 필드만 정의한다.
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(public name: string , public moveSpeed: number ){
    this.name = name;
    this.moveSpeed = moveSpeed;
  }
  move() {
    console.log(`${this.name}님이 ${this.moveSpeed}속도로 이동하였습니다.`);
  }
}

const yjyoon = new Character('yjyoon', 10);
console.log(yjyoon);
yjyoon.move()