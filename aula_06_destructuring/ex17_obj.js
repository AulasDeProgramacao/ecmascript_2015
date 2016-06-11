var pessoa = {nome: 'Ana', idade: 20};

var {nome, idade} = pessoa;
console.log(nome, idade);

var {nome: n, idade: i} = pessoa;
console.log(n, i);

var {genero, situacao = 'Ativa'} = pessoa;
console.log(genero, situacao);
