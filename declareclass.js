"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(engine) {
        this.engine = engine;
    }
    Person.prototype.display = function () {
        console.log(this.engine);
    };
    return Person;
}());
exports.Person = Person;
var ss = new Person('a');
console.log(ss.engine);
ss.display();
