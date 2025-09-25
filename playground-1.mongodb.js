// The current database to use.
use('mongodbVSCodePlaygroundDB');

// Create a new document in the collection.
// Insert a few documents into the sales collection.
db.getCollection('vendas').insertMany([
  { 'item': 'Arroz Parbolizado', 'preço': 10, 'quantidade': 2, 'data': new Date('2014-03-01T08:00:00Z') },
  { 'item': 'Macarrão Instantâneo', 'preço': 20, 'quantidade': 1, 'data': new Date('2014-03-01T09:00:00Z') },
  { 'item': 'Farinha de Buerarema', 'preço': 5, 'quantidade': 10, 'data': new Date('2014-03-15T09:00:00Z') },
  { 'item': 'Óleo Soya', 'preço': 5, 'quantidade': 20, 'data': new Date('2014-04-04T11:21:39.736Z') },
  { 'item': 'Manteiga Qualy', 'preço': 10, 'quantidade': 10, 'data': new Date('2014-04-04T21:23:13.331Z') },
  { 'item': 'Leite Longa Vida', 'preço': 7.5, 'quantidade': 5, 'data': new Date('2015-06-04T05:08:13Z') },
  { 'item': 'Carne do Sol', 'preço': 7.5, 'quantidade': 10, 'data': new Date('2015-09-10T08:43:00Z') },
  { 'item': 'Queijo Provolone', 'preço': 100, 'quantidade': 5, 'data': new Date('2016-02-06T20:20:13Z') },
]);


/*

*/