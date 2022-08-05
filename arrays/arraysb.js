// more stuff about arrays

var arrayA = [7, 9, 12, 9, 3, 6, 18, 7, 2, 12, -98, 3];

// last item in array is at length - 1
// what is put in the square brackets for the index has to be a number
// (or... something that returns a number)
// console.log(arrayA[arrayA.length - 1]);
// console.log(arrayA[2 + 3]);

var arrayB = ['red', 'purple', 'green', 'seafoam', 'eggshell', 'xanadu', 'orange'];

// we can loop through items in an array based on index
// set up a for loop based on the array's length
for (var i = 0; i < arrayB.length; i++) {
    console.log(arrayB[i]);
}

arrayB[3] = 'aquamarine';
console.log(arrayB);

arrayB[7896612] = 'blurple';
console.log(arrayB);

console.log(arrayB.length);