var sequence = {
   __id: 1,
   get id() { return this.__id++; },
   set id(id) { this.__id = id; }
}

console.log(sequence.id, sequence.id);
sequence.id = 100;
console.log(sequence.id, sequence.id);
