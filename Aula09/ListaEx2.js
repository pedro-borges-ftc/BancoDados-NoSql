// The current database to use.
use('mongodbVSCodePlaygroundDB');

db.getCollection('livros')
.find()
.sort();

/*
LISTA DE EXERCÍCIOS 2

Exercício 1
db.livros.find({
  "categoria": { $in: ["Futebol", "História"] },
  "autor": { $ne: "Peuborg" }
});

Exercício 2
db.livros.find({
  "categoria": { $in: ["Futebol", "História"] },
  "autor": { $ne: "Peuborg" }
});

Exercício 3
db.livros.find({
  "categoria": { $nin: ["Fantasia", "Ficção Científica"] }
});

Lembre-se de que:

- /brasileiro/i é uma expressão regular que busca pela palavra "brasileiro" ignorando caso.
- /amor/i é uma expressão regular que busca pela palavra "amor" ignorando caso.
- $or é um operador que permite combinar condições.
- $ne é um operador que busca por valores diferentes.
- $gt, $lt, $gte, $lte são operadores que buscam por valores maiores, menores, maiores ou iguais, menores ou iguais, respectivamente.
*/