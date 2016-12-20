this.desc = 'sou o module.export... :P';
const obj = {desc: 'sou o obj... :P'};

const func = function(){
    console.log(this);
}
func();

const funcBind = func.bind(obj);
funcBind();

const arrowFunc = () => console.log(this);
arrowFunc();

const arrowFuncBind = arrowFunc.bind(obj);
arrowFuncBind();