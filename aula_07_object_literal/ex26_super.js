var pai = {
   func() { return 'Pai'; }
}

var filho = {
   func() { return `${super.func()} + filho`; }
}

Object.setPrototypeOf(filho, pai);
console.log(filho.func());
