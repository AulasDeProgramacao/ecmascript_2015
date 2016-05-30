function real(strings, ...values) {
   const resultado = [];
   values.forEach(function(value, index) {
      value = (typeof value == 'number')
         ? `R$${value.toFixed(2)}` : value;
      resultado.push(strings[index], value);
   });
   return resultado.join('');
}
var preco = 29.99, parcela = 11;
console.log(real `1x de ${preco} ou 3x de ${parcela}`);
