// arrays
// arrays are collections of data - in a specific orders
// arrays start at index 0 - the first item is in the 0th index,
// the second item is in the 1st index, so on and so forth
var sampleArray = ["Alex", "Brad", "Charlie", "Devon", "Erek"];

// access item at 2nd index - the 3rd item
// console.log(sampleArray[2]);

// get length of array - the number of items
console.log(sampleArray.length);

// add items to the array with the .push() method
sampleArray.push("Francis");

console.log(sampleArray);
console.log(sampleArray.length);
// remove the last item from the array with the .pop() method
var removedName = sampleArray.pop()

console.log(sampleArray);
console.log(removedName);

console.log(sampleArray.length);