function tag(strings, ...values) {

	//console.log(strings);
	console.log(values);
	return `O valor é ${values} `;
}
var aluno = 'Jairo';
var status = 'Aprovado';

//tag é uma função e a query string são argumentos para a função.
console.log(tag `${aluno} está ${status}`);
