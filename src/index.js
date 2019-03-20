module.exports = function getZerosCount(number, base) {
    let factorial = [];
    let k = 2;
    while (k < base) {
        while (base % k === 0) {
            factorial.push(k);
            base /= k;
        }
        k += 1;
    }
    if (base > 1) {
        factorial.push(base);
    }
    factorial.sort((a, b) => a - b);

    let zeros = [];
    let calculate = 1;
    for (let i = 0; i < factorial.length; i += calculate) {
        let counter = 0;
        for (let j = i; j < factorial.length; j += 1) {
            if (factorial[i] === factorial[j]) {
                counter += 1;
            } else {
                calculate = counter;
                break;
            }
        }
        let result = 0;
        let j = factorial[i];
        while (true) {
            result += (number - number % j) / j;
            j *= factorial[i];
            if (j > number) {
                break;
            }
        }
        zeros.push((result - result % counter) / counter);
    }

    return Math.min.apply(Math, zeros);
};