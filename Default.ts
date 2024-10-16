function CalculatePercentage(Mark : number, Outof : number = 500) : number
{
    var Result : number = 0
    Result = (Mark / Outof)*100
    return Result
}

console.log(CalculatePercentage(230))               //230,500
console.log(CalculatePercentage(230,300))           //230,300

//works