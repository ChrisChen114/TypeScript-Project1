(function (){

        class Animal{
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
        class Dog  extends Animal{
            // name = '旺财';
            // age = 3;
            // name: string;
            // age: number;
            //
            // constructor(name: string, age: number) {
            //     // this 在实例方法中，this就表示当前的实例
            //     this.name = name;
            //     this.age = age;
            // }

            bark() {
                console.log('汪汪汪')
            }

            run(){
                console.log(`${this.name}在跑`)
            }
        }

        class Cat extends Animal{
            // name = '旺财';
            // age = 3;
            // name: string;
            // age: number;
            //
            // constructor(name: string, age: number) {
            //     // this 在实例方法中，this就表示当前的实例
            //     this.name = name;
            //     this.age = age;
            // }

            bark() {
                console.log('喵喵喵喵喵喵')
            }
        }

        const dog = new Dog('tom', 18);
        const cat = new Cat('tom', 18);
        const dog1 = new Dog('jack', 8);
        console.log(dog);
        console.log(dog1);
        dog.bark();
        dog.run();
        cat.bark()

})();