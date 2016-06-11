function rand([min = 0, max = 1000]) {
   if(min > max) [min, max] = [max, min];
   return Math.floor(Math.random() * (max - min))  + min;
}

console.log(rand([50, 40]));
console.log(rand([992]));
console.log(rand([,10]));
console.log(rand([]));
console.log(rand()); // TypeError: Cannot match against 'undefined' or 'null'.
