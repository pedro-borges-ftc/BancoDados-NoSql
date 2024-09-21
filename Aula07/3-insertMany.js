// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the sales collection.
db.getCollection('vendas').insertMany([
  { 'item': 'Arroz', 'preço': 10, 'quantidade': 2, 'data': new Date('2014-03-01T08:00:00Z') },
  { 'item': 'Macarrão', 'preço': 20, 'quantidade': 1, 'data': new Date('2014-03-01T09:00:00Z') },
  { 'item': 'Farinha', 'preço': 5, 'quantidade': 10, 'data': new Date('2014-03-15T09:00:00Z') },
  { 'item': 'Óleo', 'preço': 5, 'quantidade': 20, 'data': new Date('2014-04-04T11:21:39.736Z') },
  { 'item': 'Manteiga', 'preço': 10, 'quantidade': 10, 'data': new Date('2014-04-04T21:23:13.331Z') },
  { 'item': 'Leite', 'preço': 7.5, 'quantidade': 5, 'data': new Date('2015-06-04T05:08:13Z') },
  { 'item': 'Carne', 'preço': 7.5, 'quantidade': 10, 'data': new Date('2015-09-10T08:43:00Z') },
  { 'item': 'Queijo', 'preço': 10, 'quantidade': 5, 'data': new Date('2016-02-06T20:20:13Z') },
]);