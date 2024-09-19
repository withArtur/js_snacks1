// run with: node spinnig_sdrow/spinning_sdrow.js
// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(words) {
    // separare le parole (split), (map) and check the words of 5 letter, reverse them or normal word and return 
    return words.split(' ').map(function (word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}

console.info(spinWords("Hey fellow warriors")); // "Hey wollef sroirraw" 