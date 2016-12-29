this.desc = 'Sou eu ... :P'
console.log(this);

/*
	Aqui dentro de essa função o this aponta para o objeto global.
	Acontece quando o this é declarado dentro de uma função com ECMA5.
	Diferente de ECMA6.
*/
const func = function(){
	console.log(this === global);
}
func();


/*
	Em ECMA6 o this sempre apontará para para o arquivo onde ele esté.
	e apontará para module.exports.
*/
const arrowfunc = () =>
	console.log(this, this === module.exports);
arrowfunc();
