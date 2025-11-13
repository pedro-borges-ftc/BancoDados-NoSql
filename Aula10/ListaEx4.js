// The current database to use.
use('mongodbVSCodePlaygroundDB');

//User = alunosunex
//Password = alunosUnex123
//mongodb+srv://alunosunex:alunosUnex123@cluster-bdnosql.tg2ka.mongodb.net/

db.getCollection('livros').find().sort();

/*

db.getCollection('livros')
.find({"autor": {$eq: "FULANO DE TALZ"}})
.sort();

*/
