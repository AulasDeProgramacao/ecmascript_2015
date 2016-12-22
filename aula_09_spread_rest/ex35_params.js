/*
	Aqui ...notas cria um array de todos os parametros.
*/

//são passados parametros e (...notas) converte para array os parametros.
function media(...notas) {
   var total = notas.reduce((soma, nota) => soma + nota);
   return total / notas.length;
}

console.log(media(7.3, 7.7, 6.0));
