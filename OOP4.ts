
 

class Arithmetic 
{
    No1 : number         //dont use var
    No2 : number 

    constructor(x : number, y : number)
    {
        this.No1 = x
        this.No2 = y
    }
    Addition() : number
    {
        var Ans : number = 0
        Ans = this.No1 + this.No2
        return Ans
    }

    Substraction() : number
    {
        var Ans : number = 0
        Ans = this.No1 - this.No2
        return Ans
    }

}

var Result : number = 0

var obj1 = new Arithmetic(11, 20)


Result = obj1.Addition()
console.log("Addiotion is : "+Result)

Result = obj1.Substraction()
console.log("Substraction is : "+Result)


var obj2 = new Arithmetic(51,42)

Result = obj2.Addition()
console.log("Addiotion is : "+Result)

Result = obj2.Substraction()
console.log("Substraction is : "+Result)