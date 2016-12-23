//'use strict'

this.desc = 'sou o module.export... :P';
const obj = {desc: 'sou o obj... :P'};

/*
  Quando utilizamos this sem use strict ele apontara para o objeto global.
  Mas quando utilizamos this com uso do use strict dentro de uma função que não
  seja arrow function ele será undefined.
*/
const func = function(){
    console.log(this === undefined);
}
func();

/*
  No exercicio abaixo o this estará apontando  para o objeto onde foi
  bindado e não para o objeto global.
*/
const funcBind = func.bind(obj);
funcBind();


const arrowFunc = () => console.log(this);
arrowFunc();

/*
  Arrow function sempre apontará para module.export ainda que seja bindiado.
*/
const arrowFuncBind = arrowFunc.bind(obj);
arrowFuncBind();
