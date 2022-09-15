//Made an algorithm that performs an addition operation without directly using the "+" between both numbers

const addition = (num1, num2) => {
    let count = 0;
    let bigOne = num1;
    let smallOne = num2;
    if (num1 <= num2) {
        bigOne = num2;
        smallOne = num1;
    }
    for (let i = -smallOne; i < bigOne; i++) {
        count++;
    }
    return count;
};

console.log(addition(10, 6));

//HACERLO SIN EL ARRAY INICIALIZANDO LA VARIABLE COUNT en -smallOne y aplicando un while
