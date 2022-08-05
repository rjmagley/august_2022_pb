// why do we use objects?
// arrays have order, objects do not (or, it's not guaranteed)
// object keys are descriptive

var exampleEmployeeObject = {'firstName': 'Alex', 'lastName': 'Smith', 'employeeId': 'AS87129'};

console.log(exampleEmployeeObject['firstName']);

// in theory, we could do this instead...

var exampleEmployeeDataArray = ['Alex', 'Smith', 'AS87129'];

console.log(exampleEmployeeDataArray[0]);
