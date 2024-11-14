// The current database to use.
use('mongodbVSCodePlaygroundDB');

db.livros.aggregate([

  { $group: { _id: "$categoria", totalLivros: { $sum: 1 } } },

  { $sort: { totalLivros: 1 } },

  { $limit: 3 }

]);

/*

*/