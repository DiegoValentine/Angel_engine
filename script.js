// ============================================================
// BABEL // TERMINAL
// SISTEMA PRINCIPAL
// ============================================================

const terminalOutput = document.getElementById("terminal-output");
const commandInput = document.getElementById("commandInput");


// ============================================================
// VARIÁVEIS DO SISTEMA
// ============================================================

let pessoaSelecionada = null;

let conversaAtiva = false;
let personagemAtual = null;
let noAtual = null;


// ============================================================
// REGISTROS
// ============================================================

const pessoas = {

    diego: {
        nome: "DIEGO SANTANA",
        tipo: "HUMANO",
        cargo: "SEGURANÇA GERAL",
        status: "ATIVO",

        personalidade:
            "Inocente, lerdo, amigável, ingênuo, leal, curioso e sociável.",

        caracteristicas:
            "Apresenta cabelos grisalhos e algumas mechas completamente cinzas. É consideravelmente mais velho que os demais integrantes humanos. Possui facilidade para conversar com outras pessoas, mas tende a confiar demais nos outros.",

        historia:
            "Diego teve uma infância relativamente comum e nunca demonstrou interesse especial pela área científica. Entrou para a BABEL acreditando que trabalharia em uma instalação científica e biológica privada. Com o tempo, percebeu que existiam áreas que não apareciam nos mapas oficiais da instalação. Mesmo depois de descobrir parte dos segredos da organização, decidiu permanecer. Atualmente trabalha na Segurança Geral e, ocasionalmente, acaba tendo contato com setores e entidades classificados.",

        entrada:
            "Foi contratado inicialmente para uma função de segurança. Seus superiores consideraram sua personalidade excessivamente sociável e sua dificuldade de concentração como possíveis problemas. Um dos responsáveis pelo recrutamento registrou: \"Talvez seja exatamente por isso que ele seja útil.\"",

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
        },

        audio: {
            arquivo: "diego.mp3",
            inicio: 0,
            fim: 18
        },

        conversavel: true
    },


    romulo: {
        nome: "RÔMULO OLIVEIRA",
        tipo: "HUMANO",
        cargo: "ENGENHEIRO BIOLÓGICO",
        status: "ATIVO",

        personalidade:
            "Extremamente inteligente, confiante, observador, sarcástico, crítico e vaidoso.",

        caracteristicas:
            "Possui desempenho intelectual elevado, excelente conhecimento de biologia e memória excepcional. Apresenta um dos olhos opaco e embaçado, com visão severamente prejudicada nesse lado.",

        historia:
            "Desde cedo demonstrou interesse por biologia e genética. Seu desempenho acadêmico chamou a atenção de pesquisadores e ele acabou sendo recrutado para trabalhar em um laboratório privado que, na realidade, fazia parte da BABEL. Inicialmente acreditava estar participando de pesquisas convencionais. Isso mudou quando encontrou relatórios relacionados a organismos cuja origem não parecia ser terrestre. Durante um procedimento de alta contenção, um acidente de laboratório provocou uma lesão permanente em um de seus olhos. Mesmo após o acidente, Rômulo retornou ao trabalho e passou a investigar ainda mais os segredos da organização.",

        entrada:
            "Apresentou resultados excepcionais nos testes de recrutamento. Em 37% dos procedimentos avaliados, questionou protocolos considerados normais. Foi contratado para atuar diretamente em pesquisas biológicas.",

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
        },

        audio: {
            arquivo: "romulo.mp3",
            inicio: 0,
            fim: 20
        },

        conversavel: true
    },


    isabelle: {
        nome: "ISABELLE ALENCAR",
        tipo: "HUMANO",
        cargo: "CHEFE DE ARQUITETURA",
        status: "ATIVO",

        personalidade:
            "Inteligente, assustada, observadora, cautelosa, sensível e analítica.",

        caracteristicas:
            "Possui excelente percepção espacial e memória visual. É capaz de perceber pequenas alterações em estruturas, corredores e ambientes. Evita setores considerados instáveis e demonstra preocupação constante com a arquitetura da BABEL.",

        historia:
            "Isabelle estudava arquitetura quando foi recrutada durante uma avaliação estrutural de uma das instalações da BABEL. Durante a análise, percebeu que alguns corredores e portas não correspondiam às plantas oficiais. Inicialmente acreditou que fossem erros de documentação. Depois encontrou outras inconsistências. Ao todo, quatorze alterações estruturais foram confirmadas. Isabelle acabou sendo promovida a chefe de arquitetura e recebeu acesso a informações que poucos funcionários possuem.",

        entrada:
            "Durante sua primeira avaliação, registrou apenas uma frase: \"Os corredores não fazem sentido.\" Após a confirmação de quatorze inconsistências estruturais, recebeu autorização para supervisionar a arquitetura interna da instalação.",

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
        },

        audio: {
            arquivo: "isabelle.mp3",
            inicio: 0,
            fim: 16
        },

        conversavel: true
    },


    alessandra: {
        nome: "ALESSANDRA PIMENTA",
        tipo: "HUMANO",
        cargo: "GEÓLOGA / EXPLORADORA",
        status: "ATIVO",

        personalidade:
            "Boba, engraçada, divertida, extrovertida, sociável e espontânea.",

        caracteristicas:
            "Especialista em geologia e topologia. Possui apenas metade do dedo mínimo de uma das mãos devido a um acidente durante uma exploração. É extremamente curiosa e demonstra fascínio por cavernas, estruturas subterrâneas e áreas desconhecidas da BABEL.",

        historia:
            "Alessandra sempre teve fascínio por lugares desconhecidos, cavernas, estruturas subterrâneas e locais abandonados. Seu conhecimento de geologia e topologia chamou a atenção da BABEL, que a recrutou para trabalhos de exploração. Durante uma expedição em uma estrutura subterrânea que não constava nos mapas, uma passagem desabou enquanto ela tentava atravessá-la. O acidente resultou na perda de metade de seu dedo mínimo. Apesar disso, Alessandra continuou explorando. O acidente não diminuiu sua curiosidade. Na verdade, parece ter feito o efeito contrário.",

        entrada:
            "Foi recrutada por sua experiência em geologia, topologia e exploração. Atualmente auxilia no mapeamento de estruturas naturais e passagens desconhecidas da Torre. Um supervisor registrou: \"Ela parece considerar uma área proibida apenas como um convite.\"",

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
        },

        audio: {
            arquivo: "alessandra.mp3",
            inicio: 0,
            fim: 15
        },

        conversavel: true
    },


    uriel: {
        nome: "URIEL",
        tipo: "ENTIDADE CELESTIAL",
        cargo: "ENTIDADE CELESTIAL",
        status: "ATIVO",

        personalidade:
            "Sereno, observador, desconhecido e não-humano.",

        caracteristicas:
            "Origem desconhecida. Classificação biológica inconclusiva. Apresenta comportamento não-humano e está diretamente relacionado à iniciativa ANGEL ENGINE.",

        historia:
            "Não existem registros confiáveis sobre Uriel antes de sua chegada à BABEL. Documentos antigos fazem referência a ele simplesmente como \"UM ANJO\". Sua origem e o método utilizado para trazê-lo à instalação permanecem classificados. Atualmente encontra-se associado aos projetos da ANGEL ENGINE.",

        entrada:
            "ORIGEM: DESCONHECIDA\nMÉTODO DE TRANSFERÊNCIA: [REDACTED]\nCLASSIFICAÇÃO: ENTIDADE CELESTIAL\nCONTENÇÃO: ESTÁVEL\nCONTATO: NÃO AUTORIZADO",

        pensamentos: {
            diego: "ACESSO NEGADO.",
            romulo: "ACESSO NEGADO.",
            isabelle: "ACESSO NEGADO.",
            alessandra: "ACESSO NEGADO.",
            barakiel: "ACESSO NEGADO."
        },

        audio: null,

        conversavel: false
    },


    barakiel: {
        nome: "BARAKIEL",
        tipo: "ENTIDADE CELESTIAL",
        cargo: "ENTIDADE CELESTIAL",
        status: "ATIVO",

        personalidade:
            "Desconhecido, observador, silencioso, imprevisível e não-humano.",

        caracteristicas:
            "Origem desconhecida. Demonstra comportamento altamente observacional e apresenta pouca ou nenhuma comunicação conhecida. Está associado aos primeiros projetos envolvendo entidades celestiais da BABEL.",

        historia:
            "Os registros sobre Barakiel são extremamente limitados. Documentos antigos indicam que sua presença está relacionada aos primeiros projetos envolvendo entidades celestiais. Não existe confirmação sobre sua origem ou sobre como chegou à BABEL. Alguns relatórios sugerem que Barakiel pode observar não apenas os funcionários, mas a própria estrutura da instalação. Essa hipótese permanece sem confirmação.",

        entrada:
            "ORIGEM: DESCONHECIDA\nCLASSIFICAÇÃO: ENTIDADE CELESTIAL\nCONTENÇÃO: ESTÁVEL\nCOMUNICAÇÃO: NÃO REGISTRADA\nCONTATO: PROIBIDO",

        pensamentos: {
            diego: "ACESSO NEGADO.",
            romulo: "ACESSO NEGADO.",
            isabelle: "ACESSO NEGADO.",
            alessandra: "ACESSO NEGADO.",
            uriel: "ACESSO NEGADO."
        },

        audio: null,

        conversavel: false
    }

};


// ============================================================
// ÁRVORE DE CONVERSAS
// ============================================================

const dialogos = {

    // --------------------------------------------------------
    // DIEGO
    // --------------------------------------------------------

    diego: {

        inicio: {
            fala:
                "Então... você queria falar comigo? Espero que não seja nada muito complicado.",

            opcoes: {
                A: {
                    texto: "Estou procurando informações sobre a BABEL.",
                    proximo: "babel"
                },

                B: {
                    texto: "Só queria conversar.",
                    proximo: "conversa"
                },

                C: {
                    texto: "Queria saber o que você acha deste lugar.",
                    proximo: "lugar"
                }
            }
        },

        babel: {
            fala:
                "Sobre a BABEL? Olha... eu trabalho aqui há bastante tempo e ainda descubro corredor que eu nunca tinha visto.",

            opcoes: {
                A: {
                    texto: "Você está dizendo que a instalação muda?",
                    proximo: "mudanca"
                },

                B: {
                    texto: "Você conhece todos os setores?",
                    proximo: "setores"
                },

                C: {
                    texto: "Você não acha isso estranho?",
                    proximo: "estranho"
                }
            }
        },

        mudanca: {
            fala:
                "Eu não sei se muda. Talvez os mapas estejam errados. Mas... já aconteceu de eu voltar pelo mesmo caminho e ele simplesmente não parecer o mesmo.",

            opcoes: {
                A: {
                    texto: "Isso nunca te assustou?",
                    proximo: "medo"
                },

                B: {
                    texto: "Você contou isso para alguém?",
                    proximo: "contou"
                },

                C: {
                    texto: "Então você também percebeu.",
                    proximo: "percebeu"
                }
            }
        },

        setores: {
            fala:
                "Todos? Nem de longe. Tem lugar aqui que eu nem sabia que existia até alguém mandar eu fazer segurança por lá.",

            opcoes: {
                A: {
                    texto: "Você já entrou em algum setor proibido?",
                    proximo: "proibido"
                },

                B: {
                    texto: "E você não ficou curioso?",
                    proximo: "curioso"
                },

                C: {
                    texto: "Isso parece perigoso.",
                    proximo: "perigoso"
                }
            }
        },

        estranho: {
            fala:
                "É estranho, claro. Mas depois de um tempo trabalhando aqui, você aprende uma coisa: quanto mais você pergunta, mais coisa estranha aparece.",

            opcoes: {
                A: {
                    texto: "Então você evita perguntar?",
                    proximo: "evita"
                },

                B: {
                    texto: "Você parece acostumado.",
                    proximo: "acostumado"
                },

                C: {
                    texto: "Mesmo assim, você continua aqui.",
                    proximo: "continua"
                }
            }
        },

        conversa: {
            fala:
                "Conversar eu consigo. Só não espera que eu tenha respostas inteligentes igual o Rômulo.",

            opcoes: {
                A: {
                    texto: "Você e o Rômulo não se dão bem?",
                    proximo: "romulo"
                },

                B: {
                    texto: "Você gosta de trabalhar aqui?",
                    proximo: "trabalho"
                },

                C: {
                    texto: "Você confia nas pessoas daqui?",
                    proximo: "confianca"
                }
            }
        },

        lugar: {
            fala:
                "Sinceramente? Eu gosto das pessoas. O lugar em si... bom, digamos que eu prefiro não ficar sozinho em alguns corredores.",

            opcoes: {
                A: {
                    texto: "Quais corredores?",
                    proximo: "corredores"
                },

                B: {
                    texto: "Você tem medo de alguma coisa?",
                    proximo: "medo"
                },

                C: {
                    texto: "E das entidades?",
                    proximo: "entidades"
                }
            }
        },

        romulo: {
            fala:
                "O Rômulo é inteligente demais e sabe disso. Às vezes parece que ele acorda só para me chamar de burro.",

            opcoes: {
                A: {
                    texto: "Mas você gosta dele?",
                    proximo: "fim"
                },

                B: {
                    texto: "Você acha que ele sabe algo importante?",
                    proximo: "fim"
                },

                C: {
                    texto: "Vocês já discutiram feio?",
                    proximo: "fim"
                }
            }
        },

        trabalho: {
            fala:
                "Gosto das pessoas. Do trabalho eu gosto quando não mandam a gente para aqueles setores estranhos.",

            opcoes: {
                A: {
                    texto: "Você pensa em sair?",
                    proximo: "fim"
                },

                B: {
                    texto: "Então por que continua?",
                    proximo: "fim"
                },

                C: {
                    texto: "Você parece gostar daqui.",
                    proximo: "fim"
                }
            }
        },

        confianca: {
            fala:
                "Eu confio fácil demais. Já me disseram isso várias vezes. Talvez seja meu maior defeito.",

            opcoes: {
                A: {
                    texto: "Você se arrepende disso?",
                    proximo: "fim"
                },

                B: {
                    texto: "Então você confia em mim?",
                    proximo: "fim"
                },

                C: {
                    texto: "Você deveria ser mais cuidadoso.",
                    proximo: "fim"
                }
            }
        },

        corredores: {
            fala:
                "Tem alguns que eu prefiro não mencionar. Não quero descobrir se falar deles faz alguma coisa acontecer.",

            opcoes: {
                A: {
                    texto: "Isso foi uma piada?",
                    proximo: "fim"
                },

                B: {
                    texto: "Você realmente acredita nisso?",
                    proximo: "fim"
                },

                C: {
                    texto: "Agora eu quero conhecer esses corredores.",
                    proximo: "fim"
                }
            }
        },

        medo: {
            fala:
                "Medo? Claro que eu tenho. Só tento não demonstrar. Principalmente quando estou trabalhando.",

            opcoes: {
                A: {
                    texto: "Do que você tem medo?",
                    proximo: "fim"
                },

                B: {
                    texto: "Você já viu alguma coisa?",
                    proximo: "fim"
                },

                C: {
                    texto: "Eu achei que você fosse mais corajoso.",
                    proximo: "fim"
                }
            }
        },

        entidades: {
            fala:
                "Das entidades eu não gosto. Principalmente Uriel e Barakiel. Tem alguma coisa neles que não parece certa.",

            opcoes: {
                A: {
                    texto: "Você já falou com algum deles?",
                    proximo: "fim"
                },

                B: {
                    texto: "Você acha que eles são perigosos?",
                    proximo: "fim"
                },

                C: {
                    texto: "Eu também não confiaria.",
                    proximo: "fim"
                }
            }
        },

        contou: {
            fala:
                "Contei para uma pessoa. Ela me disse para esquecer. Então eu fiz o que qualquer pessoa sensata faria: continuei pensando nisso.",

            opcoes: {
                A: {
                    texto: "Você é mesmo curioso.",
                    proximo: "fim"
                },

                B: {
                    texto: "Isso não parece sensato.",
                    proximo: "fim"
                },

                C: {
                    texto: "Eu faria a mesma coisa.",
                    proximo: "fim"
                }
            }
        },

        percebeu: {
            fala:
                "Então eu não sou o único. Isso é... sinceramente, não sei se é bom ou ruim.",

            opcoes: {
                A: {
                    texto: "Talvez seja bom.",
                    proximo: "fim"
                },

                B: {
                    texto: "Definitivamente é ruim.",
                    proximo: "fim"
                },

                C: {
                    texto: "Talvez devêssemos investigar.",
                    proximo: "fim"
                }
            }
        },

        proibido: {
            fala:
                "Já. Mas prefiro não contar quais. Segurança existe justamente para ninguém perguntar essas coisas.",

            opcoes: {
                A: {
                    texto: "Agora fiquei ainda mais curioso.",
                    proximo: "fim"
                },

                B: {
                    texto: "Entendi.",
                    proximo: "fim"
                },

                C: {
                    texto: "Você deveria contar.",
                    proximo: "fim"
                }
            }
        },

        curioso: {
            fala:
                "Curioso? Eu sou. Só tento não deixar a curiosidade me matar. Até agora está funcionando.",

            opcoes: {
                A: {
                    texto: "Até agora?",
                    proximo: "fim"
                },

                B: {
                    texto: "Você fala isso como se fosse normal.",
                    proximo: "fim"
                },

                C: {
                    texto: "Você é maluco.",
                    proximo: "fim"
                }
            }
        },

        perigoso: {
            fala:
                "É. Por isso eu tento ficar perto das áreas onde consigo correr rápido se alguma coisa der errado.",

            opcoes: {
                A: {
                    texto: "Boa estratégia.",
                    proximo: "fim"
                },

                B: {
                    texto: "Isso não é uma estratégia.",
                    proximo: "fim"
                },

                C: {
                    texto: "Vou lembrar disso.",
                    proximo: "fim"
                }
            }
        },

        evita: {
            fala:
                "Às vezes. Mas eu sou curioso demais para simplesmente esquecer.",

            opcoes: {
                A: {
                    texto: "Então você continua investigando?",
                    proximo: "fim"
                },

                B: {
                    texto: "Isso vai acabar mal.",
                    proximo: "fim"
                },

                C: {
                    texto: "Eu entendo.",
                    proximo: "fim"
                }
            }
        },

        acostumado: {
            fala:
                "Acostumado não é a palavra. Acho que eu só aprendi a fingir que estou.",

            opcoes: {
                A: {
                    texto: "Você está com medo agora?",
                    proximo: "fim"
                },

                B: {
                    texto: "Você esconde bem.",
                    proximo: "fim"
                },

                C: {
                    texto: "Eu também fingiria.",
                    proximo: "fim"
                }
            }
        },

        continua: {
            fala:
                "Porque eu ainda acho que tem gente boa aqui. E alguém precisa proteger essas pessoas.",

            opcoes: {
                A: {
                    texto: "Você se considera um deles?",
                    proximo: "fim"
                },

                B: {
                    texto: "Isso é admirável.",
                    proximo: "fim"
                },

                C: {
                    texto: "Você deveria se proteger também.",
                    proximo: "fim"
                }
            }
        },

        fim: {
            fala:
                "Bom... acho que já falei mais do que deveria. Melhor voltarmos ao terminal antes que alguém perceba.",

            opcoes: {}
        }
    },


    // --------------------------------------------------------
    // RÔMULO
    // --------------------------------------------------------

    romulo: {

        inicio: {
            fala:
                "Você veio falar comigo. Espero que tenha uma pergunta que realmente valha meu tempo.",

            opcoes: {
                A: {
                    texto: "O que você sabe sobre a BABEL?",
                    proximo: "babel"
                },

                B: {
                    texto: "Quero saber sobre os experimentos.",
                    proximo: "experimentos"
                },

                C: {
                    texto: "Quero saber sobre você.",
                    proximo: "voce"
                }
            }
        },

        babel: {
            fala:
                "A BABEL não é um laboratório comum. Se você ainda acredita nisso, está muito atrasado.",

            opcoes: {
                A: {
                    texto: "Quando você percebeu?",
                    proximo: "descoberta"
                },

                B: {
                    texto: "Você sabe quem comanda tudo?",
                    proximo: "comando"
                },

                C: {
                    texto: "Por que você continua aqui?",
                    proximo: "continua"
                }
            }
        },

        experimentos: {
            fala:
                "Alguns experimentos não deveriam ter sido realizados. Outros nunca deveriam ter sido descobertos.",

            opcoes: {
                A: {
                    texto: "Você participou deles?",
                    proximo: "acidente"
                },

                B: {
                    texto: "Você tem medo deles?",
                    proximo: "medo"
                },

                C: {
                    texto: "Você acha que os experimentos são necessários?",
                    proximo: "necessarios"
                }
            }
        },

        voce: {
            fala:
                "Sobre mim? Inteligente, bonito, ocupado. Imagino que isso seja suficiente.",

            opcoes: {
                A: {
                    texto: "Você sempre foi assim?",
                    proximo: "personalidade"
                },

                B: {
                    texto: "E o seu olho?",
                    proximo: "olho"
                },

                C: {
                    texto: "Você confia em alguém aqui?",
                    proximo: "confianca"
                }
            }
        },

        descoberta: {
            fala:
                "Quando encontrei relatórios sobre organismos cuja origem não correspondia a nenhuma classificação conhecida.",

            opcoes: {
                A: {
                    texto: "Você contou para alguém?",
                    proximo: "fim"
                },

                B: {
                    texto: "Você investigou sozinho?",
                    proximo: "fim"
                },

                C: {
                    texto: "Você ficou assustado?",
                    proximo: "fim"
                }
            }
        },

        comando: {
            fala:
                "Se eu soubesse, provavelmente não estaria dizendo isso em voz alta.",

            opcoes: {
                A: {
                    texto: "Você está com medo de ser ouvido?",
                    proximo: "fim"
                },

                B: {
                    texto: "Então você sabe alguma coisa.",
                    proximo: "fim"
                },

                C: {
                    texto: "Entendi.",
                    proximo: "fim"
                }
            }
        },

        continua: {
            fala:
                "Porque sair agora seria admitir que tudo o que descobri não serviu para nada.",

            opcoes: {
                A: {
                    texto: "Então você quer descobrir a verdade?",
                    proximo: "fim"
                },

                B: {
                    texto: "Isso parece perigoso.",
                    proximo: "fim"
                },

                C: {
                    texto: "Você é obcecado por isso.",
                    proximo: "fim"
                }
            }
        },

        acidente: {
            fala:
                "Participei. E foi justamente durante um procedimento de alta contenção que perdi parte da visão de um dos olhos.",

            opcoes: {
                A: {
                    texto: "Você se arrepende?",
                    proximo: "fim"
                },

                B: {
                    texto: "Foi culpa de alguém?",
                    proximo: "fim"
                },

                C: {
                    texto: "Você continuou trabalhando depois disso?",
                    proximo: "fim"
                }
            }
        },

        medo: {
            fala:
                "Medo é uma reação útil. Pânico não é. Eu prefiro a primeira.",

            opcoes: {
                A: {
                    texto: "Você parece muito tranquilo.",
                    proximo: "fim"
                },

                B: {
                    texto: "Você já perdeu o controle?",
                    proximo: "fim"
                },

                C: {
                    texto: "Eu teria medo.",
                    proximo: "fim"
                }
            }
        },

        necessarios: {
            fala:
                "Alguns. Mas ciência sem limites deixa de ser ciência e começa a ser outra coisa.",

            opcoes: {
                A: {
                    texto: "E a BABEL ultrapassou esses limites?",
                    proximo: "fim"
                },

                B: {
                    texto: "Você já tentou impedir algum?",
                    proximo: "fim"
                },

                C: {
                    texto: "Que outra coisa?",
                    proximo: "fim"
                }
            }
        },

        personalidade: {
            fala:
                "Não. Eu era menos paciente. Acredite, isso é uma evolução.",

            opcoes: {
                A: {
                    texto: "Você está dizendo que mudou?",
                    proximo: "fim"
                },

                B: {
                    texto: "Você continua arrogante.",
                    proximo: "fim"
                },

                C: {
                    texto: "Eu gosto desse seu jeito.",
                    proximo: "fim"
                }
            }
        },

        olho: {
            fala:
                "Um acidente de laboratório. A visão daquele lado nunca voltou completamente.",

            opcoes: {
                A: {
                    texto: "Você não gosta de falar sobre isso.",
                    proximo: "fim"
                },

                B: {
                    texto: "Foi doloroso?",
                    proximo: "fim"
                },

                C: {
                    texto: "Desculpa perguntar.",
                    proximo: "fim"
                }
            }
        },

        confianca: {
            fala:
                "Confiança é um recurso escasso aqui. Recomendo que você não desperdice a sua.",

            opcoes: {
                A: {
                    texto: "Nem no Diego?",
                    proximo: "fim"
                },

                B: {
                    texto: "Nem na Isabelle?",
                    proximo: "fim"
                },

                C: {
                    texto: "Nem em mim?",
                    proximo: "fim"
                }
            }
        },

        fim: {
            fala:
                "Chega. Já respondi o suficiente. Se quiser continuar investigando, faça isso com cuidado.",

            opcoes: {}
        }
    },


    // --------------------------------------------------------
    // ISABELLE
    // --------------------------------------------------------

    isabelle: {

        inicio: {
            fala:
                "Você queria falar comigo? Tudo bem. Só... tente não fazer perguntas perto das câmeras.",

            opcoes: {
                A: {
                    texto: "Por que você tem medo das câmeras?",
                    proximo: "cameras"
                },

                B: {
                    texto: "Quero saber sobre a arquitetura da BABEL.",
                    proximo: "arquitetura"
                },

                C: {
                    texto: "Você já viu alguma coisa estranha aqui?",
                    proximo: "estranho"
                }
            }
        },

        cameras: {
            fala:
                "Eu não disse que tenho medo delas. Só disse para ter cuidado.",

            opcoes: {
                A: {
                    texto: "Isso parece medo.",
                    proximo: "fim"
                },

                B: {
                    texto: "Você sabe quem monitora as câmeras?",
                    proximo: "fim"
                },

                C: {
                    texto: "Tudo bem. Não vou insistir.",
                    proximo: "fim"
                }
            }
        },

        arquitetura: {
            fala:
                "A estrutura da BABEL não segue completamente as plantas oficiais. Existem corredores e salas que simplesmente não deveriam estar ali.",

            opcoes: {
                A: {
                    texto: "Quantas inconsistências você encontrou?",
                    proximo: "inconsistencias"
                },

                B: {
                    texto: "A estrutura muda?",
                    proximo: "muda"
                },

                C: {
                    texto: "Você contou para alguém?",
                    proximo: "contou"
                }
            }
        },

        estranho: {
            fala:
                "Sim. E esse é exatamente o problema. Algumas coisas parecem erradas até para mim.",

            opcoes: {
                A: {
                    texto: "O que você viu?",
                    proximo: "visao"
                },

                B: {
                    texto: "Você tem medo?",
                    proximo: "medo"
                },

                C: {
                    texto: "Você continua investigando mesmo assim?",
                    proximo: "investiga"
                }
            }
        },

        inconsistencias: {
            fala:
                "Quatorze confirmadas. Existem outras que ainda não consegui provar.",

            opcoes: {
                A: {
                    texto: "Você pretende continuar?",
                    proximo: "fim"
                },

                B: {
                    texto: "Isso não é perigoso?",
                    proximo: "fim"
                },

                C: {
                    texto: "Quatorze é muita coisa.",
                    proximo: "fim"
                }
            }
        },

        muda: {
            fala:
                "Eu não sei. Mas às vezes tenho a sensação de que a arquitetura está reagindo a alguma coisa.",

            opcoes: {
                A: {
                    texto: "A alguma pessoa?",
                    proximo: "fim"
                },

                B: {
                    texto: "A alguma entidade?",
                    proximo: "fim"
                },

                C: {
                    texto: "À própria BABEL?",
                    proximo: "fim"
                }
            }
        },

        contou: {
            fala:
                "Contei. A resposta foi que eram apenas erros nos registros. Mas eu sei ler uma planta arquitetônica.",

            opcoes: {
                A: {
                    texto: "Você acha que estão escondendo alguma coisa?",
                    proximo: "fim"
                },

                B: {
                    texto: "Você confia nos superiores?",
                    proximo: "fim"
                },

                C: {
                    texto: "Eu acreditaria em você.",
                    proximo: "fim"
                }
            }
        },

        visao: {
            fala:
                "Uma porta onde não deveria existir nenhuma. E um corredor que parecia mais longo por dentro do que deveria ser possível.",

            opcoes: {
                A: {
                    texto: "Você entrou?",
                    proximo: "fim"
                },

                B: {
                    texto: "Você mediu o corredor?",
                    proximo: "fim"
                },

                C: {
                    texto: "Isso é impossível.",
                    proximo: "fim"
                }
            }
        },

        medo: {
            fala:
                "Sim. Mas medo não significa que eu vou parar. Significa que preciso ter mais cuidado.",

            opcoes: {
                A: {
                    texto: "Você é mais corajosa do que parece.",
                    proximo: "fim"
                },

                B: {
                    texto: "Eu teria ido embora.",
                    proximo: "fim"
                },

                C: {
                    texto: "Você deveria descansar.",
                    proximo: "fim"
                }
            }
        },

        investiga: {
            fala:
                "Continuo. Se eu parar agora, nunca vou saber se estava imaginando tudo ou se realmente existe alguma coisa errada.",

            opcoes: {
                A: {
                    texto: "Você quer descobrir a verdade?",
                    proximo: "fim"
                },

                B: {
                    texto: "E se a verdade for pior?",
                    proximo: "fim"
                },

                C: {
                    texto: "Eu ajudaria você.",
                    proximo: "fim"
                }
            }
        },

        fim: {
            fala:
                "Acho melhor parar por aqui. Algumas perguntas são mais seguras quando permanecem sem resposta.",

            opcoes: {}
        }
    },


    // --------------------------------------------------------
    // ALESSANDRA
    // --------------------------------------------------------

    alessandra: {

        inicio: {
            fala:
                "Opa! Finalmente alguém querendo conversar. Espero que você não seja daqueles que fazem perguntas chatas.",

            opcoes: {
                A: {
                    texto: "Você gosta de explorar a BABEL?",
                    proximo: "explorar"
                },

                B: {
                    texto: "O que aconteceu com seu dedo?",
                    proximo: "dedo"
                },

                C: {
                    texto: "Você já entrou em algum lugar que não estava no mapa?",
                    proximo: "mapa"
                }
            }
        },

        explorar: {
            fala:
                "Gosto? Eu adoro! Principalmente quando dizem que uma área é proibida. É quase um convite.",

            opcoes: {
                A: {
                    texto: "Você não tem medo?",
                    proximo: "medo"
                },

                B: {
                    texto: "Você é irresponsável.",
                    proximo: "irresponsavel"
                },

                C: {
                    texto: "Eu iria com você.",
                    proximo: "fim"
                }
            }
        },

        dedo: {
            fala:
                "Ah, isso? Perdi metade durante uma exploração. Foi uma pedra, eu acho. Ou talvez uma passagem desabando. Faz tempo.",

            opcoes: {
                A: {
                    texto: "Você fala disso como se não fosse nada.",
                    proximo: "fim"
                },

                B: {
                    texto: "Você sentiu muita dor?",
                    proximo: "fim"
                },

                C: {
                    texto: "E você continuou explorando?",
                    proximo: "continuou"
                }
            }
        },

        mapa: {
            fala:
                "Várias vezes! O melhor é quando o mapa diz que não existe nada e você encontra uma passagem enorme.",

            opcoes: {
                A: {
                    texto: "Você nunca se perdeu?",
                    proximo: "perdeu"
                },

                B: {
                    texto: "Você registrou essas passagens?",
                    proximo: "registrou"
                },

                C: {
                    texto: "Você deveria ter mais cuidado.",
                    proximo: "cuidado"
                }
            }
        },

        medo: {
            fala:
                "Claro que tenho. Mas curiosidade geralmente ganha.",

            opcoes: {
                A: {
                    texto: "Isso é preocupante.",
                    proximo: "fim"
                },

                B: {
                    texto: "Eu acho isso divertido.",
                    proximo: "fim"
                },

                C: {
                    texto: "Você realmente não aprende.",
                    proximo: "fim"
                }
            }
        },

        irresponsavel: {
            fala:
                "Eu prefiro chamar de exploradora com espírito aventureiro.",

            opcoes: {
                A: {
                    texto: "Isso é só um nome bonito.",
                    proximo: "fim"
                },

                B: {
                    texto: "Você quase morreu.",
                    proximo: "fim"
                },

                C: {
                    texto: "Talvez você esteja certa.",
                    proximo: "fim"
                }
            }
        },

        continuou: {
            fala:
                "Óbvio! Você acha mesmo que perder um pedacinho do dedo ia me fazer parar?",

            opcoes: {
                A: {
                    texto: "Sim.",
                    proximo: "fim"
                },

                B: {
                    texto: "Agora faz sentido.",
                    proximo: "fim"
                },

                C: {
                    texto: "Você é maluca.",
                    proximo: "fim"
                }
            }
        },

        perdeu: {
            fala:
                "Já. Mas eu sempre encontro o caminho de volta. Quase sempre.",

            opcoes: {
                A: {
                    texto: "Quase?",
                    proximo: "fim"
                },

                B: {
                    texto: "Isso não me tranquiliza.",
                    proximo: "fim"
                },

                C: {
                    texto: "Eu confiaria em você.",
                    proximo: "fim"
                }
            }
        },

        registrou: {
            fala:
                "Algumas. Outras... bem, digamos que os mapas simplesmente desapareceram depois.",

            opcoes: {
                A: {
                    texto: "Como assim desapareceram?",
                    proximo: "fim"
                },

                B: {
                    texto: "Você tem certeza?",
                    proximo: "fim"
                },

                C: {
                    texto: "Isso é estranho.",
                    proximo: "fim"
                }
            }
        },

        cuidado: {
            fala:
                "Eu tenho cuidado! Só não tenho exatamente o mesmo conceito de cuidado que a Isabelle.",

            opcoes: {
                A: {
                    texto: "A Isabelle provavelmente está certa.",
                    proximo: "fim"
                },

                B: {
                    texto: "Você e ela brigam por isso?",
                    proximo: "fim"
                },

                C: {
                    texto: "Eu acho seu jeito melhor.",
                    proximo: "fim"
                }
            }
        },

        fim: {
            fala:
                "Foi divertido! Mas se quiser continuar conversando, volta depois. Tenho uma passagem nova para explorar.",

            opcoes: {}
        }
    }

};


// ============================================================
// FUNÇÕES DO TERMINAL
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

    const linha = document.createElement("div");

    linha.className = "command-line";

    const prompt = document.createElement("span");

    prompt.className = "prompt";

    prompt.textContent = ">";

    const texto = document.createElement("span");

    texto.textContent = " " + comando;

    linha.appendChild(prompt);
    linha.appendChild(texto);

    terminalOutput.appendChild(linha);

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}


// ============================================================
// AJUDA
// ============================================================

function mostrarAjuda() {

    adicionarTexto(
`============================================================
                    COMANDOS DISPONÍVEIS
============================================================

ajuda
Mostra esta lista de comandos.

pessoas
Lista todos os indivíduos registrados.

status
Mostra o estado atual do sistema.

sobre
Mostra informações sobre a BABEL.

limpar
Limpa o terminal.

conversar
Inicia uma conversa com o indivíduo atualmente selecionado.

------------------------------------------------------------

INDIVÍDUOS CONSULTÁVEIS:

diego
romulo
isabelle
alessandra
uriel
barakiel

------------------------------------------------------------

Para consultar um indivíduo, digite o nome diretamente.

Exemplo:

> diego

Depois de consultar um humano:

> conversar

============================================================`
    );
}


// ============================================================
// LISTAR PESSOAS
// ============================================================

function listarPessoas() {

    adicionarTexto(
`============================================================
                 INDIVÍDUOS REGISTRADOS
============================================================

[01] DIEGO SANTANA ............. ATIVO
[02] RÔMULO OLIVEIRA ........... ATIVO
[03] ISABELLE ALENCAR .......... ATIVO
[04] ALESSANDRA PIMENTA ....... ATIVO

[05] URIEL ..................... ATIVO
[06] BARAKIEL .................. ATIVO

============================================================`
    );
}


// ============================================================
// STATUS
// ============================================================

function mostrarStatus() {

    adicionarTexto(
`============================================================
                    STATUS DO SISTEMA
============================================================

BABEL TERMINAL ............... ONLINE
CONEXÃO ...................... ESTABELECIDA
BANCO DE DADOS ............... OPERACIONAL
SISTEMA DE CONTENÇÃO ........ ESTÁVEL
ANGEL ENGINE ................ OPERACIONAL

NÍVEL DE ACESSO ............. RESTRITO

============================================================`
    );
}


// ============================================================
// SOBRE
// ============================================================

function mostrarSobre() {

    adicionarTexto(
`============================================================
                       BABEL
============================================================

BABEL é uma instalação científica de acesso restrito.

As informações disponíveis neste terminal são classificadas
e podem estar incompletas.

Alguns registros foram parcialmente corrompidos.

Outros foram deliberadamente removidos.

------------------------------------------------------------

BABEL SCIENTIFIC DIVISION //
ANGEL ENGINE INITIATIVE

============================================================`
    );
}


// ============================================================
// ÁUDIO
// ============================================================

function adicionarAudio(pessoa) {

    if (!pessoa.audio) {
        return;
    }

    const container = document.createElement("div");

    container.className = "response";

    const titulo = document.createElement("p");

    titulo.textContent = "REGISTRO DE ÁUDIO:";

    const audio = document.createElement("audio");

    audio.controls = true;

    audio.preload = "metadata";

    audio.src = pessoa.audio.arquivo;

    audio.addEventListener("loadedmetadata", () => {

        audio.currentTime = pessoa.audio.inicio;

    });

    audio.addEventListener("timeupdate", () => {

        if (audio.currentTime >= pessoa.audio.fim) {

            audio.pause();

            audio.currentTime = pessoa.audio.inicio;

        }

    });

    container.appendChild(titulo);

    container.appendChild(audio);

    terminalOutput.appendChild(container);

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}


// ============================================================
// MOSTRAR REGISTRO DE UMA PESSOA
// ============================================================

function mostrarPessoa(chave) {

    const pessoa = pessoas[chave];

    if (!pessoa) {
        return;
    }

    // GUARDA A PESSOA CONSULTADA
    pessoaSelecionada = chave;


    adicionarTexto(
`============================================================
              REGISTRO INDIVIDUAL // ${pessoa.nome}
============================================================

IDENTIFICAÇÃO
Nome: ${pessoa.nome}
Tipo: ${pessoa.tipo}
Cargo: ${pessoa.cargo}
Status: ${pessoa.status}

------------------------------------------------------------

PERSONALIDADE
${pessoa.personalidade}

------------------------------------------------------------

CARACTERÍSTICAS
${pessoa.caracteristicas}

------------------------------------------------------------

HISTÓRIA
${pessoa.historia}

------------------------------------------------------------

ENTRADA NA BABEL
${pessoa.entrada}

------------------------------------------------------------

OPINIÕES E RELACIONAMENTOS

DIEGO:
${pessoa.pensamentos.diego || "ACESSO NEGADO."}

RÔMULO:
${pessoa.pensamentos.romulo || "ACESSO NEGADO."}

ISABELLE:
${pessoa.pensamentos.isabelle || "ACESSO NEGADO."}

ALESSANDRA:
${pessoa.pensamentos.alessandra || "ACESSO NEGADO."}

URIEL:
${pessoa.pensamentos.uriel || "ACESSO NEGADO."}

BARAKIEL:
${pessoa.pensamentos.barakiel || "ACESSO NEGADO."}

------------------------------------------------------------`
    );


    // ÁUDIO

    adicionarAudio(pessoa);


    // CONVERSAÇÃO

    if (pessoa.conversavel) {

        adicionarTexto(
`CONVERSAÇÃO DISPONÍVEL.

Digite "conversar" para iniciar uma conversa com
${pessoa.nome}.`
        );

    } else {

        adicionarTexto(
`COMUNICAÇÃO NÃO DISPONÍVEL.

O protocolo de comunicação para esta entidade
encontra-se bloqueado.

============================================================`
        );
    }
}


// ============================================================
// INICIAR CONVERSA
// ============================================================

function iniciarConversa(chave) {

    const pessoa = pessoas[chave];

    if (!pessoa) {

        adicionarTexto(
            "ERRO: INDIVÍDUO NÃO ENCONTRADO.",
            "error"
        );

        return;
    }


    if (!pessoa.conversavel) {

        adicionarTexto(
`============================================================
              COMUNICAÇÃO NÃO AUTORIZADA
============================================================

INDIVÍDUO: ${pessoa.nome}

Não foi possível estabelecer comunicação.

MOTIVO:
PROTOCOLO DE COMUNICAÇÃO BLOQUEADO.

A tentativa foi registrada.

============================================================`,
            "warning"
        );

        return;
    }


    conversaAtiva = true;

    personagemAtual = chave;

    noAtual = "inicio";


    adicionarTexto(
`============================================================
                 CANAL DE COMUNICAÇÃO
============================================================

INDIVÍDUO: ${pessoa.nome}
STATUS: CONECTADO

------------------------------------------------------------`
    );


    mostrarDialogo();
}


// ============================================================
// MOSTRAR DIÁLOGO
// ============================================================

function mostrarDialogo() {

    const arvore = dialogos[personagemAtual];

    if (!arvore) {
        return;
    }


    const no = arvore[noAtual];

    if (!no) {
        encerrarConversa();
        return;
    }


    adicionarTexto(
        `${pessoas[personagemAtual].nome}:\n"${no.fala}"`,
        "response"
    );


    // Se não existem opções, encerra a conversa.

    if (!no.opcoes || Object.keys(no.opcoes).length === 0) {

        adicionarTexto(
`------------------------------------------------------------

[0] VOLTAR AO TERMINAL`
        );

        return;
    }


    let textoOpcoes =
`------------------------------------------------------------

`;


    if (no.opcoes.A) {

        textoOpcoes +=
            `[A] ${no.opcoes.A.texto}\n`;
    }


    if (no.opcoes.B) {

        textoOpcoes +=
            `[B] ${no.opcoes.B.texto}\n`;
    }


    if (no.opcoes.C) {

        textoOpcoes +=
            `[C] ${no.opcoes.C.texto}\n`;
    }


    textoOpcoes +=
`\n[0] VOLTAR AO TERMINAL`;


    adicionarTexto(textoOpcoes);
}


// ============================================================
// ESCOLHER RESPOSTA
// ============================================================

function escolherResposta(escolha) {

    const arvore = dialogos[personagemAtual];

    if (!arvore) {
        return;
    }


    const no = arvore[noAtual];

    if (!no || !no.opcoes) {
        return;
    }


    const opcao = no.opcoes[escolha];

    if (!opcao) {

        adicionarTexto(
            "OPÇÃO INVÁLIDA.",
            "error"
        );

        return;
    }


    adicionarTexto(
        `VOCÊ:\n"${opcao.texto}"`,
        "command-line"
    );


    noAtual = opcao.proximo;


    mostrarDialogo();
}


// ============================================================
// ENCERRAR CONVERSA
// ============================================================

function encerrarConversa() {

    conversaAtiva = false;

    personagemAtual = null;

    noAtual = null;

    // Ao sair da conversa, nenhum indivíduo fica selecionado.

    pessoaSelecionada = null;


    adicionarTexto(
`============================================================
              CONEXÃO ENCERRADA
============================================================

Retornando ao terminal...

============================================================`
    );
}


// ============================================================
// LIMPAR TERMINAL
// ============================================================

function limparTerminal() {

    terminalOutput.innerHTML = "";

    pessoaSelecionada = null;

    conversaAtiva = false;

    personagemAtual = null;

    noAtual = null;
}


// ============================================================
// PROCESSAR COMANDO
// ============================================================

function processarComando(comando) {

    const entrada = comando.trim();

    const chave = entrada.toLowerCase();


    // --------------------------------------------------------
    // SE ESTIVER EM UMA CONVERSA
    // --------------------------------------------------------

    if (conversaAtiva) {

        if (chave === "0") {

            encerrarConversa();

            return;
        }


        if (
            chave === "a" ||
            chave === "b" ||
            chave === "c"
        ) {

            escolherResposta(chave.toUpperCase());

            return;
        }


        adicionarTexto(
            "ERRO: DURANTE A CONVERSA, UTILIZE A, B, C OU 0.",
            "error"
        );

        return;
    }


    // --------------------------------------------------------
    // COMANDOS NORMAIS
    // --------------------------------------------------------

    switch (chave) {

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

            // AQUI ESTÁ A CORREÇÃO PRINCIPAL.

            if (!pessoaSelecionada) {

                adicionarTexto(
`ERRO: NENHUM INDIVÍDUO SELECIONADO.

Consulte um registro antes de iniciar uma conversa.

Exemplo:

> diego
> conversar`,
                    "error"
                );

            } else {

                iniciarConversa(pessoaSelecionada);

            }

            break;


        default:

            // Verifica se o comando é o nome de alguma pessoa.

            if (pessoas[chave]) {

                mostrarPessoa(chave);

            } else {

                adicionarTexto(
`COMANDO NÃO RECONHECIDO:

"${entrada}"

Digite "ajuda" para consultar os comandos disponíveis.`,
                    "error"
                );
            }

            break;
    }
}


// ============================================================
// INPUT DO TERMINAL
// ============================================================

commandInput.addEventListener("keydown", (event) => {

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
// FOCO AUTOMÁTICO
// ============================================================

commandInput.focus();


// Mantém o cursor no campo quando clicar no terminal.

document.addEventListener("click", () => {

    commandInput.focus();

});
