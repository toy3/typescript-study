/*

객체지향 프로그래밍에서 class와 object는 동전의 양면같은 관계.
객체는 클래스를 통해서 만들어질 수 있고, 클래스는 객체가 어떤 모습을 가질지 정의하는 객체의 뼈대, 설계도, 생산틀 역할이다.
클래스 속에서 정의된 함수들은(메서드) 클래스 안에서 정의된 변수(프로퍼티)에 this.로 접근 가능하기 때문에 상대적으로 적은 매개변수를 가지는 장점이 있다.
모든 클래스는 Constructor 메서드를 가진다.
Constructor(생성자)는 클래스로부터 객체를 생성할 때 호출되며 객체의 초기화를 담당한다.
클래스를 통해서 객체를 생성할 때, Constructor(생성자)에 정의된 Parameter(매개변수들)의 값이, Arguments로 전달되어야 함.

접근제한자(Access Modifiers)
: 클래스 속 멤버 변수(프로퍼티)와 메서드에 적용될 수 있는 키워드이다.
외부에서 함부로 객체 안의 변수를 접근해서 바꾸는 것을 막고 싶을 때 사용.
클래스 외부로부터의 접근을 통제.

타입스크립트의 3가지 접근제한자
Public
: 클래스의 외부에서 접근 가능함. 타입스크립트에서 기본적으로 각 클래스의 멤버들은 public 이다.

Private
: 클래스 내에서만 접근가능. 클래스 외부에서 접근 불가능(비공개 멤버). _(underscroe)를 변수앞에 붙여준다.

Protected
: 클래스 내부, 그리고 상속받은 자식 클래스에서 접근가능.

*/
// 객체가 생성될 때, Constructor의 매개변수로 전달된 값은, 객체의 프로퍼티 값으로 자동으로 그 값이 초기화되고 할당됨.
var Employee = /** @class */ (function () {
    function Employee(_fullName, _age, _jobTitle, _hourlyRate, _workingHoursPerWeek) {
        var _this = this;
        this._fullName = _fullName;
        this._age = _age;
        this._jobTitle = _jobTitle;
        this._hourlyRate = _hourlyRate;
        this._workingHoursPerWeek = _workingHoursPerWeek;
        // 메서드
        this.printEmployeeDetails = function () {
            console.log("".concat(_this._fullName, " \uC758 \uC9C1\uC5C5\uC740 ").concat(_this._jobTitle, " \uC774\uACE0, \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 ").concat(_this._hourlyRate * _this._workingHoursPerWeek, " \uB2EC\uB7EC \uC774\uB2E4."));
        };
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        // getter와 setter
        // ★★★ tsc -w -target es5 app05.ts 로 컴파일해야 에러 안뜸.
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee("민수", 28, "주니어 개발자", 40, 35);
employee1.printEmployeeDetails();
// fullName이 private 이라 에러남.
// employee1.fullName = "헨리";
// console.log(employee1.fullName); // 접근 불가능
// Getter & Setter
// Get과 Set 키워드를 사용하여 Getter와 Setter를 선언할 수 있다.
// 아래의 fullName은 getter의 fullName이라 접근 가능.
console.log(employee1.fullName);
employee1.fullName = "헨리";
employee1.printEmployeeDetails();
