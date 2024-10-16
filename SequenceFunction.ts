
function Multiplication(Value1 : number, Value2 : number) : number
                        //10              //11
{
    var Answer : number = 0
    Answer = Value1 * Value2            //0 replace by 110
    return Answer
}

var No1 : number = 10                   //globle varible  
var No2 : number = 11
var Result : number = 0

Result = Multiplication(No1 , No2)      //result replce 0 to 110

console.log ("Multiplication is : "+Result)
