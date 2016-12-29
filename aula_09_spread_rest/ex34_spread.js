var notasAlunos = [6.8, 7.9, 8.2];

var turmaES5 = notasAlunos.concat([6.7, 8.9, 9.1]);

/*
	Operador Spread
*/

//Cria um novo Array com os novos valores, acrescentando eles no final do Array original.
var turmaES6 = [...notasAlunos, 6.7, 8.9 ,9.1];

console.log(turmaES5);
console.log(turmaES6);
