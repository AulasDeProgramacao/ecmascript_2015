'use strict';

/*
	Neste contexto o this é totalmente isolado do objeto global, seja qual seja o ambiente
	graças a o uso de use strict.
*/
this.desc = 'Sou eu ... :P'
console.log(this);

const func = function(){
	console.log(this === undefined);
}
func();

const arrowfunc = () =>
	console.log(this, this === module.exports);
arrowfunc();
