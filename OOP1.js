// We have to design an application which pereform addition and substraction of two number 
//Characteristics           ky laganar ahe 
//Behaviours                ky karaych ahe 
var Arithmetic = /** @class */ (function () {
    function Arithmetic() {
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
var obj = new Arithmetic();
obj.No1 = 11;
obj.No2 = 10;
var Result = 0;
Result = obj.Addition();
console.log("Addiotion is : " + Result);
Result = obj.Substraction();
console.log("Substraction is : " + Result);
