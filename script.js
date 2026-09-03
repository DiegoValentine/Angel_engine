/* =====================================================
   BABEL // TERMINAL
   ANGEL ENGINE INITIATIVE
===================================================== */


/* =====================================================
   VARIÁVEIS
===================================================== */

const terminalOutput = document.getElementById("terminal-output");
const commandInput = document.getElementById("commandInput");

let pessoaSelecionada = null;


/* =====================================================
   BANCO DE DADOS // PESSOAS
===================================================== */

const pessoas = {

    diego: {

        nome: "DIEGO SANTANA",

        foto: "diego.jpg",

        idade: "[REGISTRO INCOMPLETO]",

        orientacao: "HETEROSSEXUAL",

        cargo: "SEGURANÇA GERAL",

        status: "ATIVO",

        conversavel: true,

        audio: {
            arquivo: "diego.mp3",
            inicio: 0,
            fim: 18
        },

        personalidade: [
            "Inocente",
            "Lerdo",
            "Amigável",
            "Ingênuo",
            "Leal",
            "Curioso",
            "Sociável"
        ],

        caracteristicas: [
            "Confia facilmente nas pessoas.",
            "Possui dificuldade em manter a concentração.",
            "É extremamente sociável.",
            "Demonstra coragem mesmo quando não compreende completamente a situação.",
            "Possui cabelos grisalhos e fios brancos decorrentes da idade.",
            "Mantém boas relações com os outros funcionários.",
            "Demonstra desconfiança em relação às entidades celestiais."
        ],

        historia: `
Diego teve uma infância considerada normal e nunca demonstrou
interesse especial por ciência ou pesquisa.

Ingressou na BABEL acreditando que trabalharia em uma instalação
privada voltada para pesquisas biológicas e científicas.

Durante seus primeiros meses, começou a perceber que determinadas
áreas da instalação simplesmente não apareciam nos mapas oficiais.

Corredores terminavam em portas que não deveriam existir.
Setores apareciam em horários diferentes.
Algumas áreas eram retiradas dos registros logo depois de serem
descobertas.

Mesmo depois de perceber que havia algo errado, Diego decidiu
permanecer.

Atualmente trabalha na Segurança Geral.

Porém, existem registros não oficiais indicando que Diego já teve
contato com entidades classificadas dentro da BABEL.

A maioria desses contatos não foi registrada por ele.
`,

        entrada: `
ENTRADA NA BABEL:

Contratado inicialmente sem experiência relevante.

Durante os testes de admissão apresentou dificuldade de
concentração, mas demonstrou facilidade incomum para interagir
com outras pessoas.

Anotação do supervisor:

"Talvez seja exatamente por isso que ele seja útil."
`,

        pensamentos: {

            romulo:
                "Um cara inteligente demais e irritante demais. Parece que acorda todo dia pensando em como me chamar de burro.",

            isabelle:
                "Ela é muito inteligente. Às vezes parece que percebe coisas que ninguém mais percebe.",

            alessandra:
                "É divertida. Com ela eu consigo esquecer um pouco que esse lugar é completamente estranho.",

            uriel:
                "Eu não confio nele. Não sei o que ele é, mas definitivamente não quero descobrir do pior jeito.",

            barakiel:
                "Ainda pior. Ele observa demais e fala de menos. Não gosto de ficar perto dele."
        }

    },


    romulo: {

        nome: "RÔMULO OLIVEIRA",

        foto: "romulo.jpg",

        idade: "[REGISTRO INCOMPLETO]",

        orientacao: "GAY",

        cargo: "ENGENHEIRO BIOLÓGICO",

        status: "ATIVO",

        conversavel: true,

        audio: {
            arquivo:"romulo.mp3",
            inicio: 0,
            fim: 20
        },

        personalidade: [
            "Extremamente inteligente",
            "Confiante",
            "Observador",
            "Sarcástico",
            "Crítico",
            "Vaidoso"
        ],

        caracteristicas: [
            "Alto desempenho intelectual.",
            "Conhecimento avançado em biologia.",
            "Memória excepcional.",
            "Extremamente observador.",
            "Possui baixa tolerância para pessoas que considera lentas.",
            "Apresenta comportamento provocativo com Diego.",
            "Possui um dos olhos com aparência opaca e visão severamente prejudicada desse lado."
        ],

        historia: `
Rômulo demonstrou interesse por biologia e genética desde cedo.

Seu desempenho acadêmico chamou atenção de pesquisadores ligados
a uma instituição privada.

A instituição era, na realidade, uma das estruturas utilizadas
pela BABEL.

Inicialmente acreditava estar participando de pesquisas
convencionais.

Isso mudou quando encontrou relatórios descrevendo organismos
cuja origem não correspondia a nenhuma classificação terrestre.

Rômulo começou a questionar os pesquisadores.

Quanto mais questionava, maior se tornava seu acesso aos arquivos.

Com o tempo, descobriu informações que não deveriam estar
disponíveis para funcionários comuns.

Durante um acidente dentro do laboratório, sofreu uma lesão que
comprometeu permanentemente a visão de um dos olhos.

Depois do acidente, voltou ao trabalho ainda mais desconfiado.

Atualmente ocupa uma posição de alto nível dentro da divisão
biológica da BABEL.
`,

        entrada: `
ENTRADA NA BABEL:

Apresentou desempenho excepcional nos testes de admissão.

Durante a avaliação, aproximadamente 37% dos procedimentos
considerados "normais" foram questionados por ele.

Foi contratado mesmo assim.

Posteriormente descobriu-se que seus questionamentos estavam,
em diversos casos, corretos.
`,

        pensamentos: {

            diego:
                "Um desastre ambulante. É impressionante como ele consegue sobreviver neste lugar.",

            isabelle:
                "Inteligente. Muito inteligente. Às vezes acho que ela percebe coisas que nem deveria conseguir perceber.",

            alessandra:
                "Divertida, mas não leva quase nada a sério.",

            uriel:
                "Não deveria existir.",

            barakiel:
                "Ele não reage como um organismo comum..."
        }

    },


    isabelle: {

        nome: "ISABELLE ALENCAR",

        foto: "isabelle.jpg",

        idade: "[REGISTRO INCOMPLETO]",

        orientacao: "PANSEXUAL",

        cargo: "CHEFE DE ARQUITETURA",

        status: "ATIVO",

        conversavel: true,

        audio: {
            arquivo: "isabelle.mp3",
            inicio: 0,
            fim: 17
        },

        personalidade: [
            "Inteligente",
            "Assustada",
            "Observadora",
            "Cautelosa",
            "Sensível",
            "Analítica"
        ],

        caracteristicas: [
            "Excelente percepção espacial.",
            "Memória visual acima da média.",
            "Percebe detalhes arquitetônicos rapidamente.",
            "Evita setores considerados instáveis.",
            "Conhece profundamente a estrutura oficial da BABEL.",
            "Percebe alterações arquitetônicas que outros funcionários ignoram.",
            "Investiga mesmo quando demonstra medo."
        ],

        historia: `
Isabelle estudou arquitetura antes de ser recrutada pela BABEL.

Sua contratação aconteceu durante uma avaliação estrutural
aparentemente convencional.

Durante a análise, Isabelle encontrou corredores que não
correspondiam às plantas oficiais.

Algumas portas levavam para espaços inexistentes nos registros.

Outras estruturas pareciam mudar de posição.

Ela começou a registrar cada inconsistência.

Até o momento, foram confirmadas quatorze alterações estruturais
que não possuem explicação dentro dos modelos arquitetônicos
conhecidos.

Isabelle acabou promovida a Chefe de Arquitetura.

Possui autorização para modificar determinadas áreas internas,
mas não pode alterar estruturas de contenção sem autorização
superior.

Existe uma hipótese dentro da BABEL de que a arquitetura da
instalação não seja completamente fixa.

Isabelle considera essa hipótese possível.
`,

        entrada: `
ENTRADA NA BABEL:

Durante sua primeira inspeção registrou:

"Os corredores não fazem sentido."

Quatorze inconsistências estruturais foram posteriormente
confirmadas.

A descoberta resultou em sua promoção e aumento significativo
de acesso dentro da instalação.
`,

        pensamentos: {

            diego:
                "Ele é meio lerdo, mas é uma pessoa boa. Dá para confiar nele.",

            romulo:
                "Ele sabe demais. Às vezes acho que ele percebe coisas que nem deveria conseguir perceber.",

            alessandra:
                "Ela consegue me fazer rir.",

            uriel:
                "Eu não gosto de olhar para ele por muito tempo.",

            barakiel:
                "Ele observa o espaço. Não apenas as pessoas."
        }

    },


    alessandra: {

        nome: "ALESSANDRA PIMENTA",

        foto: "alessandra.jpg",

        idade: "[REGISTRO INCOMPLETO]",

        orientacao: "LÉSBICA",

        cargo: "GEÓLOGA / EXPLORADORA",

        status: "ATIVO",

        conversavel: true,

        audio: {
            arquivo: "alessandra.mp3",
            inicio: 0,
            fim: 19
        },

        personalidade: [
            "Boba",
            "Engraçada",
            "Divertida",
            "Extrovertida",
            "Sociável",
            "Espontânea"
        ],

        caracteristicas: [
            "Extremamente curiosa.",
            "A curiosidade frequentemente supera o medo.",
            "Especialização em geologia.",
            "Conhecimento em topologia.",
            "Gosta de explorar cavernas.",
            "Demonstra interesse por locais desconhecidos.",
            "Possui apenas metade do dedo mínimo de uma das mãos.",
            "A parte restante do dedo apresenta um pequeno cotoco."
        ],

        historia: `
Alessandra sempre demonstrou fascínio por lugares desconhecidos.

Cavernas, estruturas subterrâneas, regiões abandonadas e locais
que não apareciam em mapas despertavam sua curiosidade.

Seu conhecimento em geologia e topologia chamou a atenção da
BABEL.

Foi recrutada para auxiliar na exploração e mapeamento de
estruturas naturais e passagens subterrâneas.

Durante uma exploração, encontrou uma formação subterrânea que
não constava em nenhum mapa conhecido.

Durante a exploração, parte da passagem sofreu um deslocamento
repentino de rochas.

Alessandra perdeu aproximadamente metade do dedo mínimo.

Sobreviveu.

E voltou a explorar.

O acidente aparentemente não reduziu sua curiosidade.

Alguns relatórios afirmam que ela considera uma área proibida
como um convite para descobrir o que existe dentro dela.
`,

        entrada: `
ENTRADA NA BABEL:

Recrutada devido aos conhecimentos em geologia, topologia e
exploração.

Responsável pelo mapeamento de estruturas naturais e passagens
subterrâneas.

Ignora protocolos de segurança com frequência.

Anotação do supervisor:

"Ela parece considerar uma área proibida apenas como um convite."
`,

        pensamentos: {

            diego:
                "Ele é lerdo pra caramba, mas eu gosto dele. Pelo menos ele tenta ajudar.",

            romulo:
                "Inteligente, bonito e insuportável. Nessa ordem.",

            isabelle:
                "Ela precisa relaxar um pouco. Embora algumas das coisas que ela diz ter visto sejam reais.",

            uriel:
                "Ele me dá arrepios. E isso é estranho porque, infelizmente, ele é meio bonito.",

            barakiel:
                "Não quero ficar sozinha com ele. Nem se me pagarem."
        }

    },


    uriel: {

        nome: "URIEL",

        idade: "[DESCONHECIDA]",

        orientacao: "[N/A]",

        cargo: "ENTIDADE CELESTIAL",

        status: "ATIVO",

        conversavel: false,

        personalidade: [
            "Sereno",
            "Observador",
            "Desconhecido",
            "Não-humano"
        ],

        caracteristicas: [
            "Origem desconhecida.",
            "Classificação biológica inconclusiva.",
            "Comportamento predominantemente silencioso.",
            "Comportamento não-humano.",
            "Diretamente associado à Angel Engine.",
            "Mantido em área de acesso restrito."
        ],

        historia: `
Não existem registros confiáveis sobre Uriel antes de sua
chegada à BABEL.

Documentos antigos utilizam a classificação:

"UM ANJO"

Sua origem permanece desconhecida.

O método pelo qual chegou à instalação também permanece
classificado.

Uriel foi posteriormente incorporado aos projetos relacionados
à Angel Engine.

Pesquisas foram conduzidas envolvendo energia, manipulação
biológica e propriedades ainda não completamente compreendidas.

Os documentos apresentam classificações contraditórias.

Um dos registros mais antigos contém apenas a seguinte anotação:

"Não tentar definir aquilo que não compreendemos."
`,

        entrada: `
ENTRADA NA BABEL:

CLASSIFICADO.

ORIGEM: DESCONHECIDA.

MÉTODO DE CHEGADA: [REDACTED]

CLASSIFICAÇÃO: ENTIDADE CELESTIAL.

CONTENÇÃO: ESTÁVEL.

Não permitir que a entidade abandone a área designada.

Contato somente mediante autorização.
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

        nome: "BARAKIEL",

        idade: "[DESCONHECIDA]",

        orientacao: "[N/A]",

        cargo: "ENTIDADE CELESTIAL",

        status: "ATIVO",

        conversavel: false,

        personalidade: [
            "Desconhecido",
            "Observador",
            "Silencioso",
            "Imprevisível",
            "Não-humano"
        ],

        caracteristicas: [
            "Origem desconhecida.",
            "Comportamento altamente observacional.",
            "Comunicação extremamente limitada.",
            "Associado aos projetos da BABEL.",
            "Relação com outras entidades permanece desconhecida.",
            "Nível de ameaça ainda não determinado."
        ],

        historia: `
Os registros referentes a Barakiel são extremamente limitados.

A entidade aparece associada aos primeiros projetos envolvendo
entidades celestiais e a Angel Engine.

Não existe registro confiável sobre sua origem.

Também não existe documentação conclusiva sobre como chegou
à BABEL.

Barakiel permaneceu durante longos períodos em setores de
observação e contenção.

Alguns pesquisadores levantaram a hipótese de que a entidade
não esteja apenas observando os funcionários.

Existe a possibilidade de que esteja observando a própria
BABEL.

A hipótese permanece não confirmada.

Todos os registros relacionados foram classificados.
`,

        entrada: `
ENTRADA NA BABEL:

CLASSIFICADO.

ORIGEM: DESCONHECIDA.

CLASSIFICAÇÃO: ENTIDADE CELESTIAL.

CONTENÇÃO: ESTÁVEL.

Durante períodos prolongados de monitoramento, a entidade
permaneceu silenciosa.

Não estabelecer contato.

Não permanecer sozinho no setor de contenção.
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


/* =====================================================
   FUNÇÃO — ADICIONAR TEXTO
===================================================== */

function adicionarTexto(texto, classe = "") {

    const elemento = document.createElement("div");

    elemento.className = classe;

    elemento.textContent = texto;

    terminalOutput.appendChild(elemento);

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}


/* =====================================================
   FUNÇÃO — MOSTRAR COMANDO DIGITADO
===================================================== */

function mostrarComando(comando) {

    const linha = document.createElement("div");

    linha.className = "command-line";

    linha.innerHTML = `
        <span class="prompt">&gt;</span>
        <span class="user-command">${escaparHTML(comando)}</span>
    `;

    terminalOutput.appendChild(linha);
}


/* =====================================================
   FUNÇÃO — PROTEÇÃO HTML
===================================================== */

function escaparHTML(texto) {

    return texto
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =====================================================
   AJUDA
===================================================== */

function mostrarAjuda() {

    adicionarTexto(`
COMANDOS DISPONÍVEIS
────────────────────────────────

ajuda
    Exibe esta mensagem.

pessoas
    Lista todos os registros disponíveis.

status
    Exibe o estado atual do sistema.

sobre
    Exibe informações sobre a BABEL.

limpar
    Limpa o terminal.

conversar
    Inicia uma conversa com o último registro consultado.

────────────────────────────────

CONSULTA DE REGISTROS

Você também pode digitar diretamente o nome
de uma pessoa para abrir seu registro.

REGISTROS DISPONÍVEIS:

diego
romulo
isabelle
alessandra
uriel
barakiel

────────────────────────────────

EXEMPLO:

> diego

Depois:

> conversar
`, "response");

}


/* =====================================================
   LISTAR PESSOAS
===================================================== */

function listarPessoas() {

    adicionarTexto(`
REGISTROS DISPONÍVEIS
────────────────────────────────

[01] DIEGO SANTANA
     SEGURANÇA GERAL
     STATUS: ATIVO

[02] RÔMULO OLIVEIRA
     ENGENHEIRO BIOLÓGICO
     STATUS: ATIVO

[03] ISABELLE ALENCAR
     CHEFE DE ARQUITETURA
     STATUS: ATIVO

[04] ALESSANDRA PIMENTA
     GEÓLOGA / EXPLORADORA
     STATUS: ATIVO

[05] URIEL
     ENTIDADE CELESTIAL
     STATUS: ATIVO

[06] BARAKIEL
     ENTIDADE CELESTIAL
     STATUS: ATIVO

────────────────────────────────
Digite o nome do registro para consultar.
`, "response");

}


/* =====================================================
   STATUS
===================================================== */

function mostrarStatus() {

    adicionarTexto(`
STATUS DO SISTEMA
────────────────────────────────

BABEL CORE:          ONLINE
DATABASE:            ONLINE
CONTAINMENT:         STABLE
ANGEL ENGINE:        ONLINE
SECURITY:            ACTIVE
COMMUNICATION:       LIMITED

REGISTROS ATIVOS:    06

────────────────────────────────
`, "response");

}


/* =====================================================
   SOBRE
===================================================== */

function mostrarSobre() {

    adicionarTexto(`
BABEL SCIENTIFIC DIVISION
ANGEL ENGINE INITIATIVE

TERMINAL DE ACESSO RESTRITO

Este terminal pertence ao sistema interno
de gerenciamento de registros da BABEL.

NÍVEL DE ACESSO:
RESTRITO

Alguns arquivos podem apresentar informações
incompletas, corrompidas ou classificadas.

Não tente acessar setores sem autorização.

Não tente estabelecer contato com entidades
classificadas.

────────────────────────────────
`, "response");

}


/* =====================================================
   ÁUDIO
===================================================== */

function adicionarAudio(pessoa) {

    if (!pessoa.audio) {
        return null;
    }

    const container = document.createElement("div");

    container.className = "audio-container";

    const titulo = document.createElement("div");

    titulo.className = "audio-title";

    titulo.textContent = "REGISTRO DE ÁUDIO // ARQUIVO";

    const player = document.createElement("audio");

    player.className = "analog-audio";

    player.controls = true;

    player.preload = "metadata";

    player.src = pessoa.audio.arquivo;

    player.addEventListener("loadedmetadata", () => {

        const inicio = pessoa.audio.inicio || 0;
        const fim = pessoa.audio.fim;

        if (fim && fim <= player.duration) {
            player.currentTime = inicio;
        }

    });

    player.addEventListener("play", () => {

        const inicio = pessoa.audio.inicio || 0;
        const fim = pessoa.audio.fim;

        if (player.currentTime < inicio) {
            player.currentTime = inicio;
        }

        const verificarFim = () => {

            if (
                fim &&
                player.currentTime >= fim
            ) {

                player.pause();
                player.currentTime = inicio;

                player.removeEventListener(
                    "timeupdate",
                    verificarFim
                );
            }

        };

        player.addEventListener(
            "timeupdate",
            verificarFim
        );

    });

    container.appendChild(titulo);
    container.appendChild(player);

    return container;
}


/* =====================================================
   MOSTRAR REGISTRO
===================================================== */

function mostrarPessoa(chave) {

    const pessoa = pessoas[chave];

    if (!pessoa) {
        return;
    }

    pessoaSelecionada = chave;

    const container = document.createElement("div");

    container.className = "response person-record";


    /* -------------------------------------------------
       CABEÇALHO DO REGISTRO
    ------------------------------------------------- */

    const titulo = document.createElement("div");

    titulo.className = "person-name";

    titulo.textContent = pessoa.nome;

    container.appendChild(titulo);


    /* -------------------------------------------------
       FOTOGRAFIA
    ------------------------------------------------- */

    if (pessoa.foto) {

        const fotoContainer = document.createElement("div");

        fotoContainer.className = "person-photo-container";

        const foto = document.createElement("img");

        foto.className = "person-photo";

        foto.src = pessoa.foto;

        foto.alt = "Registro visual de " + pessoa.nome;

        foto.loading = "lazy";

        foto.addEventListener("error", () => {

            fotoContainer.innerHTML = "";

            const erroFoto = document.createElement("div");

            erroFoto.className = "photo-error";

            erroFoto.textContent =
                "[REGISTRO VISUAL INDISPONÍVEL]";

            fotoContainer.appendChild(erroFoto);

        });

        fotoContainer.appendChild(foto);

        container.appendChild(fotoContainer);
    }


    /* -------------------------------------------------
       IDENTIFICAÇÃO
    ------------------------------------------------- */

    const identificacao = document.createElement("div");

    identificacao.className = "person-section";

    identificacao.textContent = `
IDENTIFICAÇÃO
────────────────────────────────

NOME:          ${pessoa.nome}
IDADE:         ${pessoa.idade}
ORIENTAÇÃO:    ${pessoa.orientacao}
CARGO:         ${pessoa.cargo}
STATUS:        ${pessoa.status}
`;

    container.appendChild(identificacao);


    /* -------------------------------------------------
       PERSONALIDADE
    ------------------------------------------------- */

    const personalidade = document.createElement("div");

    personalidade.className = "person-section";

    personalidade.textContent = `
PERSONALIDADE
────────────────────────────────

${pessoa.personalidade
    .map(item => "• " + item)
    .join("\n")}
`;

    container.appendChild(personalidade);


    /* -------------------------------------------------
       CARACTERÍSTICAS
    ------------------------------------------------- */

    const caracteristicas = document.createElement("div");

    caracteristicas.className = "person-section";

    caracteristicas.textContent = `
CARACTERÍSTICAS
────────────────────────────────

${pessoa.caracteristicas
    .map(item => "• " + item)
    .join("\n")}
`;

    container.appendChild(caracteristicas);


    /* -------------------------------------------------
       HISTÓRIA
    ------------------------------------------------- */

    const historia = document.createElement("div");

    historia.className = "person-section";

    historia.textContent = `
HISTÓRICO
────────────────────────────────
${pessoa.historia}
`;

    container.appendChild(historia);


    /* -------------------------------------------------
       ENTRADA NA BABEL
    ------------------------------------------------- */

    const entrada = document.createElement("div");

    entrada.className = "person-section";

    entrada.textContent = pessoa.entrada;

    container.appendChild(entrada);


    /* -------------------------------------------------
       PENSAMENTOS
    ------------------------------------------------- */

    const pensamentos = document.createElement("div");

    pensamentos.className = "person-section";

    pensamentos.textContent = `
OPINIÕES REGISTRADAS
────────────────────────────────

DIEGO:
${pessoa.pensamentos.diego}

RÔMULO:
${pessoa.pensamentos.romulo}

ISABELLE:
${pessoa.pensamentos.isabelle}

ALESSANDRA:
${pessoa.pensamentos.alessandra}

URIEL:
${pessoa.pensamentos.uriel}

BARAKIEL:
${pessoa.pensamentos.barakiel}
`;

    container.appendChild(pensamentos);


    /* -------------------------------------------------
       ÁUDIO
    ------------------------------------------------- */

    const audio = adicionarAudio(pessoa);

    if (audio) {
        container.appendChild(audio);
    }


    /* -------------------------------------------------
       CONVERSAÇÃO
    ------------------------------------------------- */

    if (pessoa.conversavel) {

        const conversa = document.createElement("div");

        conversa.className = "person-section";

        conversa.textContent = `
CONVERSAÇÃO DISPONÍVEL.

Digite "conversar" para iniciar uma conversa
com este registro.
`;

        container.appendChild(conversa);

    } else {

        const bloqueio = document.createElement("div");

        bloqueio.className = "warning";

        bloqueio.textContent = `
COMUNICAÇÃO BLOQUEADA.

Este registro não possui protocolo de
conversação disponível.
`;

        container.appendChild(bloqueio);
    }


    terminalOutput.appendChild(container);

    terminalOutput.scrollTop =
        terminalOutput.scrollHeight;
}


/* =====================================================
   CONVERSAÇÃO
===================================================== */

function iniciarConversa(chave) {

    const pessoa = pessoas[chave];

    if (!pessoa) {

        adicionarTexto(
            "ERRO: nenhum registro selecionado.",
            "error"
        );

        return;
    }

    if (!pessoa.conversavel) {

        adicionarTexto(`
ERRO: COMUNICAÇÃO NÃO AUTORIZADA.

O protocolo de conversação não está disponível
para este registro.

AÇÃO BLOQUEADA.
`, "error");

        return;
    }

    adicionarTexto(`
────────────────────────────────
CANAL DE COMUNICAÇÃO
────────────────────────────────

REGISTRO: ${pessoa.nome}

Conexão estabelecida.

O que deseja perguntar?
`, "response");


    mostrarDialogo(chave, "inicio");
}


/* =====================================================
   ÁRVORES DE CONVERSAÇÃO
===================================================== */

const dialogos = {

    diego: {

        inicio: {
            pergunta:
                "Como você se sente trabalhando na BABEL?",

            respostas: {

                A: {
                    texto:
                        "Eu gosto daqui. Só acho que tem umas coisas estranhas demais.",

                    proxima: "medo"
                },

                B: {
                    texto:
                        "Normalmente é tranquilo. O problema são algumas áreas que eu não deveria entrar.",

                    proxima: "medo"
                },

                C: {
                    texto:
                        "Sinceramente? Às vezes eu acho que esse lugar é muito maior do que parece.",

                    proxima: "medo"
                }

            }
        },

        medo: {

            pergunta:
                "Você tem medo das entidades?",

            respostas: {

                A: {
                    texto:
                        "Tenho. Principalmente porque não sei o que elas são.",

                    proxima: "babel"
                },

                B: {
                    texto:
                        "Um pouco. Mas acho que algumas delas não querem machucar ninguém.",

                    proxima: "babel"
                },

                C: {
                    texto:
                        "Tenho mais medo de fazer alguma coisa errada perto delas.",

                    proxima: "babel"
                }

            }
        },

        babel: {

            pergunta:
                "Você acredita que a BABEL está escondendo alguma coisa?",

            respostas: {

                A: {
                    texto:
                        "Com certeza. Eu já vi portas que não apareciam nos mapas.",

                    proxima: "fim"
                },

                B: {
                    texto:
                        "Acho que sim, mas provavelmente é coisa de cientista que eu não entendo.",

                    proxima: "fim"
                },

                C: {
                    texto:
                        "Eu prefiro não pensar muito nisso.",

                    proxima: "fim"
                }

            }
        },

        fim: {

            pergunta:
                "A conversa parece ter chegado ao fim.",

            respostas: {

                A: {
                    texto:
                        "Talvez seja melhor voltar ao trabalho.",

                    proxima: null
                },

                B: {
                    texto:
                        "Não conte para ninguém que eu falei isso.",

                    proxima: null
                },

                C: {
                    texto:
                        "Se descobrir alguma coisa, me avisa.",

                    proxima: null
                }

            }
        }

    },


    romulo: {

        inicio: {

            pergunta:
                "Você acredita que a BABEL realmente sabe o que está fazendo?",

            respostas: {

                A: {
                    texto:
                        "Não. E é exatamente isso que me preocupa.",

                    proxima: "diego"
                },

                B: {
                    texto:
                        "Acredito que alguns sabem. O problema é que não contam tudo.",

                    proxima: "diego"
                },

                C: {
                    texto:
                        "A incompetência de alguns pesquisadores é assustadora.",

                    proxima: "diego"
                }

            }
        },

        diego: {

            pergunta:
                "Por que você implica tanto com Diego?",

            respostas: {

                A: {
                    texto:
                        "Porque ele é lento. É irritante.",

                    proxima: "uriel"
                },

                B: {
                    texto:
                        "Ele é inteligente em algumas coisas. Só não percebe.",

                    proxima: "uriel"
                },

                C: {
                    texto:
                        "Porque alguém precisa manter aquele homem vivo.",

                    proxima: "uriel"
                }

            }
        },

        uriel: {

            pergunta:
                "O que você acha de Uriel?",

            respostas: {

                A: {
                    texto:
                        "Não deveria existir.",

                    proxima: "fim"
                },

                B: {
                    texto:
                        "Não consigo determinar o que ele é.",

                    proxima: "fim"
                },

                C: {
                    texto:
                        "Ele quebra categorias biológicas demais para ser ignorado.",

                    proxima: "fim"
                }

            }
        },

        fim: {

            pergunta:
                "Você quer continuar falando?",

            respostas: {

                A: {
                    texto:
                        "Não. Já falei demais.",

                    proxima: null
                },

                B: {
                    texto:
                        "Talvez outra hora.",

                    proxima: null
                },

                C: {
                    texto:
                        "Desligue esse terminal.",

                    proxima: null
                }

            }
        }

    },


    isabelle: {

        inicio: {

            pergunta:
                "O que há de errado com a arquitetura da BABEL?",

            respostas: {

                A: {
                    texto:
                        "Os corredores não deveriam existir daquela forma.",

                    proxima: "mudancas"
                },

                B: {
                    texto:
                        "Algumas estruturas simplesmente não permanecem iguais.",

                    proxima: "mudancas"
                },

                C: {
                    texto:
                        "Eu não consigo explicar tudo que encontrei.",

                    proxima: "mudancas"
                }

            }
        },

        mudancas: {

            pergunta:
                "Você acha que a própria estrutura da BABEL está mudando?",

            respostas: {

                A: {
                    texto:
                        "Sim. E isso me assusta.",

                    proxima: "entidades"
                },

                B: {
                    texto:
                        "É uma possibilidade que eu não consigo descartar.",

                    proxima: "entidades"
                },

                C: {
                    texto:
                        "Espero que não. Porque isso significaria que não conhecemos este lugar.",

                    proxima: "entidades"
                }

            }
        },

        entidades: {

            pergunta:
                "O que você acha das entidades?",

            respostas: {

                A: {
                    texto:
                        "Eu prefiro não ficar olhando para elas.",

                    proxima: "fim"
                },

                B: {
                    texto:
                        "Não acho que sejam simples organismos.",

                    proxima: "fim"
                },

                C: {
                    texto:
                        "Acho que algumas delas percebem muito mais do que demonstram.",

                    proxima: "fim"
                }

            }
        },

        fim: {

            pergunta:
                "Você quer encerrar?",

            respostas: {

                A: {
                    texto:
                        "Sim.",

                    proxima: null
                },

                B: {
                    texto:
                        "Por enquanto.",

                    proxima: null
                },

                C: {
                    texto:
                        "Eu preciso voltar para a arquitetura.",

                    proxima: null
                }

            }
        }

    },


    alessandra: {

        inicio: {

            pergunta:
                "Por que você continua explorando áreas proibidas?",

            respostas: {

                A: {
                    texto:
                        "Porque ninguém sabe o que tem lá.",

                    proxima: "acidente"
                },

                B: {
                    texto:
                        "Porque alguém precisa descobrir.",

                    proxima: "acidente"
                },

                C: {
                    texto:
                        "Porque é divertido.",

                    proxima: "acidente"
                }

            }
        },

        acidente: {

            pergunta:
                "Você se arrepende do acidente que tirou parte do seu dedo?",

            respostas: {

                A: {
                    texto:
                        "Não. Eu descobri um lugar incrível naquele dia.",

                    proxima: "babel"
                },

                B: {
                    texto:
                        "Às vezes. Mas eu faria tudo de novo.",

                    proxima: "babel"
                },

                C: {
                    texto:
                        "Meu dedo não vai voltar mesmo. Então não adianta ficar triste.",

                    proxima: "babel"
                }

            }
        },

        babel: {

            pergunta:
                "Você já encontrou algo que não deveria existir?",

            respostas: {

                A: {
                    texto:
                        "Já. E provavelmente vou encontrar de novo.",

                    proxima: "fim"
                },

                B: {
                    texto:
                        "Talvez. Mas não vou contar ainda.",

                    proxima: "fim"
                },

                C: {
                    texto:
                        "Encontrei uma coisa que parecia estar esperando por mim.",

                    proxima: "fim"
                }

            }
        },

        fim: {

            pergunta:
                "Você quer continuar?",

            respostas: {

                A: {
                    texto:
                        "Depois. Tenho um lugar novo para explorar.",

                    proxima: null
                },

                B: {
                    texto:
                        "Não. Já falei demais.",

                    proxima: null
                },

                C: {
                    texto:
                        "Se eu encontrar alguma coisa estranha, eu volto.",

                    proxima: null
                }

            }
        }

    }

};


/* =====================================================
   MOSTRAR DIÁLOGO
===================================================== */

function mostrarDialogo(chave, etapa) {

    const dialogo = dialogos[chave];

    if (!dialogo || !dialogo[etapa]) {

        encerrarConversa();

        return;
    }

    const no = dialogo[etapa];

    adicionarTexto(`
${no.pergunta}

[A] ${no.respostas.A.texto}

[B] ${no.respostas.B.texto}

[C] ${no.respostas.C.texto}

[0] VOLTAR AO TERMINAL
`, "response");

}


/* =====================================================
   ESCOLHER RESPOSTA
===================================================== */

function escolherResposta(chave, etapa, escolha) {

    const dialogo = dialogos[chave];

    if (!dialogo || !dialogo[etapa]) {
        encerrarConversa();
        return;
    }

    const resposta = dialogo[etapa].respostas[escolha];

    if (!resposta) {

        adicionarTexto(
            "OPÇÃO INVÁLIDA.",
            "error"
        );

        mostrarDialogo(chave, etapa);

        return;
    }

    adicionarTexto(
        `VOCÊ: ${resposta.texto}`,
        "command-line"
    );

    if (!resposta.proxima) {

        adicionarTexto(`
────────────────────────────────
FIM DA CONVERSA
────────────────────────────────

Canal encerrado.
`, "response");

        return;
    }

    mostrarDialogo(chave, resposta.proxima);
}


/* =====================================================
   ENCERRAR CONVERSA
===================================================== */

function encerrarConversa() {

    adicionarTexto(`
────────────────────────────────
CANAL ENCERRADO
────────────────────────────────
Retornando ao terminal...
`, "response");

}


/* =====================================================
   LIMPAR TERMINAL
===================================================== */

function limparTerminal() {

    terminalOutput.innerHTML = "";

    pessoaSelecionada = null;

    adicionarTexto(`
BABEL // TERMINAL

TERMINAL LIMPO.

Digite "ajuda" para consultar os comandos.
`, "boot");

}


/* =====================================================
   PROCESSAR COMANDOS
===================================================== */

function processarComando(comando) {

    const comandoNormalizado =
        comando.trim().toLowerCase();

    if (!comandoNormalizado) {
        return;
    }


    /* ---------------------------------------------
       OPÇÃO DE CONVERSAÇÃO
    --------------------------------------------- */

    if (
        ["a", "b", "c", "0"].includes(comandoNormalizado)
        &&
        pessoaSelecionada
    ) {

        if (comandoNormalizado === "0") {

            encerrarConversa();

            pessoaSelecionada = null;

            return;
        }

        escolherResposta(
            pessoaSelecionada,
            etapaAtual,
            comandoNormalizado.toUpperCase()
        );

        return;
    }


    /* ---------------------------------------------
       COMANDOS PRINCIPAIS
    --------------------------------------------- */

    switch (comandoNormalizado) {

        case "ajuda":

            mostrarAjuda();

            break;


        case "pessoas":

            listarPessoas();

            break;


        case "status":

            mostrarStatus();

            break;


        case "sobre":

            mostrarSobre();

            break;


        case "limpar":

            limparTerminal();

            break;


        case "conversar":

            if (!pessoaSelecionada) {

                adicionarTexto(`
ERRO: NENHUM REGISTRO SELECIONADO.

Consulte primeiro uma pessoa.

Exemplo:

> diego

Depois:

> conversar
`, "error");

            } else {

                iniciarConversa(
                    pessoaSelecionada
                );

            }

            break;


        default:

            if (pessoas[comandoNormalizado]) {

                mostrarPessoa(
                    comandoNormalizado
                );

            } else {

                adicionarTexto(`
COMANDO NÃO RECONHECIDO:

"${comandoNormalizado}"

Digite "ajuda" para consultar os comandos
disponíveis.
`, "error");

            }

            break;
    }
}


/* =====================================================
   CONTROLE DA ETAPA DA CONVERSA
===================================================== */

let etapaAtual = "inicio";


/*
    Pequena adaptação para manter a etapa atual
    durante a conversa.
*/

const mostrarDialogoOriginal = mostrarDialogo;

mostrarDialogo = function(chave, etapa) {

    etapaAtual = etapa;

    mostrarDialogoOriginal(chave, etapa);
};


/* =====================================================
   INPUT
===================================================== */

commandInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key !== "Enter") {
            return;
        }

        const comando = commandInput.value.trim();

        if (!comando) {
            return;
        }

        mostrarComando(comando);

        commandInput.value = "";

        processarComando(comando);

        commandInput.focus();
    }
);


/* =====================================================
   FOCO AUTOMÁTICO
===================================================== */

document.addEventListener(
    "click",
    function() {

        commandInput.focus();

    }
);


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

commandInput.focus();