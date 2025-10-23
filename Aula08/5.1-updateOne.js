// The current database to use.
use('mongodbVSCodePlaygroundDB');

db.tarefas.updateOne(
  {_id: new ObjectId('672f8b0abf957307011225b9')},
  {
    '$set': {
      Descricao: 'tarefa inicial novamente',
      DataInicial: '2024-11-09T16:17:14.314Z',
      DataFinal: '2024-11-16T16:17:14.314Z',
      Status: 'Feito'
    }
  }
);

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