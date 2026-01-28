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

*/