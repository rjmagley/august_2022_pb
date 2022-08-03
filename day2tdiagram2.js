var x = 0;
var y = -2;
var z = 2;

if (x + y > z) {
    z = 2 * x;
    y = y - 2;
}

else if (y + z == x) {
    // console.log("y is:" + y + " z is: " + z);
    // string concatenation
    console.log(`y is: ${y} z is: ${z}`);
    // formatted strings
    x = y + z;
    console.log("x is: " + x);
    y = 3;
}

if (y < x || y < z){
    if (x > z) {
        z = x;
    }
    else {
        z = y;
    }
}
else {
    z = x + y;
    x = y - 3;
}

console.log(x);
console.log(y);
console.log(z);