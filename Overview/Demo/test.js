//arrow function là biến thể dễ hơn của lamba function

let a = function (a) {
    return a*a;
}

let b = (a) => a*a;

//Spread ... là cách phân rã đối tượng/mảng ở bên phải của phép gán, ... đứng trước biến mảng/đối tượng
let arr = [1, 2, 3, 5, 6, 7, 8];
let arr2 = [1 ,2, ...arr, ...arr, ...arr];
console.log("arr2:", arr2)
let [x, y, z] = [...arr];
console.log(x, y ,z) //1, 2, 3
let obj1 = {x: 100, b: 2};
let obj2 = {x: 1, y: 2};
let obj3 = {...obj1, ...obj2};
console.log(obj3)

//Rest operator ... là cách gộp lại các phần tử/tham số

function sum(x, ...arr) {
    console.log(arr)
}

// sum(1,2,3,4,4,5,6,6)
let [x1, y2, ...rest] = [...arr];
console.log(x1, y2, rest)

//destructuring là cách phá cấu trúc đúng thuộc tính của đối tượng
let car = {name: 'Linh xinh', age: 1};
let {name, age} = car;
console.log("name:",name, "age:", age);