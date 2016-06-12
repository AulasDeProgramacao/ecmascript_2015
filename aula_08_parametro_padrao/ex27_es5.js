function soma(a, b) {
   a = a || 1;
   b = b || 1;
   return a + b;
}

console.log(soma(), soma(2, 3), soma(0));
