// // 1 (simple example)
// function* generate() {
//     console.log("Start");
//     yield;
//     console.log("Finish");
// }
// let iterator = generate();
// iterator.next();
// iterator.next();

// // 2 (the generator inside in another generator)
// function* generateArray() {
//     yield* [1, 2, 3];
// }

// function* generator() {
//     yield 42;
//     yield* generateArray();
//     yield 43;
// }

// let iterator = generator();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// // 3 Methods .return() and .throw()
function* generator() {
    try {
        yield 1;
        yield 2;
        yield 3;
    } catch (e) {
        console.log(e);
    }
}

let iterator = generator();
console.log(iterator.next());
// console.log(iterator.return());
console.log(iterator.throw(new Error("Error")));
console.log(iterator.next());
