function tag(strings, ...params) {
   console.log(strings);
   console.log(params);
}
var aluno = 'Gui';
var resultado = 'Aprovado';
tag `O aluno ${aluno} está ${resultado}`;
