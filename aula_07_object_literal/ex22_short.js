var nome = 'Bia', anoNascimento = 1981;
function idade() {
   return new Date().getFullYear() - this.anoNascimento;
}
var pessoa = {
   nome,
   anoNascimento,
   idade,
   toString() {return `${this.nome} = ${this.idade()}`;}
};
pessoa.nome = 'Leo';
pessoa.anoNascimento = 2000;
console.log(pessoa.toString());
