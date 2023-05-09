//Print odd numbers in an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function () {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})();

//Convert all the strings to title caps in a string array
const strArray = ["hello world", "goodbye moon", "the quick brown fox"];

for (let i = 0; i < strArray.length; i++) {
  strArray[i] = strArray[i].toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

console.log(strArray);

//Sum of all numbers in an array
const numArray1 = [1, 2, 3, 4, 5];

const sum = (function () {
  let total = 0;
  for (let i = 0; i < numArray1.length; i++) {
    total += numArray1[i];
  }
  return total;
})();

console.log(sum);

//Return all the prime numbers in an array
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const primes = (function () {
  const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  const primeArray = [];
  for (let i = 0; i < numArray.length; i++) {
    if (isPrime(numArray[i])) {
      primeArray.push(numArray[i]);
    }
  }
  
  return primeArray;
})();

console.log(primes);


//Return all the palindromes in an array
const strArray2 = ["racecar", "hello", "madam", "world"];

const palindromes = (function () {
  const isPalindrome = str => {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  }
  
  const palindromeArray = [];
  for (let i = 0; i < strArray2.length; i++) {
    if (isPalindrome(strArray2[i])) {
      palindromeArray.push(strArray2[i]);
    }
  }
  
  return palindromeArray;
})();

console.log(palindromes);

//Return median of two sorted arrays of the same size.
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

const median = (function () {
  const mergedArr = arr1.concat(arr2).sort((a, b) => a - b);
  const mid = Math.floor(mergedArr.length / 2);
  
  if (mergedArr.length % 2 === 0) {
    return (mergedArr[mid - 1] + mergedArr[mid]) / 2;
  } else {
    return mergedArr[mid];
  }
})();

console.log(median);

//Remove duplicates from an array
const arrRemove = [1, 2, 2, 3, 4, 4, 5];

const uniqueArr = (function () {
  const unique = [];
  arrRemove.forEach((elem) => {
    if (!unique.includes(elem)) {
      unique.push(elem);
    }
  });
  return unique;
})();

console.log(uniqueArr);

//Rotate an array by k times
const array = [1, 2, 3, 4, 5];
const k = 3;

const rotatedArray = (function(arr, rotations) {
  const rotationsCount = rotations % arr.length;
  const rotated = [...arr.slice(rotationsCount), ...arr.slice(0, rotationsCount)];
  return rotated;
})(array, k);

console.log(rotatedArray); // [4, 5, 1, 2, 3]





