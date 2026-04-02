//Select * from posts
db.getCollection('posts').find({});

// The current database to use. --mongodbVSCodePlaygroundDB
use('mongodbVSCodePlaygroundDB');

db.livros.aggregate([
  { $group: {_id: "$autor",totalLivros: { $sum: 1 } } },
  { $match: { totalLivros: { $gt: 1 } }},
  {$limit: 5}
]);

/*


//ex1
db.livros.aggregate([
  // Filtrar as categorias com mais de 5 livros
  { $group: { _id: "$categoria", totalLivros: { $sum: 1 }, mediaExemplares: { $avg: "$quantidade" } } },
  { $match: { totalLivros: { $gt: 5 } } },
  // Ordenar pela média de exemplares de forma decrescente
  { $sort: { mediaExemplares: -1 } }
]);

//ex2
db.livros.aggregate([
  {
    $group: {
      _id: "$autor",
      totalLivros: { $sum: 1 }
    }},
  {
    $match: {
      totalLivros: { $gt: 2 }
    }},
  {$limit: 5}
]);

// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('mongodbVSCodePlaygroundDB');

// Create a new document in the collection.
db.getCollection('ListaPresenca').insertOne(
{
  nome: 'Dom Pedro II',
  matricula: NumberInt('17623'),
  data: ISODate('2026-04-01T21:00:00.000Z')
}
);

*/