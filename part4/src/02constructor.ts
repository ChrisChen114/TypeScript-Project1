/*
*
* */

class Dog {
    // name = '旺财';
    // age = 3;
    name: string;
    age: number;

    constructor(name: string, age: number) {
        // this 在实例方法中，this就表示当前的实例
        this.name = name;
        this.age = age;
    }


    bark() {
        console.log('汪汪汪')
    }
}

const dog = new Dog('tom', 18);
const dog1 = new Dog('jack', 8);
console.log(dog);
console.log(dog1);
dog.bark();
