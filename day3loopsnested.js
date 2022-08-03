// can I put a loop inside a loop?
// can I put an if/else inside a loop?

for (var i = 0; i <= 10; i++) {

    for (var j = 0; j <= 10; j++) {

        console.log("this is a change");
        var result = i * j;
        
        if (result % 2 == 0) {
            console.log(result + ' is even!');
        }
        else {
            console.log(result + ' is odd!');
        }
    }
}