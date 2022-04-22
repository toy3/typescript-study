// 유니언 타입
let price: number | string = 5;
price = "free";

// Type Aliases : 같은 유니언 타입을 여러군데 쓰고 싶을 때
type StrOrNum = number | string;

let orderID: StrOrNum;

const findOrderID = (
  customer: { costomerID: StrOrNum; name: string },
  productID: StrOrNum
): StrOrNum => {
  return orderID;
};

// 타입가드 : 유니언 타입을 사용할 때 typeof 를 사용하여 코드 검증을 수행하는 것.
// Typeof 연산자와 조건문 사용
// typof operator는 변수의 데이터 타입을 반환하는 연산자
let itemPrice: number;
const setItemPrice = (price: StrOrNum): void => {
  if (typeof price === "string") {
    itemPrice = 0;
  } else {
    itemPrice = price;
  }
};

setItemPrice(50);
