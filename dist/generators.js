var _marked =
    /*#__PURE__*/
    regeneratorRuntime.mark(generator);

// 1
// function* generate() {
//     console.log("Start");
//     yield;
//     console.log("Finish");
// }
// let iterator = generate();
// iterator.next();
// iterator.next();
// 2
function generator() {
    return regeneratorRuntime.wrap(function generator$(_context) {
        while (1) {
            switch ((_context.prev = _context.next)) {
                case 0:
                    _context.next = 2;
                    return;

                case 2:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked);
}

var iterator = generator();
console.log(iterator.next());
console.log(iterator.next());
