// const oddNumbers =[]

// const oddNum = function(arr){
//     for (let i =0; i<arr.length; i++){
//         if(arr[i]%2 ==1){
//             oddNumbers.push(arr[i])
//         }
//     }
// console.log(oddNumbers)    
// }

// oddNum([1,2,3,4,5])
console.log("-----------3------------")
// function sumArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }

// let numbersArray = [1, 2, 3, 4, 5];
// let result = sumArray(numbersArray);
// console.log(result); 
console.log("-----------4------------")
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function getPrimeNumbers(numbers) {
    return numbers.filter(function (num) {
        return isPrime(num);
    });
}

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNumbers = getPrimeNumbers(numbersArray);
console.log(primeNumbers);
console.log("-----------5------------")
function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}

function getPalindromes(strings) {
    return strings.filter(function (str) {
        return isPalindrome(str);
    });
}

let stringsArray = ["level", "hello", "madam", "world", "racecar"];
let palindromeArray = getPalindromes(stringsArray);
console.log(palindromeArray); 
console.log("-----------7------------")
function removeDuplicates(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
}

const originalArrays = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(originalArray);

console.log(uniqueArray);
console.log("-----------8------------")
function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;
    const rotatedArray = arr.slice(n - k).concat(arr.slice(0, n - k));

    return rotatedArray;
}
const originalArray = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArray = rotateArray(originalArray, k);

console.log(rotatedArray); 

console.log("-----------Arrow functions------------")
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log(oddNumbers);

console.log("-----------3------------")
const number = [1, 2, 3, 4, 5];

const sum = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);
console.log("-----------4------------")
const numbe = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const primeNumber = numbe.filter((num) => isPrime(num));

console.log(primeNumbers);
console.log("-----------5------------")
const words = ["level", "hello", "civic", "world", "radar"];

const isPalindrome = (word) => {
    const reversed = word.split("").reverse().join("");
    return word === reversed;
};

const palindromeWords = words.filter((word) => isPalindrome(word));

console.log(palindromeWords);










