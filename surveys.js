module.exports = [
  {
    slug: 'jogos-escolares',
    title: 'Relações Étnico-Raciais nos Jogos Escolares',
    description: 'Questionário do projeto de iniciação científica Consciência Negra o Ano Inteiro. Responda todas as perguntas abaixo.',
    page: 'index.html',
    questions: require('./seed-jogos')
  },
  {
    slug: 'cabelos-naturais',
    title: 'Estética, Identidade e Cabelos Naturais',
    description: 'Pesquisa sobre cabelo, identidade, representatividade e padrões de beleza. Não existem respostas certas ou erradas.',
    page: 'cabelos-naturais.html',
    questions: require('./seed-cabelos')
  }
];
