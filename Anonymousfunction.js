// Type 1 Anonymous Function
var greet = function () {
    console.log("Welcome to GeeksforGeeks!");
};
  
greet();


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(function(num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });

  const namestring = ["Sajid ansari", "Sakib ansari", "Faisal ansari"];
const TitleCaps = function (string) {
return string.split(" ").map(function(word) {
    return word.charAt(0).toUpperCase()+word.slice(1);
}).join(" ")
};

const output = namestring.map(TitleCaps);
console.log(output);



const numbers = [1,2,3,4,5,6,7,8,9];
let sum = function(arr) {
    return arr.reduce(function(acc,curr) {
        return acc+curr;
    });
}
const result = sum(arr);
console.log(result);





const numcount = [1,2,3,4,5,6,7,8,9];

const primeNumber = function(prr) {
    if (let numcount % 2 != 0 )
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    console.log(arr[i]);
  }
}



// Type 2 Anonymous Function
var greet = function (platform) {
    console.log("Welcome to ", platform);
};
  
greet("GeeksforGeeks!");