export class Calculator {
    constructor() {

    };

    add(...n) {
        return n.reduce((acc, item) => {
            return acc += item
        })
    };

    multiply(...n) {
        return n.reduce((acc, item) => {
            return acc *= item
        })
    };
};