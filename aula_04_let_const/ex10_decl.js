var semProblema = 1;
var semProblema = 2;
console.log('semProblema =', semProblema);

var comProblema = 1;

//dentro de um mesmo escopo não é possivel sobreescrever uma variavel com `let ou const`
{
	let comProblema = 2;
}

console.log('comProblema =', comProblema);
