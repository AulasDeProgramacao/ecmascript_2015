var pessoa = {
   nome: 'Ana',
   endereco: {rua: 'A', numero: 1000},
   idade: undefined
};

var {endereco: {rua, numero, cep}} = pessoa;
console.log(rua, numero, cep);

let {idade = 28} = pessoa;
console.log(idade);

//var {conta: {numero, agencia}} = pessoa; // TypeError: Cannot match against 'undefined' or 'null'.
//console.log(numero, agencia);
