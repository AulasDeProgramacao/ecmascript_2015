function real(strings, ...values) {
	console.log(values);
   console.log(strings);

   const resultado = [];

   values.forEach(function(value, index) {
   	//console.log( value);
      value = (typeof value == 'number') ? `R$${value.toFixed(2)}` : value;

      resultado.push(strings[index], value);

      console.log(resultado);
   });

   return resultado.join('');
}

var preco = 29.99, parcela = 11;

console.log(real `1x de ${preco} ou 3x de ${parcela}`);
