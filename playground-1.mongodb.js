// The current database to use. --mongodbVSCodePlaygroundDB
use('mongodbVSCodePlaygroundDB');


db.livros.find({
  "categoria": { $nin: ["Fantasia", "Ficção Científica"] }
});


/*
// Exercício 2
// Encontrar livros de não-ficção com quantidade maior que 5 e publicados após 2015.
db.livros.find({ 
  categoria: { $ne: "Ficção Científica"}, 
  quantidade: { $gt: 5 }, 
  ano: { $gt: 2015 } 
})
  
// Exercício 1
// Encontrar livros de ficção científica publicados entre 2010 e 2021.
db.livros.find({ 
  categoria: "Ficção Científica", 
  ano: { $gte: 2010, $lte: 2021 } 
})
*/