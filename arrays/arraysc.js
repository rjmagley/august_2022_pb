// function that accepts two parameters
// one is an array of items, numbers, representing prices for objects
// second parameter is a sales tax rate
// return the sum of all item prices, plus tax (the total)

function calculateTotalOfItemsPlusTax(items, salesTax) {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
        total += items[i] + (items[i] * salesTax);

        // or
        // total += items[i];
        // total += items[i] * salesTax;

        // or!
        // total += items[i] * (salesTax + 1);
    }
    return total;
}

console.log(calculateTotalOfItemsPlusTax([10, 10, 10], .10)); // expect 33
console.log(calculateTotalOfItemsPlusTax([10, 10, 10, 10], .05)); // expect 42
console.log(calculateTotalOfItemsPlusTax([5, 5, 5, 5], .01)); // expect 20.2

var x = [16.49, 22.01, 73.04, 4.99, 4.99, 4.99, 4.99, 10.87];
var y = .07;

console.log(calculateTotalOfItemsPlusTax(x, y));
