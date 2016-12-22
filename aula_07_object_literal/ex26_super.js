var pai = {
   func() { return 'Pai'; },
   nome: 'jairo'
}

var filho = {
   func() { return `${super.func()} + filho do ${super.nome}` }
}

//Se não fizer isso super terá problemas
Object.setPrototypeOf(filho, pai);

console.log(filho.func());
