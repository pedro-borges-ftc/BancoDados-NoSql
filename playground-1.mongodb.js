// The current database to use. --mongodbVSCodePlaygroundDB
use('mongodbVSCodePlaygroundDB');

db.livros.aggregate([
  // Agrupar os livros por categoria e calcular a média de exemplares
  { $group: { _id: "$categoria", mediaExemplares: { $avg: "$quantidade" } } },
  // Ordenar as categorias pela maior média de exemplares
  { $sort: { mediaExemplares: -1 } },
  // Limitar a consulta às 3 categorias com maior média
  { $limit: 5 }
]);



