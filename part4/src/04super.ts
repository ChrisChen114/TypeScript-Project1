(function () {
    class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            // this 在实例方法中，this就表示当前的实例
            this.name = name;
            this.age = age;
        }

        bark() {
            console.log('动物在叫')
        }
    }

    //    定义一个表示狗的类
    class Dog extends Animal {
        sex: string;

        constructor(name: string, age: number, sex: string) {
            // 如果在子类中写了构造函数，必须对父类的构造函数进行调用
            super(name, age);
            this.sex = sex;
        }

        bark() {
            // super.bark();
            console.log('汪汪汪')
        }

        run() {
            console.log(`${this.name}在跑`)
        }
    }

    class Cat extends Animal {

        bark() {
            super.bark();
            console.log('喵喵喵喵喵喵')
        }
    }

    const dog = new Dog('tom', 18, 'male');
    const cat = new Cat('tom', 18);
    const dog1 = new Dog('jack', 8, 'male');
    console.log(dog);
    console.log(dog1);
    dog.bark();
    dog.run();
    cat.bark()

})();