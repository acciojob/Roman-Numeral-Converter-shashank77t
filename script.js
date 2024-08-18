function convertToRoman(num) {
    const obj = {
        0: ['M', 1000], 
        1: ['D', 500], 
        2: ['C', 100], 
        3: ['L', 50], 
        4: ['X', 10], 
        5: ['V', 5], 
        6: ['I', 1]
    };

    let result = '';

    // Iterate through the object values in order
    for (let i = 0; i < Object.keys(obj).length; i++) {
        let [roman, value] = obj[i];
        
        // Handle subtractive cases for Roman numerals
        if (i % 2 === 0 && i < 6) { // Check only the 'M', 'C', and 'X' symbols
            let nextValue = obj[i][1] - obj[i + 2][1];
            let nextRoman = obj[i + 2][0] + roman;
            if (num >= nextValue) {
                result += nextRoman;
                num -= nextValue;
            }
        }

        // Repeat while the number is greater than or equal to the current value
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }

    return result;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line


// do not edit below this line
module.exports = convertToRoman;
