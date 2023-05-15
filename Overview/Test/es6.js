// Es6 : Phiên bản thứ 6 của Javascript
function test(x = 'Hello') {
    console.log(x)
}
test('Hi');


let test2 = (x) => {
    console.log(x)
}
// Sử dụng arow function một số trường hợp sẽ ngắn gọn, dễ hiểu và đỡ rối hơn vd :
setTimeout(() => {

}, 1000)
// Điểm yếu : như một biến, không thể sử dụng trước khi khai báo

let test_1 = () => 5;
// <=>
let test_2 = () => {
    return 5;
}
console.log(test_1());
console.log(test_2());


// destructuring
let x = [12, 23, 45];
// let y = x;
// y.push(23);
// console.log(x);
let y = [...x, 23];
// console.log(x);

let obj = {
    name: 'Hello',
    age: 19,
    score: 20
}
let obj2 = {...obj, name: 'Linh', age: 23};
// console.log(obj2)

module.exports = obj