// Pesquisa 1: Perfil étnico-racial da escola
// type: single | multiple | text | required: 1 (obrigatória) 0 (opcional)
module.exports = [
  {
    text: "Qual é a sua idade?",
    type: "text", required: 1,
    options: [],
    correct: null
  },
  {
    text: "Em qual ano do Ensino Médio você está?",
    type: "single", required: 1,
    options: ["1º Ano", "2º Ano", "3º Ano"],
    correct: null
  },
  {
    text: "Como você se autodeclara?",
    type: "single", required: 1,
    options: ["Branco", "Preto", "Pardo", "Indígena", "Amarelo"],
    correct: null
  },
  {
    text: "De acordo com o que você marcou na questão anterior, você sempre se identificou assim?",
    type: "single", required: 1,
    options: ["Sim", "Não", "Nunca havia pensado sobre isso"],
    correct: null
  },
  {
    text: "Você sabe o que é autodeclaração étnico-racial?",
    type: "single", required: 1,
    options: ["Sim", "Não"],
    correct: null
  },
  {
    text: "Você considera que sua identidade racial influencia sua experiência na sociedade?",
    type: "single", required: 1,
    options: ["Sim", "Não"],
    correct: null
  },
  {
    text: "Você sabe como funciona uma banca de heteroidentificação utilizada para ingresso em concursos públicos e universidades?",
    type: "single", required: 1,
    options: ["Sim", "Não"],
    correct: null
  },
  {
    text: "Na sua família, as pessoas costumam conversar sobre identidade racial ou pertencimento étnico-racial?",
    type: "single", required: 1,
    options: ["Frequentemente", "Às vezes", "Raramente", "Nunca"],
    correct: null
  },
  {
    text: "Você se sente pertencente à escola?",
    type: "single", required: 1,
    options: ["Sempre", "Na maioria das vezes", "Às vezes", "Raramente", "Nunca"],
    correct: null
  },
  {
    text: "Você acredita que estudantes de diferentes raças/cores são tratados da mesma maneira no ambiente escolar?",
    type: "single", required: 1,
    options: ["Sempre", "Na maioria das vezes", "Às vezes", "Raramente", "Nunca", "Não sei avaliar"],
    correct: null
  },
  {
    text: "Você já vivenciou ou presenciou uma situação de racismo ou preconceito racial na escola?",
    type: "single", required: 1,
    options: ["Sim", "Não", "Não tenho certeza", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Você já sofreu pessoalmente alguma situação de racismo ou preconceito racial na escola?",
    type: "single", required: 1,
    options: ["Sim, várias vezes", "Sim, algumas vezes", "Nunca", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Que formas de racismo ou preconceito racial você já presenciou ou vivenciou no ambiente escolar?",
    type: "single", required: 1,
    options: ["Piadas ou apelidos relacionados à raça ou à cor", "Comentários sobre cabelo ou características físicas", "Ofensas ou xingamentos racistas", "Exclusão ou isolamento", "Tratamento desigual", "Comentários sobre capacidade ou inteligência", "Comentários em redes sociais", "Outra situação", "Nunca presenciei/vivenciei", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Você já foi reprovado(a) alguma vez durante sua trajetória escolar?",
    type: "single", required: 1,
    options: ["Nunca", "Uma vez", "Duas vezes ou mais", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Já teve a necessidade de abandonar os estudos em algum momento?",
    type: "single", required: 1,
    options: ["Sim", "Não"],
    correct: null
  },
  {
    text: "Qual é o principal motivo das suas faltas?",
    type: "single", required: 1,
    options: ["Doença ou problemas de saúde", "Trabalho", "Necessidade de ajudar em casa", "Problemas familiares", "Transporte", "Falta de interesse", "Cansaço", "Dificuldade de aprendizagem", "Preconceito, bullying ou violência", "Outro"],
    correct: null
  },
  {
    text: "Na sua opinião, a realização de projetos sobre relações étnico-raciais ao longo de todo o ano pode contribuir para combater o racismo na escola?",
    type: "single", required: 1,
    options: ["Pode contribuir muito", "Pode contribuir", "Não acredito que contribua", "Não sei avaliar"],
    correct: null
  },
  {
    text: "Você trabalha?",
    type: "single", required: 1,
    options: ["Sim", "Não"],
    correct: null
  },
  {
    text: "Quantas horas você trabalha por semana aproximadamente?",
    type: "single", required: 1,
    options: ["Não trabalho", "Até 10 horas", "11 a 20 horas", "21 a 30 horas", "Mais de 30 horas"],
    correct: null
  },
  {
    text: "O trabalho interfere na sua frequência ou desempenho escolar?",
    type: "single", required: 1,
    options: ["Não", "Pouco", "Às vezes", "Frequentemente", "Não trabalho"],
    correct: null
  },
  {
    text: "Se o trabalho interfere em sua vida escolar, de que maneira?",
    type: "single", required: 1,
    options: ["Provoca faltas", "Dificulta fazer atividades e trabalhos", "Reduz meu tempo para estudar", "Provoca cansaço durante as aulas", "Já pensei em abandonar a escola por causa do trabalho", "Não interfere", "Não trabalho"],
    correct: null
  },
  {
    text: "Você conhece o ENEM e as formas de ingresso no ensino superior?",
    type: "single", required: 1,
    options: ["Conheço bem", "Conheço algumas", "Já ouvi falar", "Não conheço"],
    correct: null
  },
  {
    text: "Você pretende continuar estudando depois de concluir o Ensino Médio?",
    type: "single", required: 1,
    options: ["Sim", "Não", "Talvez", "Ainda não sei"],
    correct: null
  },
  {
    text: "Qual destas possibilidades você considera para depois do Ensino Médio?",
    type: "single", required: 1,
    options: ["Universidade pública", "Universidade pública ou faculdade privada", "Curso técnico", "Trabalhar imediatamente", "Empreender ou trabalhar por conta própria", "Ainda não sei", "Outro"],
    correct: null
  },
  {
    text: "Qual destes fatores pode dificultar sua continuidade nos estudos depois do Ensino Médio?",
    type: "single", required: 1,
    options: ["Necessidade de trabalhar", "Dificuldades financeiras", "Dificuldades de aprendizagem", "Falta de apoio ou incentivo", "Não tenho interesse", "Outro"],
    correct: null
  },
  {
    text: "Como você avalia sua frequência às aulas?",
    type: "single", required: 1,
    options: ["Muito boa", "Boa", "Regular", "Baixa"],
    correct: null
  },
  {
    text: "Você conhece políticas de ações afirmativas e cotas para ingresso no ensino superior?",
    type: "single", required: 1,
    options: ["Sim", "Conheço parcialmente", "Já ouvi falar", "Não conheço"],
    correct: null
  },
  {
    text: "A renda familiar é suficiente para atender às necessidades básicas da família?",
    type: "single", required: 1,
    options: ["Sim", "Não", "Na maioria das vezes", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Deixe aqui qualquer comentário, sugestão ou reflexão sobre este tema: (opcional)",
    type: "text", required: 0,
    options: [],
    correct: null
  }
];
