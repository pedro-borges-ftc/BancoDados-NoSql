// The current database to use. --mongodbVSCodePlaygroundDB
use('mongodbVSCodePlaygroundDB');

// Lista 03 - Q2
db.livros.find({
  "categoria": { $in: ["Tecnologia", "Ciência"] },
  "quantidade": { $gt: 6 }
});