"use strict";
let a1 = 10;
console.log(a1);
function fn(a, b) {
    return a + b;
}
function fn2() {
    // 现在是不明确的
    alert(this); //'this' implicitly has type 'any' because it does not have a type annotation.
}
//  'box1' is possibly 'null'.
let box1 = document.getElementById('box1');
if (box1 !== null) {
    box1.addEventListener('click', function () {
        alert('hello');
    });
}
// 或者用js里的问号运算符
box1 === null || box1 === void 0 ? void 0 : box1.addEventListener('click', function () {
});
//# sourceMappingURL=app.js.map