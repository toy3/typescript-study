//////// [ 타입 명시 ]

let studentID: number = 12345;
// studentID = "tet";
let studentName: string = "Jeong yujin";
let age: number = 10;
let gender: string = "female";
let subject: string = "javascript";
let courseCompleted: boolean = false;

// Enum : 연관된 아이템들을 함께 묶어서 표현할 수 있는 수단.
// 숫자형 Enum
// enum GenderType {
//   Male,
//   Female,
//   genderNeutral,
// }

// 문자형 Enum
enum GenderType {
  Male = "male",
  Female = "female",
  genderNeutral = "genderNeutral",
}

let student1 = {
  studentID: 8845,
  studentName: "sandy",
  gender: GenderType.Female,
  subject: "Mongo DB",
  courseCompleted: false,
};

// 함수가 아무것도 반환하지 않을 경우 : void
function test1(studentID: number): void {}

// 반환되는 객체의 구조를 타입으로 지정
function test2(studentID: number): {
  studentID: number;
  studentName: string;
  age: number;
  gender: string;
  subject: string;
  courseCompleted: boolean;
  createDate: Date;
} {
  return null;
}

// 인터페이스의 이름은 대문자로 시작해야 함.
// 완성된 인터페이스는 타입으로 사용가능!
interface Student {
  readonly studentID: number; // 읽기 전용 속성
  studentName: string;
  age?: number;
  gender: GenderType;
  subject: string;
  courseCompleted: boolean;
  // 메서드 (아래 두개는 같다)
  // addComment(comment: string): string;
  addComment?: (comment: string) => string;
}

// 리터럴 타입
interface Student2 {
  gender: "male" | "female" | "genderNeutral";
}

// getStudentDetails 함수의 반환값은 반드시 Student 인터페이스에 정의된 프로퍼티들을 가져야 한다.
// 인터페이스에서 물음표가 붙은 프로퍼티(선택적 프로퍼티)는 없어도 됨.
function getStudentDetails(studentID: number): Student {
  return {
    studentID: 1234,
    studentName: "Mark",
    gender: GenderType.Male,
    subject: "Node JS",
    courseCompleted: true,
  };
}

// 인터페이스의 재활용
function saveStudentDetails(student: Student): void {
  // student.studentID = 1111; // 읽기전용속성 오류
}
saveStudentDetails(student1);

// 리터럴 타입 테스트
function testStudentDetails(): Student2 {
  return {
    gender: "female",
  };
}
