// The current database to use.
use('mongodbVSCodePlaygroundDB');

db.getCollection('inventory').updateMany(
    { qty: { $lt: 50 } },
    {
      $set: { 'size.uom': 'in', status: 'P' },
      $currentDate: { lastModified: true }
    }
  );
  
// Search for documents in the current collection.
db.getCollection('inventory')
.find()
.sort();