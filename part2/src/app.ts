let a1 = 10;
console.log(a1)

function fn(a:number, b:number) {
    return a + b;
}

function fn2(this:Window){
    // 现在是不明确的
    alert(this); //'this' implicitly has type 'any' because it does not have a type annotation.

}

//  'box1' is possibly 'null'.
let box1 = document.getElementById('box1')
// 解决1：加if判断
if (box1 !== null){
    box1.addEventListener('click',function (){
        alert('hello');
    })
}
// 解决2：或者用js里的问号?运算符，看box1有没有
box1?.addEventListener('click',function (){

})

