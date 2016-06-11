function rand({min = 0, max = 1000}) {
   return Math.floor(Math.random() * (max - min))  + min;
}

console.log(rand({max:50, min:40}));
console.log(rand({min:995}));
console.log(rand({}));
console.log(rand()); // TypeError: Cannot match against 'undefined' or 'null'.
