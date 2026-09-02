// ============================================================
// BABEL // TERMINAL
// ANGEL ENGINE INITIATIVE
// ============================================================

const terminalOutput = document.getElementById("terminal-output");
const commandInput = document.getElementById("commandInput");


// ============================================================
// BANCO DE DADOS DOS PERSONAGENS
// ============================================================

const pessoas = {

    diego: {
        nome: "Diego Santana",
        idade: "23 anos",
        orientacao: "Heterossexual",
        cargo: "Segurança Geral",
        status: "ATIVO",

        personalidade: [
            "Inocente",
            "Lerdo",
            "Amigável",
            "Ingênuo",
            "Leal",
            "Curioso"
        ],

        caracteristicas: [
            "Extremamente sociável",
            "Tem dificuldade para perceber situações óbvias",
            "Costuma confiar facilmente nas pessoas",
            "Demonstra coragem mesmo sem entender completamente o perigo",
            "Mantém boas relações com praticamente toda a equipe",
            "Desconfia fortemente das entidades celestiais"
        ],

        historia: `
Diego teve uma infância relativamente normal e nunca demonstrou
interesse especial por ciência ou pesquisa.

Sua entrada na Babel aconteceu através do setor de segurança.

Inicialmente, acreditava que trabalharia em uma instalação científica
privada especializada em pesquisas biológicas.

Com o tempo, percebeu que existiam áreas da instalação que não
apareciam nos mapas oficiais.

Portas sem identificação.
Corredores que pareciam mudar de posição.
Funcionários que evitavam determinadas áreas.
E registros que não deveriam existir.

Mesmo depois de perceber que a Babel escondia algo muito maior,
Diego decidiu permanecer.

Atualmente trabalha na Segurança Geral da instalação, controlando
acessos, monitorando setores e respondendo a situações de emergência.

Oficialmente, Diego não possui autorização para interagir diretamente
com entidades classificadas.

Na prática, frequentemente ignora essa regra.
`,

        entradaBabel: `
Candidato considerado pouco experiente.

Relatório psicológico:

"Extremamente sociável. Demonstra dificuldade em manter
concentração durante tarefas prolongadas."

Observação do supervisor:

"Talvez seja exatamente por isso que ele seja útil."

Aprovado para o setor de Segurança Geral.
`,

        pensamentos: {
            romulo: "Um cara inteligente demais e irritante demais. Parece que acorda todo dia pensando em como me chamar de burro.",
            isabelle: "Ela é muito inteligente. Às vezes parece que percebe coisas que ninguém mais percebe.",
            alessandra: "É divertida. Com ela eu consigo esquecer um pouco que esse lugar é completamente estranho.",
            uriel: "Eu não confio nele. Não sei o que ele é, mas definitivamente não quero descobrir do pior jeito.",
            barakiel: "Ainda pior. Ele observa demais e fala de menos. Não gosto de ficar perto dele."
        }
    },


    romulo: {
        nome: "Rômulo Oliveira",
        idade: "24 anos",
        orientacao: "Gay",
        cargo: "Engenheiro Biológico",
        status: "ATIVO",

        personalidade: [
            "Extremamente inteligente",
            "Confiante",
            "Observador",
            "Sarcástico",
            "Crítico",
            "Vaidoso"
        ],

        caracteristicas: [
            "Alto desempenho intelectual",
            "Excelente conhecimento de biologia",
            "Memória excepcional",
            "Extremamente observador",
            "Impaciente com pessoas que considera lentas",
            "Costuma provocar Diego"
        ],

        historia: `
Desde jovem, Rômulo demonstrava interesse incomum por biologia,
genética e comportamento de organismos.

Seu desempenho acadêmico chamou atenção de diversos pesquisadores.

Aos 24 anos, foi recrutado para trabalhar em um laboratório privado.

O que ele não sabia era que o laboratório fazia parte da Babel.

Durante os primeiros meses, acreditava estar trabalhando em pesquisas
biológicas convencionais.

Isso mudou quando começou a receber documentos sobre organismos
que não apresentavam nenhuma origem terrestre identificável.

Rômulo começou a questionar os pesquisadores responsáveis.

Quanto mais perguntas fazia, mais acesso recebia.

Atualmente possui autorização parcial para consultar documentos
relacionados às entidades.

Ele sabe muito mais sobre a Babel do que deveria.
`,

        entradaBabel: `
Resultado dos testes cognitivos:

QI OPERACIONAL: ELEVADO
CONHECIMENTO BIOLÓGICO: EXCEPCIONAL
CAPACIDADE DE ANÁLISE: EXCEPCIONAL

37% dos testes apresentaram questionamentos espontâneos
sobre procedimentos considerados "normais".

Conclusão:

"Candidato excessivamente questionador.

Recomendação: contratação."

Aprovado para Engenharia Biológica.
`,

        pensamentos: {
            diego: "Um desastre ambulante. Não sei como alguém consegue ser tão lerdo e ainda sobreviver trabalhando aqui.",
            isabelle: "Inteligente. Muito inteligente. Talvez inteligente demais para alguém que ainda não percebeu tudo o que está acontecendo.",
            alessandra: "Divertida, mas não leva quase nada a sério. Em alguns momentos isso é útil.",
            uriel: "Não deveria existir. Não biologicamente. Não logicamente. E definitivamente não dentro de uma instalação humana.",
            barakiel: "Ele não reage como um organismo comum. Parece calcular as pessoas antes de interagir com elas."
        }
    },


    isabelle: {
        nome: "Isabelle Alencar",
        idade: "22 anos",
        orientacao: "Pansexual",
        cargo: "Chefe de Arquitetura",
        status: "ATIVO",

        personalidade: [
            "Inteligente",
            "Assustada",
            "Observadora",
            "Cautelosa",
            "Sensível",
            "Analítica"
        ],

        caracteristicas: [
            "Excelente percepção espacial",
            "Memória visual elevada",
            "Observa detalhes que outros ignoram",
            "Evita setores considerados instáveis",
            "Conhece completamente a estrutura oficial da Babel",
            "Percebe alterações arquitetônicas"
        ],

        historia: `
Isabelle estudou arquitetura e inicialmente acreditava que trabalharia
em projetos convencionais.

Foi recrutada pela Babel durante uma avaliação estrutural.

Durante suas primeiras semanas, percebeu algo estranho.

Alguns corredores não possuíam proporções compatíveis com a estrutura
externa da instalação.

Algumas portas levavam a lugares que não deveriam existir.

E algumas salas simplesmente não apareciam nos projetos arquitetônicos.

Isabelle começou a registrar todas as inconsistências.

Seu trabalho chamou a atenção da administração.

Ela acabou sendo promovida a Chefe de Arquitetura.

Atualmente possui autorização para alterar partes da estrutura interna
da Babel.

Existe, porém, uma regra específica:

"NÃO ALTERAR A ESTRUTURA DO SETOR DE CONTENÇÃO SEM AUTORIZAÇÃO."

Isabelle nunca descobriu exatamente por quê.
`,

        entradaBabel: `
Primeira observação registrada:

"Os corredores não fazem sentido."

A candidata apresentou 14 inconsistências estruturais durante
a primeira inspeção.

Todas foram posteriormente confirmadas.

Promovida para liderança do setor de arquitetura.

Nível de acesso: ALTO.
`,

        pensamentos: {
            diego: "Ele é meio lerdo, mas é uma pessoa boa. Acho que confio nele mais do que deveria.",
            romulo: "Ele sabe demais. E parece gostar de lembrar todo mundo disso.",
            alessandra: "Ela consegue me fazer rir mesmo quando eu estou morrendo de medo desse lugar.",
            uriel: "Eu não gosto de olhar para ele por muito tempo. Existe alguma coisa errada na forma como ele permanece parado.",
            barakiel: "Ele observa o espaço. Não apenas as pessoas. O próprio espaço."
        }
    },


    alessandra: {
        nome: "Alessandra Pimenta",
        idade: "23 anos",
        orientacao: "Lesbiana",
        cargo: "Operações Internas",
        status: "ATIVO",

        personalidade: [
            "Boba",
            "Engraçada",
            "Divertida",
            "Extrovertida",
            "Sociável",
            "Espontânea"
        ],

        caracteristicas: [
            "Facilidade para conversar com qualquer pessoa",
            "Utiliza humor em situações de tensão",
            "Extremamente sociável",
            "Costuma fazer brincadeiras em momentos inadequados",
            "Tem facilidade para criar vínculos",
            "É uma das pessoas mais descontraídas da equipe"
        ],

        historia: `
Alessandra entrou na Babel sem conhecer seu verdadeiro propósito.

Foi contratada para trabalhar no setor de Operações Internas,
auxiliando na comunicação entre departamentos e na organização
das atividades internas.

Ela rapidamente se tornou conhecida por conversar com praticamente
todo mundo dentro da instalação.

Diferente de outros funcionários, Alessandra nunca demonstrou
grande interesse pelos documentos classificados.

Ou pelo menos era isso que parecia.

Com o passar do tempo, começou a presenciar acontecimentos
que não conseguia explicar.

Ruídos vindos de setores vazios.

Funcionários entrando em áreas onde não deveriam estar.

E algumas coisas que ela prefere não comentar.

Mesmo assim, permaneceu na Babel.

Quando perguntaram o motivo, respondeu:

"Porque alguém precisa manter esse lugar minimamente divertido."
`,

        entradaBabel: `
Avaliação inicial:

Boa comunicação interpessoal.
Excelente adaptação a ambientes de pressão.
Uso frequente de humor como mecanismo de enfrentamento.

Durante a entrevista, a candidata fez uma piada sobre o entrevistador.

Foi contratada.

Observação:

"Talvez tenhamos cometido um erro."
`,

        pensamentos: {
            diego: "Ele é lerdo pra caramba, mas eu gosto dele. Pelo menos ele tenta ajudar.",
            romulo: "Inteligente, bonito e insuportável. Nessa ordem.",
            isabelle: "Ela precisa relaxar um pouco. Embora algumas das coisas que ela diz ter visto sejam reais.",
            uriel: "Ele me dá arrepios. E isso é estranho porque, infelizmente, ele é meio bonito.",
            barakiel: "Não quero ficar sozinha com ele. Nem se me pagarem."
        }
    },


    uriel: {
        nome: "Uriel",
        idade: "DESCONHECIDA",
        orientacao: "NÃO APLICÁVEL",
        cargo: "Entidade Celestial",
        status: "ATIVO",

        personalidade: [
            "Sereno",
            "Observador",
            "Desconhecido",
            "Não-humano"
        ],

        caracteristicas: [
            "Origem desconhecida",
            "Classificação biológica inconclusiva",
            "Comportamento predominantemente silencioso",
            "Não apresenta comportamento humano convencional",
            "Associado diretamente ao Angel Engine",
            "Mantido em área restrita da Babel"
        ],

        historia: `
Não existem registros confiáveis sobre a existência de Uriel antes
de sua chegada à Babel.

Os primeiros documentos encontrados utilizam apenas uma descrição:

"UM ANJO."

Sua origem permanece desconhecida.

Não existem registros confirmando onde ele foi encontrado,
como foi capturado ou como foi transportado.

Essas informações permanecem classificadas.

Uriel passou a fazer parte dos projetos relacionados ao Angel Engine.

A entidade é mantida dentro da Babel e utilizada em pesquisas
relacionadas à geração e manipulação de energia.

Nenhum funcionário possui uma explicação completa sobre sua natureza.

Um documento antigo simplesmente diz:

"Não tentar definir aquilo que não compreendemos."
`,

        entradaBabel: `
REGISTRO CLASSIFICADO

ORIGEM: DESCONHECIDA
MÉTODO DE OBTENÇÃO: [REDACTED]
CLASSIFICAÇÃO: ENTIDADE CELESTIAL

STATUS DE CONTENÇÃO: ESTÁVEL

AVISO:

NÃO PERMITIR QUE A ENTIDADE DEIXE A ÁREA DESIGNADA.

NÃO ESTABELECER CONTATO SEM AUTORIZAÇÃO.
`,

        pensamentos: {
            diego: "ACESSO NEGADO.",
            romulo: "ACESSO NEGADO.",
            isabelle: "ACESSO NEGADO.",
            alessandra: "ACESSO NEGADO.",
            barakiel: "ACESSO NEGADO."
        }
    },


    barakiel: {
        nome: "Barakiel",
        idade: "DESCONHECIDA",
        orientacao: "NÃO APLICÁVEL",
        cargo: "Entidade Celestial",
        status: "ATIVO",

        personalidade: [
            "Desconhecido",
            "Observador",
            "Silencioso",
            "Imprevisível",
            "Não-humano"
        ],

        caracteristicas: [
            "Origem desconhecida",
            "Comportamento altamente observacional",
            "Pouca comunicação registrada",
            "Associado aos projetos da Babel",
            "Relacionamento desconhecido com outras entidades",
            "Nível de ameaça não determinado"
        ],

        historia: `
Os registros sobre Barakiel são ainda mais escassos.

Sua existência aparece associada aos primeiros projetos envolvendo
entidades celestiais e o Angel Engine.

Não existem informações públicas sobre sua origem.

Não existe registro confiável explicando como ele chegou à Babel.

Os poucos documentos disponíveis indicam que sua presença está
relacionada aos setores de observação e contenção.

Alguns pesquisadores acreditam que Barakiel não seja apenas uma
entidade mantida pela Babel.

Existe a possibilidade de que ele esteja, de alguma forma,
observando a própria Babel.

Essa hipótese nunca foi oficialmente confirmada.

Todos os documentos relacionados permanecem classificados.
`,

        entradaBabel: `
REGISTRO CLASSIFICADO

ORIGEM: DESCONHECIDA
CLASSIFICAÇÃO: ENTIDADE CELESTIAL

STATUS DE CONTENÇÃO: ESTÁVEL

OBSERVAÇÃO:

A entidade permanece em silêncio durante a maior parte
dos períodos de monitoramento.

NÃO ESTABELECER CONTATO SEM AUTORIZAÇÃO.

NÃO PERMANECER SOZINHO NO SETOR DE CONTENÇÃO.
`,

        pensamentos: {
            diego: "ACESSO NEGADO.",
            romulo: "ACESSO NEGADO.",
            isabelle: "ACESSO NEGADO.",
            alessandra: "ACESSO NEGADO.",
            uriel: "ACESSO NEGADO."
        }
    }

};


// ============================================================
// FUNÇÃO PARA ADICIONAR TEXTO AO TERMINAL
// ============================================================

function adicionarTexto(texto, classe = "response") {

    const elemento = document.createElement("div");

    elemento.className = classe;

    elemento.textContent = texto;

    terminalOutput.appendChild(elemento);

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}


// ============================================================
// MOSTRAR COMANDO DIGITADO
// ============================================================

function mostrarComando(comando) {

    const elemento = document.createElement("div");

    elemento.className = "command-line";

    const prompt = document.createElement("span");

    prompt.className = "prompt";

    prompt.textContent = ">";

    const texto = document.createElement("span");

    texto.textContent = " " + comando;

    elemento.appendChild(prompt);
    elemento.appendChild(texto);

    terminalOutput.appendChild(elemento);

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}


// ============================================================
// AJUDA
// ============================================================

function mostrarAjuda() {

    adicionarTexto(`
╔════════════════════════════════════════╗
║             BABEL // AJUDA             ║
╚════════════════════════════════════════╝

COMANDOS DISPONÍVEIS
----------------------------------------

ajuda
Mostra os comandos disponíveis.

pessoas
Lista todos os indivíduos registrados.

status
Mostra o estado atual do sistema.

sobre
Exibe informações sobre o terminal.

limpar
Limpa o terminal.


INDIVÍDUOS REGISTRADOS
----------------------------------------

diego
romulo
isabelle
alessandra
uriel
barakiel


CONSULTA
----------------------------------------

Digite diretamente o nome de um indivíduo
para acessar seu arquivo.

Exemplo:

> diego

----------------------------------------
`);
}


// ============================================================
// LISTAR PESSOAS
// ============================================================

function listarPessoas() {

    adicionarTexto(`
╔════════════════════════════════════════╗
║        INDIVÍDUOS REGISTRADOS          ║
╚════════════════════════════════════════╝

HUMANOS
----------------------------------------

[01] Diego Santana
     CARGO: Segurança Geral
     STATUS: ATIVO

[02] Rômulo Oliveira
     CARGO: Engenheiro Biológico
     STATUS: ATIVO

[03] Isabelle Alencar
     CARGO: Chefe de Arquitetura
     STATUS: ATIVO

[04] Alessandra Pimenta
     CARGO: Operações Internas
     STATUS: ATIVO


ENTIDADES
----------------------------------------

[05] Uriel
     CARGO: Entidade Celestial
     STATUS: ATIVO

[06] Barakiel
     CARGO: Entidade Celestial
     STATUS: ATIVO


TOTAL DE REGISTROS: 06
`);
}


// ============================================================
// STATUS
// ============================================================

function mostrarStatus() {

    adicionarTexto(`
╔════════════════════════════════════════╗
║           STATUS DO SISTEMA            ║
╚════════════════════════════════════════╝

TERMINAL................. ONLINE
REDE..................... ONLINE
BANCO DE DADOS........... ONLINE
SISTEMA DE SEGURANÇA..... ONLINE

----------------------------------------

INDIVÍDUOS HUMANOS....... 04
ENTIDADES................ 02

ATIVOS................... 06
INATIVOS................. 00

INTEGRIDADE.............. 97%

----------------------------------------

URIEL.................... ESTÁVEL
BARAKIEL................. ESTÁVEL

----------------------------------------
`);
}


// ============================================================
// SOBRE
// ============================================================

function mostrarSobre() {

    adicionarTexto(`
╔════════════════════════════════════════╗
║             BABEL TERMINAL             ║
╚════════════════════════════════════════╝

SISTEMA........ BABEL-OS
VERSÃO......... 0.7.13

DIVISÃO........ BABEL SCIENTIFIC DIVISION
PROJETO........ ANGEL ENGINE INITIATIVE

NÍVEL DE ACESSO:
RESTRITO

----------------------------------------

Este terminal pertence à divisão científica
da Babel.

Todos os registros armazenados neste sistema
são propriedade da organização.

A reprodução ou cópia não autorizada de
qualquer documento está sujeita a medidas
disciplinares.

----------------------------------------

"Conhecimento é apenas perigoso quando
alguém não está preparado para ele."

----------------------------------------
`);
}


// ============================================================
// MOSTRAR PERSONAGEM
// ============================================================

function mostrarPessoa(chave) {

    const pessoa = pessoas[chave];

    if (!pessoa) {

        adicionarTexto(`
╔════════════════════════════════════════╗
║                ERRO                    ║
╚════════════════════════════════════════╝

INDIVÍDUO NÃO ENCONTRADO.

O nome informado não corresponde a nenhum
registro disponível.

Digite "ajuda" para consultar os indivíduos.
`, "error");

        return;
    }


    let registro = `

╔════════════════════════════════════════╗
║          ARQUIVO INDIVIDUAL            ║
╚════════════════════════════════════════╝

IDENTIFICAÇÃO
----------------------------------------

NOME:
${pessoa.nome}

IDADE:
${pessoa.idade}

ORIENTAÇÃO:
${pessoa.orientacao}

CARGO:
${pessoa.cargo}

STATUS:
${pessoa.status}


[ PERSONALIDADE ]
----------------------------------------

`;


    pessoa.personalidade.forEach(item => {
        registro += `• ${item}\n`;
    });


    registro += `

[ CARACTERÍSTICAS ]
----------------------------------------

`;


    pessoa.caracteristicas.forEach(item => {
        registro += `• ${item}\n`;
    });


    registro += `

[ HISTÓRICO ]
----------------------------------------

${pessoa.historia.trim()}


[ ENTRADA NA BABEL ]
----------------------------------------

${pessoa.entradaBabel.trim()}


[ PENSAMENTOS / OPINIÕES ]
----------------------------------------

`;


    const nomes = {
        diego: "Diego Santana",
        romulo: "Rômulo Oliveira",
        isabelle: "Isabelle Alencar",
        alessandra: "Alessandra Pimenta",
        uriel: "Uriel",
        barakiel: "Barakiel"
    };


    for (const chavePessoa in pessoa.pensamentos) {

        registro += `
${nomes[chavePessoa]}:
${pessoa.pensamentos[chavePessoa]}

`;
    }


    registro += `
----------------------------------------

╔════════════════════════════════════════╗
║          FIM DO REGISTRO               ║
╚════════════════════════════════════════╝
`;


    adicionarTexto(registro);
}


// ============================================================
// LIMPAR
// ============================================================

function limparTerminal() {

    terminalOutput.innerHTML = "";

    adicionarTexto(`
BABEL-OS

Terminal reinicializado.

Conexão estabelecida.
Sistema online.

Digite "ajuda" para consultar os comandos.
`);
}


// ============================================================
// PROCESSADOR DE COMANDOS
// ============================================================

function processarComando(comando) {

    const entrada = comando
        .trim()
        .toLowerCase();


    if (entrada === "ajuda" || entrada === "help") {

        mostrarAjuda();
        return;
    }


    if (
        entrada === "pessoas" ||
        entrada === "individuos" ||
        entrada === "indivíduos"
    ) {

        listarPessoas();
        return;
    }


    if (entrada === "status") {

        mostrarStatus();
        return;
    }


    if (entrada === "sobre" || entrada === "about") {

        mostrarSobre();
        return;
    }


    if (entrada === "limpar" || entrada === "clear") {

        limparTerminal();
        return;
    }


    if (pessoas[entrada]) {

        mostrarPessoa(entrada);
        return;
    }


    adicionarTexto(`
COMANDO NÃO RECONHECIDO.

Entrada:
${entrada}

Digite "ajuda" para consultar os comandos
disponíveis.
`, "error");
}


// ============================================================
// ENTER
// ============================================================

commandInput.addEventListener("keydown", function(event) {

    if (event.key !== "Enter") {
        return;
    }


    const comando = commandInput.value.trim();


    if (comando === "") {
        return;
    }


    mostrarComando(comando);

    commandInput.value = "";

    processarComando(comando);

});


// ============================================================
// FOCO NO TERMINAL
// ============================================================

document.addEventListener("click", function() {

    commandInput.focus();

});


window.addEventListener("load", function() {

    commandInput.focus();

    terminalOutput.scrollTop =
        terminalOutput.scrollHeight;

});