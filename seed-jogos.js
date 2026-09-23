// Pesquisa 1: Relações étnico-raciais nos jogos escolares
// type: single | multiple | text | required: 1 (obrigatória) 0 (opcional)
module.exports = [
  {
    text: "Em qual ano do Ensino Médio você estuda?",
    type: "single", required: 1,
    options: ["1º ano", "2º ano", "3º ano"],
    correct: null
  },
  {
    text: "De que forma você costuma participar dos jogos escolares?",
    type: "single", required: 1,
    options: ["Como atleta/jogador(a)", "Como torcida/espectador(a)", "Na organização ou apoio", "Ainda não participei", "Outro"],
    correct: null
  },
  {
    text: "Como você avalia, de modo geral, sua experiência nos jogos escolares?",
    type: "single", required: 1,
    options: ["Muito positiva", "Positiva", "Pouco positiva", "Ainda não participei", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Em que medida você considera que os jogos escolares favorecem o respeito e a convivência entre estudantes?",
    type: "single", required: 1,
    options: ["Favorecem muito", "Favorecem", "Favorecem parcialmente", "Favorecem pouco", "Não sei avaliar"],
    correct: null
  },
  {
    text: "Durante jogos, competições ou torcidas, com que frequência você percebe atitudes de respeito entre estudantes de diferentes grupos?",
    type: "single", required: 1,
    options: ["Sempre", "Frequentemente", "Às vezes", "Raramente", "Nunca", "Não sei avaliar"],
    correct: null
  },
  {
    text: "Você já percebeu, durante jogos escolares, brincadeiras, comentários, apelidos ou gestos relacionados à cor da pele, cabelo, aparência ou origem racial de algum estudante?",
    type: "single", required: 1,
    options: ["Sim, mais de uma vez", "Sim, uma vez", "Não", "Não tenho certeza", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Quando situações desse tipo acontecem, como você geralmente as percebe?",
    type: "single", required: 1,
    options: ["Como brincadeiras, sem intenção de ofender", "Como situações que podem constranger ou desrespeitar", "Depende do contexto", "Não sei avaliar", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Em quais espaços essas situações podem ocorrer com mais facilidade?",
    type: "single", required: 1,
    options: ["Durante as partidas", "Nas arquibancadas ou torcidas", "Antes ou depois dos jogos", "Em grupos de mensagens ou redes sociais", "Em provocações entre equipes", "Em outros espaços", "Não percebi situações desse tipo", "Prefiro não responder", "Outro"],
    correct: null
  },
  {
    text: "Que tipos de situações você considera importantes observar e prevenir nos jogos escolares?",
    type: "single", required: 1,
    options: ["Apelidos relacionados à cor da pele", "Comentários sobre cabelo ou características físicas", "Ofensas ou xingamentos de conteúdo racial", "Imitações, gestos ou “brincadeiras” com estereótipos raciais", "Exclusão ou tratamento desigual", "Comentários discriminatórios nas redes sociais", "Não sei identificar", "Outro"],
    correct: null
  },
  {
    text: "Na sua percepção, quando ocorre uma situação de desrespeito durante os jogos, os estudantes sabem a quem recorrer?",
    type: "single", required: 1,
    options: ["Sim, claramente", "Em parte", "Pouco", "Não sei avaliar", "Outro"],
    correct: null
  },
  {
    text: "Como você avalia a importância da presença e da orientação dos professores, da organização e da equipe escolar durante os jogos?",
    type: "single", required: 1,
    options: ["Muito importante", "Importante", "Pouco importante", "Não considero importante", "Não sei avaliar"],
    correct: null
  },
  {
    text: "Na sua percepção, orientações prévias sobre respeito, racismo e convivência podem contribuir para tornar os jogos mais seguros e acolhedores?",
    type: "single", required: 1,
    options: ["Podem contribuir muito", "Podem contribuir", "Podem contribuir parcialmente", "Não fariam diferença", "Não sei avaliar"],
    correct: null
  },
  {
    text: "Quais medidas você considera mais úteis para fortalecer o respeito durante os jogos escolares? (marque todas as que se aplicam)",
    type: "multiple", required: 1,
    options: ["Orientações antes do início das competições", "Combinados de convivência entre as equipes", "Mediação de professores e da organização durante os jogos", "Campanhas educativas produzidas pelos estudantes", "Cartazes ou mensagens de conscientização", "Conversas após situações de conflito", "Trabalho conjunto com professores de Educação Física e outras áreas", "Outro"],
    correct: null
  },
  {
    text: "Você considera que todos os estudantes, independentemente de raça ou cor, têm as mesmas oportunidades de participação e valorização nos jogos escolares?",
    type: "single", required: 1,
    options: ["Sim", "Na maioria das vezes", "Às vezes", "Não sei avaliar", "Prefiro não responder"],
    correct: null
  },
  {
    text: "Na sua percepção, os jogos escolares podem contribuir para fortalecer o pertencimento e a integração entre os estudantes?",
    type: "single", required: 1,
    options: ["Podem contribuir muito", "Podem contribuir", "Podem contribuir parcialmente", "Podem contribuir pouco", "Não sei avaliar"],
    correct: null
  },
  {
    text: "Você considera importante que o esporte escolar também seja utilizado para discutir respeito às diferenças e o enfrentamento ao racismo?",
    type: "single", required: 1,
    options: ["Muito importante", "Importante", "Pouco importante", "Não considero importante", "Não sei avaliar"],
    correct: null
  },
  {
    text: "Que tipo de ação educativa combinaria melhor com a realidade dos jogos escolares da escola?",
    type: "single", required: 1,
    options: ["Campanha criada pelos próprios estudantes", "Breve orientação antes das partidas", "Código de respeito entre as equipes", "Atividades integradas às aulas de Educação Física", "Projeto interdisciplinar", "Produção de vídeos, cartazes ou mensagens para as torcidas", "Outro"],
    correct: null
  },
  {
    text: "Pensando nas experiências positivas que já existem nos jogos escolares, qual aspecto você considera mais importante preservar?",
    type: "single", required: 1,
    options: ["Integração entre as turmas", "Espírito de equipe", "Participação dos estudantes", "Respeito entre os participantes", "Mediação dos profissionais da escola", "Organização das competições", "Torcida e envolvimento da comunidade escolar", "Outro"],
    correct: null
  },
  {
    text: "Em qual aspecto você acredita que os jogos escolares poderiam avançar ainda mais para fortalecer o respeito e a convivência?",
    type: "single", required: 1,
    options: ["Orientações sobre respeito e diversidade", "Prevenção de provocações ofensivas", "Acolhimento de estudantes que se sintam desrespeitados", "Participação das torcidas", "Mediação de conflitos", "Atividades educativas antes ou depois dos jogos", "Outro"],
    correct: null
  },
  {
    text: "Registre uma sugestão de ação que poderia tornar os jogos escolares ainda mais acolhedores e respeitosos para todos os estudantes.",
    type: "text", required: 1,
    options: [],
    correct: null
  }
];
