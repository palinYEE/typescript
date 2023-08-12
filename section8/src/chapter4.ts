/**
 * 템플릿 리터럴 타입
 */

type Color = 'red' | 'black' | 'green';
type Animal = 'dog' | 'cat' | 'chicken';

type ColoredAnimal = `${Color}-${Animal}` // red-dog.. 과 같이 조합한다.