// 声明一个变量a，同时指定它的类型为number
let a: number; // a的类型设置为了number，在以后的使用过程中a的值只能是数字
a = 10;
a = 33;
// a='hello'; // 此行代码会报错，因为变量a的类型是number，不能赋值字符串
console.log('a=', a);

let b: string;
b = 'hello';

// 声明完变量直接进行赋值
let c: boolean = true;
// 如果变量的声明和赋值是同时进行，TS可以自动对变量进行类型检测
let d = false;
d = true;
// d=123 // 编译器会发现错误

// JS中的函数是不考虑参数的类型和个数的
function sum(a, b) {
    return a + b;
}

// 增加返回值的类型，形参的数据类型
function sum1(a: number, b: number) :number{
    return a + b;
}

// console.log(sum(123,456));
console.log(sum(123, '456'));// 输出 123456
console.log(sum1(123, 456));// 输出 579
