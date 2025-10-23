// The current database to use. --mongodbVSCodePlaygroundDB
use('mongodbVSCodePlaygroundDB');

/*
db.ListaPresenca.updateOne(
  {_id: new ObjectId('68f97aa63d27e31afb783916')},
  {
    '$set': {
      nome: "Pedro dos Santos Borges",
      matricula: 17623,
      data: {
      "$date": "2025-10-22T22:00:00Z"
      },
    }
  }
);
*/

// Search for documents in the current collection.
db.getCollection('ListaPresenca')
  .find()
  .sort();