//Made an algorithm that performs a substract operation without using the "-"
//minuend = the larger number
//subtrahend = the smaller number

//---------------------------------------------------------------------------
//--Method 1: --
//---------------------------------------------------------------------------

const substractWithoutSubstract = (minuend, subtrahend) => {
    //Create the count variable which will be used in order to accumulate numbers depending on the differencs between the 2 numbers passed
    let counter = 0;
    //check if the order of the numbers was passed correctly
    if (subtrahend > minuend) {
        return "The minuend must be bigger thant the subtrahend in order to perform the substract operation";
    }
    //Start a cicle that will iterate until both, the minuend and the subtrahend have the same value
    while (minuend != subtrahend) {
        //add 1 to the counter which will be have the difference between both numbers at the end of the cicle
        counter++;
        //add 1 to the subtrahend which will reach the same value as the minuend by the end of the cicle
        subtrahend++;
    }
    return `Method 1: ${minuend} - ${subtrahend} = ${counter}`;
};

console.log(substractWithoutSubstract(10, 10));

//----------------------------------------------------------------------
//--Method 2: Using an array--
//----------------------------------------------------------------------

const substractWithoutTheOperator = (minuend, subtrahend) => {
    //check if the order of the numbers was passed correctly
    if (subtrahend > minuend) {
        return "The minuend must be bigger thant the subtrahend in order to perform the substract operation";
    }
    //Create the arr variable which will be filled depending of the numbers passed in the params
    let arr = [];
    //Create the count variable which will be used in order to accumulate numbers depending on the differencs between the 2 numbers passed
    let count = 0;
    //Use an iteration in order to fill the array until it reaches the biger number.
    for (let i = 1; i <= minuend; i++) {
        arr.push(i);
    }
    //Start the iteration in the created array
    arr.forEach((e) => {
        //if the number in the array matches with the subtrahend begin counting until the iteration reaches the minuend value
        if (e >= subtrahend && e < minuend) {
            count++;
        }
    });
    return `Method 2: ${arr[arr.length - 1]} - ${subtrahend} = ${count}`;
};

console.log(substractWithoutTheOperator(10, 10));
