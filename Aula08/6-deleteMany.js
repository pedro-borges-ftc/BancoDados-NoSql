// The current database to use.
use('mongodbVSCodePlaygroundDB');

db.getCollection('inventory').deleteMany({ "_id": ObjectId("671058a19b097e529918080d") });

// Search for documents in the current collection.
db.getCollection('inventory')
  .find()
  .sort();