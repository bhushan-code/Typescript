
function DisplayClass(Age : number) : boolean
{
    if(Age >=60)
    {
        return true
    }
    else
    {
        return false
    }
}

var MyAge1 : number = 25
var Result : boolean = false

Result = DisplayClass(MyAge1)

if (Result == true)
{
    console.log("you are old")
}
else
{
    console.log("young man")
}