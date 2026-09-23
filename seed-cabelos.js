// Pesquisa 2: Estética, identidade e valorização dos cabelos naturais
// type: single | multiple | text | required: 1 (obrigatória) 0 (opcional)
module.exports = [
  {
    text: "Em qual ano do Ensino Médio você estuda?",
    type: "single", required: 1,
    options: ["1º ano", "2º ano", "3º ano"],
    correct: null
  },
  {
    text: "Como você se autodeclara em relação à raça/cor?",
    type: "single", required: 1,
    options: ["Branca", "Preta", "Parda", "Amarela", "Indígena", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Como você descreve seu cabelo atualmente?",
    type: "single", required: 1,
    options: ["Crespo", "Cacheado", "Ondulado", "Alisado ou com outro procedimento químico que altere sua textura natural", "Liso", "Outro"],
    correct: null
  },
  {
    text: "Você já passou ou está passando por um processo de transição capilar?",
    type: "single", required: 1,
    options: ["Sim, já concluí", "Sim, estou passando atualmente", "Não", "Não sei se minha experiência pode ser considerada transição capilar", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Caso tenha passado ou esteja passando pela transição capilar, há quanto tempo você iniciou esse processo?",
    type: "single", required: 1,
    options: ["Menos de 6 meses", "De 6 meses a 1 ano", "De 1 a 2 anos", "Mais de 2 anos", "Não passei pelo processo de transição capilar", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Caso tenha iniciado uma transição capilar, quais fatores contribuíram para essa decisão? (marque todas as que se aplicam)",
    type: "multiple", required: 1,
    options: ["Desejo de conhecer ou usar meu cabelo natural", "Maior aceitação da minha aparência", "Cuidados com a saúde do cabelo", "Insatisfação com procedimentos químicos", "Influência ou apoio de familiares e amigos", "Representatividade em filmes, televisão, internet ou redes sociais", "Contato com discussões sobre identidade negra", "Não passei pelo processo de transição capilar", "Prefiro não responder", "Outro"],
    correct: null
  },
  {
    text: "Antes de iniciar a transição capilar, como você avaliava sua relação com seu cabelo?",
    type: "single", required: 1,
    options: ["Muito positiva", "Positiva", "Neutra", "Pouco positiva", "Negativa", "Não passei pelo processo de transição capilar", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Durante a transição capilar, como foi seu processo de adaptação ao cabelo natural?",
    type: "single", required: 1,
    options: ["Muito tranquilo", "Tranquilo na maior parte do tempo", "Teve momentos fáceis e difíceis", "Foi difícil em alguns momentos", "Foi muito difícil", "Não passei pelo processo de transição capilar", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Durante esse processo, você recebeu apoio de outras pessoas?",
    type: "single", required: 1,
    options: ["Recebi muito apoio", "Recebi algum apoio", "Recebi pouco apoio", "Não recebi apoio", "Não senti necessidade de apoio", "Não passei pelo processo de transição capilar", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Durante a transição capilar, você recebeu comentários sobre seu cabelo que lhe causaram desconforto?",
    type: "single", required: 1,
    options: ["Frequentemente", "Às vezes", "Raramente", "Nunca", "Não passei pelo processo de transição capilar", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Depois de iniciar a transição capilar, como você percebe sua relação com seu cabelo?",
    type: "single", required: 1,
    options: ["Melhorou muito", "Melhorou", "Permaneceu semelhante", "Oscilou ao longo do processo", "Ficou mais difícil", "Ainda estou construindo essa relação", "Não passei pelo processo de transição capilar", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Qual é a importância do seu cabelo para a maneira como você se percebe?",
    type: "single", required: 1,
    options: ["Muito importante", "Importante", "Tem alguma importância", "Pouco importante", "Não é importante para mim", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Atualmente, como você se sente em relação ao seu cabelo?",
    type: "single", required: 1,
    options: ["Muito confortável", "Confortável", "Nem confortável nem desconfortável", "Pouco confortável", "Desconfortável", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Na sua percepção, em que medida o cabelo e a aparência podem influenciar a autoestima dos jovens?",
    type: "single", required: 1,
    options: ["Influenciam muito", "Influenciam", "Influenciam em algumas situações", "Influenciam pouco", "Não influenciam", "Não sei avaliar"],
    correct: null
  },
  {
    text: "Você considera que as diferentes formas de usar o cabelo podem fazer parte da expressão da identidade de uma pessoa?",
    type: "single", required: 1,
    options: ["Sim, muito", "Sim, em alguma medida", "Depende da pessoa", "Não necessariamente", "Não sei avaliar"],
    correct: null
  },
  {
    text: "Com que frequência você se sente representado(a) ao ver pessoas com cabelos crespos, cacheados ou outros cabelos naturais em filmes, na televisão, na publicidade e nas redes sociais?",
    type: "single", required: 1,
    options: ["Sempre", "Frequentemente", "Às vezes", "Raramente", "Nunca", "Não sei avaliar"],
    correct: null
  },
  {
    text: "Na sua percepção, em que medida os padrões de beleza divulgados pela mídia e pelas redes sociais influenciam a forma como os jovens percebem seus cabelos e sua aparência?",
    type: "single", required: 1,
    options: ["Influenciam muito", "Influenciam", "Influenciam em algumas situações", "Influenciam pouco", "Não influenciam", "Não sei avaliar"],
    correct: null
  },
  {
    text: "Você percebe que, atualmente, existe maior valorização dos cabelos crespos, cacheados e naturais do que em anos anteriores?",
    type: "single", required: 1,
    options: ["Sim, percebo uma valorização muito maior", "Sim, percebo uma valorização um pouco maior", "Não percebo mudança significativa", "Percebo menor valorização", "Não sei avaliar"],
    correct: null
  },
  {
    text: "Na sua percepção, de que maneira a escola contribui para a valorização da diversidade de cabelos, aparências e identidades?",
    type: "single", required: 1,
    options: ["Contribui muito", "Contribui", "Contribui por meio de algumas ações", "Contribui e há possibilidades de ampliar essas ações", "Não sei avaliar"],
    correct: null
  },
  {
    text: "Você se sente confortável para usar seu cabelo da maneira que prefere no ambiente escolar?",
    type: "single", required: 1,
    options: ["Sempre", "Na maioria das vezes", "Às vezes", "Raramente", "Nunca", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Você considera importante que a escola desenvolva atividades sobre identidade, autoestima, padrões de beleza e valorização da estética negra?",
    type: "single", required: 1,
    options: ["Muito importante", "Importante", "Pouco importante", "Não considero necessário", "Não sei avaliar"],
    correct: null
  },
  {
    text: "Que tipos de ações você considera interessantes para fortalecer esse trabalho na escola? (marque todas as que se aplicam)",
    type: "multiple", required: 1,
    options: ["Rodas de conversa", "Exposições e mostras culturais", "Trabalhos sobre história e cultura afro-brasileira", "Discussões sobre padrões de beleza e redes sociais", "Oficinas sobre identidade e autoestima", "Participação de profissionais, artistas ou referências negras da comunidade", "Literatura, filmes e produções de autores negros", "Projetos desenvolvidos ao longo de todo o ano", "Outras ações"],
    correct: null
  },
  {
    text: "Como você avalia sua relação com seu cabelo atualmente?",
    type: "single", required: 1,
    options: ["Muito positiva", "Positiva", "Neutra", "Ainda estou construindo uma relação mais positiva", "Pouco positiva", "Negativa", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Na sua opinião, ações de valorização da cultura e da identidade negra desenvolvidas ao longo de todo o ano podem contribuir para o respeito à diversidade e para o sentimento de pertencimento dos estudantes?",
    type: "single", required: 1,
    options: ["Podem contribuir muito", "Podem contribuir", "Podem contribuir em alguma medida", "Não considero que faça diferença", "Não sei avaliar"],
    correct: null
  },
  {
    text: "Caso queira, deixe uma reflexão ou sugestão sobre cabelo, identidade, autoestima, padrões de beleza ou valorização da diversidade na escola. (opcional)",
    type: "text", required: 0,
    options: [],
    correct: null
  }
];
