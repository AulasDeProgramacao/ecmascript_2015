function tag(strings, ...params) {
	console.log(strings);
	console.log(params);
	return "Outro valor";
}

var aluno = 'Gui';
var resultado = 'Aprovado';
var frase = tag `O aluno ${aluno} está ${resultado}`;
console.log(frase);
