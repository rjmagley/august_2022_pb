// here's that sales tax example, reworked to use an array of objects -
// some items are taxed at different rates than others

function calculateTotalOfItemsPlusTax(items) {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
        total += items[i]['price'] + (items[i]['price'] * items[i]['salesTax']);

        // or
        // total += items[i];
        // total += items[i] * salesTax;

        // or!
        // total += items[i] * (salesTax + 1);
    }
    return total;
}

var itemsList = [
    {'price': 10, 'salesTax': .10},
    {'price': 12, 'salesTax': .10},
    {'price': 5, 'salesTax': 0},
    {'price': 13, 'salesTax': .08},
]

console.log(calculateTotalOfItemsPlusTax(itemsList));