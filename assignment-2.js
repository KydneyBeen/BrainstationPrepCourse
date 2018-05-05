//Challenge 1
var triangle = "";
var size = 7;
var i=0;
while(i <= size) {
    console.log(triangle);
    triangle= triangle+ "#";
    i++;
}
/* I've created a triangle variable to hold the # string.
    As long as the loop counter (i) is less than the size 
    variable, which I've created to make the triangle size 
    change-able, the while loop will add a "#" to the 
    triangle string and print it on each pass. */

//Challenge 2
function isEven(number) {
    if (number % 2 == 0) {
        console.log("Number is even")
    }
    else if (number % 2 == 1) {
        console.log("Number is odd")
        }
    else {
        console.log("Not a valid number")
    }
}
/*In this function, if the number is divisible by 2
    then the function will print "Number is even".  If
    the number is not divisible by 2 the function will
    print "Number is odd".  If the number is not a whole
    number or is not a number at all the function will
    print "Not a valid number" */

//To test the function
var run = new Object() //create new object "run"
run.m = isEven //define the methode of the object
run.m(5) //invoke the object with the value 5
