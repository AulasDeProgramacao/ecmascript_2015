var pai = {
   func() { return 'Pai'; }
}

var filho = {
   func() { return `${super.func()} + filho`; }
}

//Se não fizer isso super terá problemas
Object.setPrototypeOf(filho, pai);

console.log(filho.func());
