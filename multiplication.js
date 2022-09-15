const multiplication = (num1, num2) => {
    result = 0;
    for (let i = 0; i < num2; i++) {
        result += num1;
        console.log(`Itero ${[i]} y el num1 es ${result}`);
    }
    return result;
};

console.log(multiplication(2, 6));
