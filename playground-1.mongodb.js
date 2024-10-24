// The current database to use.
use('mongodbVSCodePlaygroundDB');

  /*

//CREATE
db.getCollection('livros').insertMany([
  { 'titulo': 'Primeiro Campeão Mundial','autor': 'Peuborg', 'ano': 2024,'categoria': 'Futebol', 'quantidade': 2, },
  { 'titulo': 'TriCampeao Paulista','autor': 'Peuborg', 'ano': 2024,'categoria': 'Futebol', 'quantidade': 20, },
  { 'titulo': 'Rumo ao Tri Brasileiro','autor': 'Peuborg', 'ano': 2024,'categoria': 'Futebol', 'quantidade': 2, },
  { 'titulo': 'Tri da Libertadores','autor': 'Peuborg', 'ano': 2024,'categoria': 'Futebol', 'quantidade': 2, },
]);

 // READ
 db.getCollection('livros')
 .find()
 .sort();

// UPDATE
  db.getCollection('livros').updateMany(
    { quantidade: { $lt: 20 } },
    {
      $set: { 'ano': 2020},
      $currentDate: { lastModified: true }
    }
  );

  //DELETE
  db.getCollection('livros').deleteOne({ "_id": ObjectId("6719943f41ee64c6d362bc73") });
*/