const stringRecurringSymbols = (text) =>  {
    let charMap = {};
    let charArray;
    let valueArray;
    let maxValue;

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    charArray = Object.keys(charMap);
    valueArray = Object.values(charMap);
    maxValue = Math.max(...valueArray);

    return charArray[valueArray.indexOf(maxValue)];
};

const str = stringRecurringSymbols('aaAAAaAAAAAAAAAAAAAAAAAAAAAAdddddddddddggggggggggggggggg');
console.log('string', str);
