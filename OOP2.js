var Demo = /** @class */ (function () {
    function Demo() {
        console.log("Inside the constructor of Demo class");
    }
    Demo.prototype.fun = function () {
        console.log("Inside the fun of Demo");
    };
    return Demo;
}());
var obj1 = new Demo();
var obj2 = new Demo();
obj1.fun();
obj2.fun();
