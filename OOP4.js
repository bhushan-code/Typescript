var Arithmetic = /** @class */ (function () {
    function Arithmetic(x, y) {
        this.No1 = x;
        this.No2 = y;
    }
    Arithmetic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithmetic.prototype.Substraction = function () {
        var Ans = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithmetic;
}());
var Result = 0;
var obj1 = new Arithmetic(11, 20);
Result = obj1.Addition();
console.log("Addiotion is : " + Result);
Result = obj1.Substraction();
console.log("Substraction is : " + Result);
var obj2 = new Arithmetic(51, 42);
Result = obj2.Addition();
console.log("Addiotion is : " + Result);
Result = obj2.Substraction();
console.log("Substraction is : " + Result);
