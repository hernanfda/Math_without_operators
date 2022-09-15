const division = (num1, num2) => {
    let result = 0;
    let num3 = 0;
    while (num3 < num1) {
        if (num3 + num2 <= num1) {
            result++;
            num3 += num2;
        } else {
            let rest = num1 - num3;
            return `The result of the division is ${result} with a rest of ${rest}`;
        }
    }

    return result;
};

console.log(division(90, 4));
