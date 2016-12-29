var funcs = [];

for (var i = 0; i < 10; i++) {
	funcs.push(function() {
		console.log(i);
	});
}

//dentro de cada Array existe uma função que quando chamada se executa.
funcs[2]();
funcs[8]();