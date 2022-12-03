// object 表示一个js对象
let a: object;
a = {};
a = function () {
};

// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值,...}
// 在属性名后边加上？,表示属性是可选的
let b: { name: string, age?: number }; //加 ？ 表示可选，有也行，没有也行
// b={};// 这种就报错了
b = {name: '孙悟空'}; // 不写age，不会报错的

// propName是随便起的名字，
// [propName: string] - 表示属性名为string；: any - 表示任意属性值
let c: { name: string, [propName: string]: any };
c = {name: '猪八戒', a: 1, b: 2, age: 18}

// 表示d是一个函数，返回值是number类型
/*
* 设置函数结构的类型声明：
*   语法：(形参:类型,形参:类型,...) => 返回值
* */
let d: (a: number, b: number) => number;
// d = function (n1, n2,n3) {  // 报错，形参多了
//     return n1 + n2;
// }


/*
* 数组的类型声明
*   类型[]
*   Array<类型>
* */
// 数组
// string[] 表示字符串数组
let ee: string[];
ee = ['3', 'e', 'ff'];

// number[]表示数值类型数组
let ff: number[];

let gg: Array<any>;// 尽量不这么写
let ggg: Array<number>;
gg = [1, 2, 3];


/*
* 元组，元组就是固定长度的数组
* */
let h: [string, string, number];
h = ['hello', '123', 90];//只能是3个

/*
* enum 枚举
* */
enum Gender {
    Male = 0,
    Female = 1
}

let i: { name: string, gender: string };
let ii: { name: string, gender: 0 | 1 };//可阅读性较差
let iii: { name: string, gender: Gender };//通过枚举,可阅读性较好
i = {
    name: '孙悟空',
    gender: 'male',// 也可以用数字 number:0 或者1
}
ii = {
    name: 'tom',
    gender: Gender.Male
}
console.log(i.gender === 'male')

// & 表示同时
let j: string & number;
let jj: { name: string } & { age: number }; // 可以这样用 用对象

// 类型的别名
type myType = string;
type myType1 = 1 | 2 | 3 | 4 | 5;
let k: myType1;// 看出优势了
// let ll: 1 | 2 | 3 | 4 | 5;
let l: 1 | 2 | 3 | 4 | 5;//这种写没什么意义,可以写成myType这种
let m:myType;