
// We have to design an application which pereform addition and substraction of two number 

//Characteristics           ky laganar ahe 
//Behaviours                ky karaych ahe 
 

class Arithmetic 
{
    No1 : number         //dont use var
    No2 : number 

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

var obj = new Arithmetic()
obj.No1 = 11
obj.No2 = 10

var Result : number = 0

Result = obj.Addition()
console.log("Addiotion is : "+Result)

Result = obj.Substraction()
console.log("Substraction is : "+Result)