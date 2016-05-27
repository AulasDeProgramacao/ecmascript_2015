const produto = {
	nome: 'Caneta',
	preco: '2.59'
};

produto.nome = 'Caneta BIC Preta';
console.log(produto.nome);

// TypeError: Assignment to constant variable.
produto = {};