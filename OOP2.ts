

class Demo 
{
    No : number 
    str : string


    constructor()
    {
        console.log("Inside the constructor of Demo class")
    }

    fun() : void
    {
        console.log("Inside the fun of Demo")
    }

}

var obj1 = new Demo()

var obj2 = new Demo()

obj1.fun()
obj2.fun()