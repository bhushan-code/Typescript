
//Lambda Statement

var TEMP = (No1 : number , No2 : number) =>
{
    console.log("Inside the Addition Lambda Statement")
    var Result : number = 0
    Result = No1 + No2
    return Result
}

var Ans : number = 0
Ans = TEMP(10,11)

console.log("Addition is : "+Ans)