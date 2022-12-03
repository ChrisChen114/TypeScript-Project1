// 也可以直接使用字面量进行类型声明

let a: string;
let b: 10;
b = 10;
// b = 11;  // b 的值只能是10

let m: 'male' | 'female';// 意思就是m只能等于这两个值
m = 'male'
m = 'female';// 只能是这两个值中的一个

let c: boolean | string;// 可以使用 | 来连接多个类型（联合类型）
c = true;
c = 'abc';

// any 表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型
let d: any;// 显式声明为any类型
let e;// 隐式声明为any类型 // 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
d = 10;
d = true;
d = 'abc';
e = true;

// unknown: 表示未知类型的值
let f: unknown;
f = 10;
f = true;
f = 'avafe'

let s: string;
// d的类型是any，它可以赋值给任意变量
s = d;

f='hello';
// 未知类型unknown 赋值给string，报错
// unknown实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
if (typeof f === 'string'){
    s=f;
}

// 类型断言，可以用来告诉解析器变量的实际类型
/*
* 语法：
*   变量 as 类型
*   <类型>变量
* */
s =f as string;
s=<string>f;

function fn():number{
    return 123;
}
// 不写的话 函数类型为void
function fn1(){

    console.log('1');
    // return true; // 此种情况下返回值类型为 boolean
}

// 没有返回值的函数
function fn2():void{
}

// never 表示永远不会返回结果
function fn3():never{
    throw new Error('报错了！');
}
