// objects in objects

// each employee has certian areas they can or cannot access
// the program stores this as an Access Level
// nuclear facility example

// also, we can add line breaks to make this easier to read/modify
var exampleEmployeeObject = {
    'firstName': 'Alex',
    'lastName': 'Smith',
    'employeeId': 'AS87129',
    'accessLevels': {
        'frontOffice': true,
        'serverRoom': true,
        'managementOffices': false,
        'nuclearMaterials': false
    }
};

// var employeeAccess = exampleEmployeeObject['accessLevels'];
// console.log(employeeAccess['frontOffice']);

console.log(exampleEmployeeObject['accessLevels']['frontOffice']);