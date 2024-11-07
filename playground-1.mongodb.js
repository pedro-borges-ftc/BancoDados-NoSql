// The current database to use.
use('mongodbVSCodePlaygroundDB');

const livrosPeuborg = db.livros.find({"autor": {$eq: "Peuborg"}}).toArray();

console.log(typeof(livrosPeuborg))

livrosPeuborg.forEach((livro, indice) => {
  console.log(`livro ${indice + 1}: ${livro.titulo}`);
});

console.log(livrosPeuborg);

  /*
db.getCollection('livros').insertMany([
  { "titulo": "Aula online", "autor": "FULANO DE TALZ", "ano": 2020, "categoria": "Futebol", "quantidade": 5 },
]);

db.getCollection('livros')
.find({"autor": {$eq: "FULANO DE TALZ"}})
.sort();

const livrosPeuborg = db.livros.find({"autor": {$eq: "Peuborg"}}).count();

console.log(`${livrosPeuborg} livros foram encontrados.`);

console.log(typeof(livrosPeuborg))

console.log(livrosPeuborg);
*/