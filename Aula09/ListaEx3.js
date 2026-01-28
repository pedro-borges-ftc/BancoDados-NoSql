// The current database to use.
use('mongodbVSCodePlaygroundDB');

//User = alunosunex
//Password = alunosUnex123
//mongodb+srv://alunosunex:alunosUnex123@cluster-bdnosql.tg2ka.mongodb.net/

db.livros.find({
  "ano": { $gte: 2019, $lte: 2023 },
  "autor": { $regex: /SANTOS/, $options: 'i' }
});



/*

db.getCollection('livros').insertMany([
  { "titulo": "Aula online", "autor": "FULANO DE TALZ", "ano": 2020, "categoria": "Futebol", "quantidade": 5 },
]);

db.getCollection('livros')
.find({"autor": {$eq: "FULANO DE TALZ"}})
.sort();

const livrosPeuborg = db.livros.find({"autor": {$eq: "Peuborg"}}).count();
console.log(`${livrosPeuborg} livros foram encontrados.`);

//const livrosPeuborg = db.livros.find({"autor": {$eq: "Peuborg"}},{"autor":1,"titulo":1});
const livrosPeuborg = db.livros.find({"autor": {$eq: "Peuborg"}}).toArray();
console.log(typeof(livrosPeuborg))
//console.log(livrosPeuborg);
livrosPeuborg.forEach((livro, indice) => {
  console.log(`livro ${indice + 1}: ${livro.titulo}`);
});

// Insert a few documents into the sales collection.
db.getCollection('livros').insertMany([
  { "titulo": "O Grande Jogo", "autor": "AEVERTON SANTOS DE OLIVEIRA", "ano": 2020, "categoria": "Futebol", "quantidade": 5 },
  { "titulo": "Tecnologias do Futuro", "autor": "ALEX JUNIO SANTOS PACHECO", "ano": 2021, "categoria": "Tecnologia", "quantidade": 8 },
  { "titulo": "A História das Estrelas", "autor": "ALLAN BRITO BARRETO", "ano": 2019, "categoria": "Astronomia", "quantidade": 4 },
  { "titulo": "A Revolução do Saber", "autor": "ANDRÉ LUIZ NASCIMENTO COUTINHO JÚNIOR", "ano": 2022, "categoria": "Educação", "quantidade": 7 },
  { "titulo": "Mundo dos Robôs", "autor": "ANDRÉ VALTER MENEZES LEITE", "ano": 2023, "categoria": "Tecnologia", "quantidade": 6 },
  { "titulo": "Fronteiras do Conhecimento", "autor": "ARTHUR GALVÃO LOUREIRO ARGÔLO", "ano": 2018, "categoria": "Ciência", "quantidade": 3 },
  { "titulo": "Estratégias de Jogo", "autor": "CAIO VICTOR LOPES SERRA", "ano": 2022, "categoria": "Esportes", "quantidade": 9 },
  { "titulo": "Mundos Invisíveis", "autor": "CARLOS HENRIQUE SANTOS DE CARVALHO", "ano": 2021, "categoria": "Ficção Científica", "quantidade": 4 },
  { "titulo": "Arte e Emoção", "autor": "CLARA GABRYELLEN PAIXÃO ADERNO", "ano": 2020, "categoria": "Artes", "quantidade": 10 },
  { "titulo": "A Era dos Computadores", "autor": "DANIEL QUEIROGA SANTANA MARTINS", "ano": 2019, "categoria": "Tecnologia", "quantidade": 5 },
  { "titulo": "A Magia da Literatura", "autor": "DIÓGENES SANTANA BISPO DOS SANTOS", "ano": 2018, "categoria": "Literatura", "quantidade": 6 },
  { "titulo": "História da Humanidade", "autor": "ELISSON BASTOS OLIVEIRA MENEZES JUNIOR", "ano": 2020, "categoria": "História", "quantidade": 7 },
  { "titulo": "Técnicas Avançadas de Futebol", "autor": "FELIPE SOUZA TEIXEIRA DA SILVA", "ano": 2024, "categoria": "Esportes", "quantidade": 2 },
  { "titulo": "O Universo em Expansão", "autor": "FERNANDO GUSTAVO B. SANTOS", "ano": 2022, "categoria": "Astronomia", "quantidade": 4 },
  { "titulo": "Futuro da Inteligência Artificial", "autor": "FILLIPE CAIRES SILVA ALVES", "ano": 2023, "categoria": "Tecnologia", "quantidade": 5 },
  { "titulo": "Gestão de Recursos Humanos", "autor": "FREDSON PEREIRA DE OLIVEIRA", "ano": 2020, "categoria": "Administração", "quantidade": 8 },
  { "titulo": "Energia Sustentável", "autor": "GABRIEL DE JESUS RIBEIRO", "ano": 2021, "categoria": "Ciência", "quantidade": 6 },
  { "titulo": "Caminhos da Filosofia", "autor": "GABRIEL DE SOUZA NASCIMENTO", "ano": 2023, "categoria": "Filosofia", "quantidade": 5 },
  { "titulo": "Viagens no Tempo", "autor": "GUILHERME COUTO ALMEIDA E ALMEIDA", "ano": 2022, "categoria": "Ficção Científica", "quantidade": 4 },
  { "titulo": "Histórias da Vida Real", "autor": "GUILHERME SANTOS DE SANTANA", "ano": 2020, "categoria": "Biografia", "quantidade": 9 },
  { "titulo": "A Força dos Algoritmos", "autor": "GUSTAVO MARINHO DE ANDRADE", "ano": 2021, "categoria": "Tecnologia", "quantidade": 7 },
  { "titulo": "Os Segredos do Cosmo", "autor": "IAN DA SILVA BORGES", "ano": 2020, "categoria": "Astronomia", "quantidade": 3 },
  { "titulo": "O Mundo do Xadrez", "autor": "IGOR DOS SANTOS VIEIRA", "ano": 2023, "categoria": "Esportes", "quantidade": 6 },
  { "titulo": "Revoluções Tecnológicas", "autor": "IGOR SENA HAGGE", "ano": 2021, "categoria": "Tecnologia", "quantidade": 5 },
  { "titulo": "Contos de Aventura", "autor": "JHON LUIZ SOUSA SANTOS", "ano": 2019, "categoria": "Literatura", "quantidade": 8 },
  { "titulo": "Matemática para Todos", "autor": "JOÃO ANTONIO TRAGINO SANTANA", "ano": 2022, "categoria": "Educação", "quantidade": 9 },
  { "titulo": "Biologia e a Vida", "autor": "JOÃO GABRIEL ABOBOREIRA RODRIGUES", "ano": 2023, "categoria": "Ciência", "quantidade": 4 },
  { "titulo": "Estratégias de Liderança", "autor": "JOÃO PAULO ROSA BATISTA", "ano": 2020, "categoria": "Administração", "quantidade": 6 },
  { "titulo": "Os Mistérios da Mente", "autor": "JOÃO PEDRO SOUZA DE JESUS", "ano": 2021, "categoria": "Psicologia", "quantidade": 3 },
  { "titulo": "Cálculos Complexos", "autor": "JOÃO ROBERTO SANTOS CARDOSO", "ano": 2024, "categoria": "Matemática", "quantidade": 2 },
  { "titulo": "O Futuro dos Transportes", "autor": "JONATAN DE SOUZA FERREIRA", "ano": 2022, "categoria": "Tecnologia", "quantidade": 7 },
  { "titulo": "Sociologia e Modernidade", "autor": "JONATAS DE JESUS SOUZA", "ano": 2023, "categoria": "Sociologia", "quantidade": 8 },
  { "titulo": "Física para Iniciantes", "autor": "JOSÉ HENRIQUE", "ano": 2020, "categoria": "Física", "quantidade": 6 },
  { "titulo": "História do Brasil", "autor": "KAUA SAMPAIO SILVA", "ano": 2021, "categoria": "História", "quantidade": 9 },
  { "titulo": "A Invenção da Computação", "autor": "KAYKY OLIVEIRA NASCIMENTO", "ano": 2022, "categoria": "Tecnologia", "quantidade": 4 },
  { "titulo": "Psicologia Positiva", "autor": "KLEBER LUCAS SANTOS BOMFIM", "ano": 2021, "categoria": "Psicologia", "quantidade": 5 },
  { "titulo": "Segurança da Informação", "autor": "LAIO HENRIQUE PEREIRA DA SILVA", "ano": 2023, "categoria": "Tecnologia", "quantidade": 7 },
  { "titulo": "Filosofia Contemporânea", "autor": "LUID MOURA SANTANA", "ano": 2020, "categoria": "Filosofia", "quantidade": 6 },
  { "titulo": "Ecologia em Foco", "autor": "MACIEL LOPES FRANCISCO", "ano": 2021, "categoria": "Ciências Ambientais", "quantidade": 5 },
  { "titulo": "Estatística Avançada", "autor": "MÁRCIO VINÍCIUS DA SILVA SANTOS", "ano": 2019, "categoria": "Matemática", "quantidade": 4 },
  { "titulo": "Ciência de Dados", "autor": "NATAN CORREIA DA SILVA", "ano": 2022, "categoria": "Tecnologia", "quantidade": 8 },
  { "titulo": "Gestão Financeira", "autor": "PEDRO BOMFIM GOMES ALMEIDA", "ano": 2023, "categoria": "Administração", "quantidade": 6 },
  { "titulo": "Análise de Algoritmos", "autor": "PEDRO FELIPE DOS ANJOS SANTOS", "ano": 2020, "categoria": "Tecnologia", "quantidade": 3 },
  { "titulo": "O Direito no Século XXI", "autor": "PEDRO HENRIQUE FREITAS COUTO", "ano": 2021, "categoria": "Direito", "quantidade": 7 },
  { "titulo": "Inteligência Coletiva", "autor": "PEDRO HENRIQUE MOURA DOS SANTOS", "ano": 2022, "categoria": "Sociologia", "quantidade": 5 },
  { "titulo": "O Impacto da Inovação", "autor": "PEDRO KAUAN SACRAMENTO SOUZA LIMA", "ano": 2023, "categoria": "Tecnologia", "quantidade": 6 },
  { "titulo": "Antropologia Cultural", "autor": "RAPHAEL BARRETO GOMES", "ano": 2020, "categoria": "Antropologia", "quantidade": 3 },
  { "titulo": "Física Quântica", "autor": "RAYAN SANTOS SILVA", "ano": 2021, "categoria": "Física", "quantidade": 8 },
  { "titulo": "História da Arte", "autor": "SAMUEL SANTOS CESAR", "ano": 2022, "categoria": "Artes", "quantidade": 4 },
  { "titulo": "A Ciência dos Dados", "autor": "TASSIO SANTOS DE ALBUQUERQUE DIAS", "ano": 2023, "categoria": "Tecnologia", "quantidade": 5 },
  { "titulo": "Desenvolvimento Sustentável", "autor": "VICTOR TADEU ARAUJO AUGUSTO", "ano": 2021, "categoria": "Ciências Ambientais", "quantidade": 7 }
]);

*/
