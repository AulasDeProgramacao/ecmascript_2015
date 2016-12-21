var nomeAttr = 'nome';
var valorAttr = 'Davi';

nomeAttr = 'apellido';
valorAttr = 'Amador';

var dinamico = {
   [nomeAttr] : valorAttr
}


console.log(dinamico.nome, dinamico.apellido );
