// The current database to use.
use('mongodbVSCodePlaygroundDB');

db.getCollection('livros')
.find()
.sort();

/*
LISTA DE EXERCÍCIOS 1

Exercício 1
Encontrar livros de ficção científica publicados entre 2010 e 2020.
db.livros.find({ 
  categoria: "Ficção Científica", 
  ano: { $gte: 2010, $lte: 2020 } 
})

Exercício 2
Encontrar livros de não-ficção com quantidade maior que 5 e publicados após 2015.
db.livros.find({ 
  categoria: "Não-Ficção", 
  quantidade: { $gt: 5 }, 
  ano: { $gt: 2015 } 
})

Exercício 3
Encontrar livros de autores brasileiros publicados antes de 2000 ou com quantidade igual a 1.
db.livros.find({ 
  autor: /brasileiro/i, 
  $or: [ 
    { ano: { $lt: 2000 } }, 
    { quantidade: 1 } 
  ] 
})

Exercício 4
Encontrar livros de romance com título que contenha a palavra "amor" e publicados entre 1990 e 2000.
db.livros.find({ 
  categoria: "Romance", 
  titulo: /amor/i, 
  ano: { $gte: 1990, $lte: 2000 } 
})

Exercício 5
Encontrar livros de autores estrangeiros com quantidade maior que 3 e publicados após 2010, excluindo livros de ficção científica.
db.livros.find({ 
  autor: /estrangeiro/i, 
  quantidade: { $gt: 3 }, 
  ano: { $gt: 2010 }, 
  categoria: { $ne: "Ficção Científica" } 
})


Lembre-se de que:

- /brasileiro/i é uma expressão regular que busca pela palavra "brasileiro" ignorando caso.
- /amor/i é uma expressão regular que busca pela palavra "amor" ignorando caso.
- $or é um operador que permite combinar condições.
- $ne é um operador que busca por valores diferentes.
- $gt, $lt, $gte, $lte são operadores que buscam por valores maiores, menores, maiores ou iguais, menores ou iguais, respectivamente.
*/