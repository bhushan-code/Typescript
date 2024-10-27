var Demo = /** @class */ (function () {
    function Demo(x, name) {
        console.log('Inside Parameterised constructor');
        this.No = x;
        this.str = name;
    }
    Demo.prototype.fun = function () {
        console.log("Inside the fun of Demo");
        console.log("Value of No is : " + this.No);
        console.log("Value of str is : " + this.str);
    };
    return Demo;
}());
var obj1 = new Demo(20, "PPA");
var obj2 = new Demo(21, "LB");
obj1.fun();
obj2.fun();
