// function greet(greeting, name) {
//     console.log(greeting + " " + name);
// }

// function greet(greeting, name) {
//     if (greeting !== undefined && name !== undefined) {
//         console.log(`${greeting} ${name}`);
//     }
//     else if (name !== undefined) {
//         console.log(`Hello ${name}`);
//     }
//     else if (greeting !== undefined) {
//         console.log(`${greeting} friend`);
//     }
//     else {
//         console.log(`Hello friend`);
//     }
// }

function greet(greeting = "Hello", name = "friend") {
    console.log(greeting + " " + name);
}


// greet("Hello", "John Dou");
// greet("Hello");
// greet(undefined, "John Dou");
// greet();


function sum() {
    console.log(arguments);

    var sum = 0;

    Array.prototype.forEach.call(arguments, function (value) {
        sum += value;
    });

    console.log(sum);
}

function sum(...values) {
    console.log(
        values.reduce( (prevValue, curValue) => prevValue + curValue)
    );
}

sum(5, 2, 2, 10);
