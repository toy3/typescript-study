// Typescript 함수의 타입 명시
// - 함수의 반환(return) 타입
// - 함수의 매개변수(parameter) 타입
// void 타입 : 아무것도 반환하지 않는 함수의 반환값으로만 사용될 수 있는 타입.
// 타입스크립트는 함수에 정의된 모든 매개변수가 함수에 필요하다고 가정한다.
// 선택적 매개변수 : 매개변수 뒤에 ? 를 붙여서 선택적 매개변수로 만들어주면 생략되어도 괜찮다.
// ★★★주의할 점 : 선택적 매개변수 오른쪽 매개변수들은 전부 선택적 매개변수가 된다! 따라서 선택적 매개변수들은 필수매개변수 뒤(오른쪽)에 위치해야 한다!
// 생략된 매개변수는 return시 undefined 값으로 할당된다.
// 기본 매개변수(default parameter) : 파라미터 뒤에 = "할당할 값" 으로 넣어준다.
// 기본 매개변수를 사용할 때는 선택적 매개변수의 물음표(?)를 빼야 함.
// 해당 매개변수의 타입도 지워줌(타입추론으로 타입이 정해지기 때문에 코드 간결성을 위해 뺀다).
function sendGreeting(message, userName) {
    if (userName === void 0) { userName = "there"; }
    console.log("".concat(message, ", ").concat(userName));
}
// 배열타입 반환인 경우
function sendGreeting2(message, userName) {
    return ["Hello", "Mark"];
}
sendGreeting("Hello");
// 화살표 함수
var sendGreeting = function (message, userName) {
    if (userName === void 0) { userName = "there"; }
    return console.log("".concat(message, ", ").concat(userName));
};
