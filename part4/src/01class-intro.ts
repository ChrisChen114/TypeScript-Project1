// 使用class关键字来定义一个类
/*
* 类中主要包含了两部分内容：
*   属性
*   方法
* */
class Person {
    /*
    * 直接定义的属性是实例属性，需要通过对象的实例去访问
    * 用static关键字可以定义类属性（静态属性），可以直接通过类去访问
    * */
//    定义实例属性
//     name:string = 'tom';
//    只读属性，不可更改
    readonly name: string = 'tom';
    title = 'boss';

    // 在属性前使用static关键字可以定义类属性（静态属性）
    // static readonly  age:number = 18;// 也可以这样写，但是不能颠倒顺序
    static age: number = 18;


    /*
    * 定义方法
    *
    * 如果方法以static开发则方法就是类方法，可以直接通过类去调用
    * */
    sayHello(){
        console.log('你好')
    }
}

const per = new Person();
console.log(per);

// 这种方式成为类属性或静态属性
console.log(Person.age);

console.log(per.name);
// per.name = 'jack'; // 加readonly后，只读属性
console.log(per.name);
console.log(per.sayHello())

