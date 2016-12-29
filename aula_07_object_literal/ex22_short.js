var nome = 'Bia', anoNascimento = 1982;

function idade() {
   return new Date().getFullYear() - this.anoNascimento;
}

/*
	var pessoa = {
	   nome: nome,
	   anoNascimento: anoNascimento,
	   idade: idade,
	   toString: function() {return `${nome} = ${idade()}`;}
};

*/

//Isto é o mesmo que o anterior. this está apontando para o objeto pessoa.
var pessoa = {
   nome,
   anoNascimento,
   idade,
   toString (){return `${this.nome} = ${this.idade()}`;}
};

/*
	pessoa.nome = 'jairo'
	pessoa.anoNascimento = 1986

*/

console.log(pessoa.toString());
