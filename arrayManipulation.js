function processArray(array) {
    var result = [];
    
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result.push(array[i] * array[i]);
        } else {
            result.push(array[i] * 3);
        }
    }
    
    return result;
}


function processArray(array) {
    var result = [];
    
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result.push(array[i] * array[i]);
        } else {
            result.push(array[i] * 3);
        }
    }
var inputStrings = ["Hello", "World", "JavaScript", "Programming"];
var inputNumbers = [1, 2, 3, 4, 5];
var processedNumbers = processArray(inputNumbers);
var formattedStrings = formatArrayStrings(inputStrings, processedNumbers);
console.log(formattedStrings);

    return result;
}
