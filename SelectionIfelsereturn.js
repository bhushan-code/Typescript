function DisplayClass(Age) {
    if (Age >= 60) {
        return true;
    }
    else {
        return false;
    }
}
var MyAge1 = 66;
var Result = false;
Result = DisplayClass(MyAge1);
if (Result == true) {
    console.log("you are old");
}
else {
    console.log("young man");
}
