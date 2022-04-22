// 유니언 타입
var price = 5;
price = "free";
var orderID;
var findOrderID = function (customer, productID) {
    return orderID;
};
// 타입가드 : 유니언 타입을 사용할 때 typeof 를 사용하여 코드 검증을 수행하는 것.
// Typeof 연산자와 조건문 사용
// typof operator는 변수의 데이터 타입을 반환하는 연산자
var itemPrice;
var setItemPrice = function (price) {
    if (typeof price === "string") {
        itemPrice = 0;
    }
    else {
        itemPrice = price;
    }
};
setItemPrice(50);
