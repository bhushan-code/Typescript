//Lambda Statement
var TEMP = function (No1, No2) {
    console.log("Inside the Addition Lambda Statement");
    var Result = 0;
    Result = No1 + No2;
    return Result;
};
var Ans = 0;
Ans = TEMP(10, 11);
console.log("Addition is : " + Ans);
