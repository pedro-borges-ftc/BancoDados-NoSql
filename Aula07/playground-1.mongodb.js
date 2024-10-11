// The current database to use.
use('mongodbVSCodePlaygroundDB');

// Search for documents in the current collection.
var resultado = db.getCollection('vendas')
  .find(
    {
      /*
      * Filter
      * fieldA: value or expression
      */
    },
    {
      /*
      * Projection
      * _id: 0, // exclude _id
      * fieldA: 1 // include field
      */
    }
  )
  .sort({
    /*
    * fieldA: 1 // ascending
    * fieldB: -1 // descending
    */
  });

  console.log("Resultado da consulta")
  console.log(resultado)
