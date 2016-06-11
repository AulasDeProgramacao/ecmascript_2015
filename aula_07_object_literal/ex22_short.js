var nome = 'Bia', anoNascimento = 1981;
function idade() {
   return new Date().getFullYear() - anoNascimento;
}
var pessoa = {
   nome,
   anoNascimento,
   idade,
   toS() {return `${nome} = ${idade()}`;}
};
console.log(pessoa.toS());
