function transformString(input) {
    const length = input.length;

    if (length % 15 === 0) {
        // Reverse the string
        let reversedString = input.split('').reverse().join('');
        // Replace each character with its ASCII code
        let asciiTransformed = [];
        for (let i = 0; i < reversedString.length; i++) {
            asciiTransformed.push(reversedString.charCodeAt(i));
        }
        return asciiTransformed.join(' ');
    } else if (length % 3 === 0) {
        // Reverse the string
        return input.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // Replace each character with its ASCII code
        let asciiTransformed = [];
        for (let i = 0; i < input.length; i++) {
            asciiTransformed.push(input.charCodeAt(i));
        }
        return asciiTransformed.join(' ');
    } else {
        // Return the string as is
        return input;
    }
}

// Example usage:
console.log(transformString("Aime Patrick")); 
console.log(transformString("Pizza")); 
console.log(transformString("Chocolate Chip Cookie")); 
