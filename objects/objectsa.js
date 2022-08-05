// object
// an object is a collection of key-value pairs

var sampleObject = {'key1': 98, 'key2': 234, 'key3': 71};

console.log(sampleObject);
// providing a key in the square brackets returns the value for that key
// providing a key that does not exist in the object returns undefined

// modifying keys and values
sampleObject['key1'] = -4;

console.log(sampleObject);

// adding keys to object
sampleObject['newKey'] = true;

console.log(sampleObject);
// we should not consider the keys in an object to be ordered
// data where we care about order - use an array
// order for keys is not (always) guaranteed

// removing keys from objects with the delete keyword

delete sampleObject['key1'];

console.log(sampleObject);
// arrays push and pop
// objects do not