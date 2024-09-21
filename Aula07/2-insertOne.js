// The current database to use.
use('mongodbVSCodePlaygroundDB');

// Create a new document in the collection.
db.getCollection('vendas').insertOne({
    "item": "Feijão",
    "preço": 10,
    "quantidade": 50,
    "data": "2024-09-21T09:00:00.000Z"
});
