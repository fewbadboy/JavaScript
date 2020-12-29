/**
 * 继承
 * 1. 原型链
 * 2.借用构造函数
 * 3.组合（常用模式）
 * 4.原型式
 * 5.寄生式
 * 6.寄生组合式
 */

 // 1.原型链: 包含引用类型值得原型属性被所以实例共享;在创建子类型的实例是无法向超类型的构造函数传递参数
 function Super() {
    this.color = ['red'];
 }

 Super.prototype.getColor = function() {
    return this.color;
 };

 function Suber() {
    this.property = false;
 }

 Suber.prototype = new Super();

 Suber.prototype.getProperty = function() {
    return this.property;
 };

 var instance1 = new Suber();
 instance1.getColor(); // ['red']
 instance1.color.push('blue');

 var instance2 = new Suber();
 instance2.getColor(); // ['red'， 'blue']



 // 2.借用构造函数:可在子类型向超类型传递参数；方法定义在构造函数中时函数复用就无从谈起
 function Super() {
    this.color = ['red'];
 }

 function Suber() {
    Super.call(this);
 }

 var instance1 = new Suber();
 instance1.getColor(); // ['red']
 instance1.color.push('blue');

 var instance2 = new Suber();
 instance2.getColor(); // ['red']

 // 3.组合
 function Super(name) {
    this.name = name;
    this.color = ['red'];
 }

 Super.prototype.getColor = function() {
    return this.color;
 };

 function Suber(name, age) {
    Super.call(this, name); // 第二次调用
    this.age = age;
 }

 Suber.prototype = new Super(); // 第一次调用
 Suber.prototype.constructor = Suber;

 Suber.prototype.getAge = function() {
    return this.age;
 };

 var instance1 = new Suber('javascript', 18);
 instance1.getColor(); // ['red']
 instance1.color.push('blue');

 var instance2 = new Suber('javascript', 19);
 instance2.getColor(); // ['red']

 // 4.原型式:必须有一个对象作为另一个对象的基础。ECMAScript5通过Object.create(prototype[,attr])去规范了原型的继承
function object(o) {
    function F(){}
    F.prototype = o;
    return new F();
}

 // 5.寄生式: 一个仅用于封装继承过程的函数
function createAnother(original) {
    var clone = object(original);
    clone.sayHi = function() {
        console.log('hi');
    }
    return clone;
}

 // 6.寄生组合式: 组合继承调用了两次超类构造函数
function inheritPrototype(sub, sup) {
    var prototype = object(sup.prototype);
    prototype.constructor = sub;
    sub.property = prototype;
}

 function Super(name) {
    this.name = name;
    this.color = ['red'];
 }

 Super.prototype.getColor = function() {
    return this.color;
 };

 function Suber(name, age) {
    Super.call(this, name);
    this.age = age;
 }

 inheritPrototype(Suber, Super);

 Suber.prototype.getAge = function() {
    return this.age;
 }; 
