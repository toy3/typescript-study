//////// [ 타입 명시 ]
var studentID = 12345;
// studentID = "tet";
var studentName = "Jeong yujin";
var age = 10;
var gender = "female";
var subject = "javascript";
var courseCompleted = false;
// Enum : 연관된 아이템들을 함께 묶어서 표현할 수 있는 수단.
// 숫자형 Enum
// enum GenderType {
//   Male,
//   Female,
//   genderNeutral,
// }
// 문자형 Enum
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["genderNeutral"] = "genderNeutral";
})(GenderType || (GenderType = {}));
var student1 = {
    studentID: 8845,
    studentName: "sandy",
    gender: GenderType.Female,
    subject: "Mongo DB",
    courseCompleted: false
};
// 함수가 아무것도 반환하지 않을 경우 : void
function test1(studentID) { }
// 반환되는 객체의 구조를 타입으로 지정
function test2(studentID) {
    return null;
}
// getStudentDetails 함수의 반환값은 반드시 Student 인터페이스에 정의된 프로퍼티들을 가져야 한다.
// 인터페이스에서 물음표가 붙은 프로퍼티(선택적 프로퍼티)는 없어도 됨.
function getStudentDetails(studentID) {
    return {
        studentID: 1234,
        studentName: "Mark",
        gender: GenderType.Male,
        subject: "Node JS",
        courseCompleted: true
    };
}
// 인터페이스의 재활용
function saveStudentDetails(student) {
    // student.studentID = 1111; // 읽기전용속성 오류
}
saveStudentDetails(student1);
// 리터럴 타입 테스트
function testStudentDetails() {
    return {
        gender: "female"
    };
}
