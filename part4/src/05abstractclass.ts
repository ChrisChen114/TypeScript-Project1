(function () {
    /*
    * 以abstract开头的类是抽象类
    *   抽象类和其他类区别不大，只是不能用来创建对象
    *   抽象类就是专门用来被继承的类
    *
    *   抽象类中可以添加抽象方法
    * */
    abstract class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            // this 在实例方法中，this就表示当前的实例
            this.name = name;
            this.age = age;
        }

        // 定义一个抽象方法
        // 抽象方法使用abstract开头，没有方法体
        // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract bark():void;
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
            // super.bark();// 就不能调用了
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