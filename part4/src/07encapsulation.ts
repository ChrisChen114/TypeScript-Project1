(function (){
    class Person {
        private name: string;
        private age: number;

        constructor(name: string, age: number) {
            // this 在实例方法中，this就表示当前的实例
            this.name = name;
            this.age = age;
        }
        setter(name: string, age: number){
            this.name = name;
            this.age = age;
        }

    }

    //    定义一个表示狗的类
    class Dog extends Person {
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
            // console.log(`${this.name}在跑`)
        }
    }

    const per = new Person('tom',18);
    console.log(per);

    /*
    * 现在属性是在对象中设置的，属性可以任意的被修改
    *   属性可以任意被修改，将会导致对象中的数据变得非常不安全
    * */
    // per.age = 38;// 就不能修改了
    console.log(per)
    per.setter('jack',99)
    console.log(per)
})();