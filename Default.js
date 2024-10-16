function CalculatePercentage(Mark, Outof) {
    if (Outof === void 0) { Outof = 500; }
    var Result = 0;
    Result = (Mark / Outof) * 100;
    return Result;
}
console.log(CalculatePercentage(230));
console.log(CalculatePercentage(230, 300));
