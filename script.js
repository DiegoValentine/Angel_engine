const terminalOutput = document.getElementById("terminal-output");
const commandInput = document.getElementById("commandInput");


// ============================================================
// BANCO DE DADOS DOS PERSONAGENS
// ============================================================

const pessoas = {

    diego: {

        nome: "DIEGO SANTANA",

        identificacao: `
NOME: Diego Santana
IDADE: [REGISTRO INCOMPLETO]
ORDEM DE IDADE: Consideravelmente mais velho que os demais membros humanos.
ORIENTAÇÃO: Heterossexual
CARGO: Segurança Geral
STATUS: ATIVO
        `,

        personalidade: `
PERSONALIDADE:
Inocente.
Lerdo.
Amigável.
Ingênuo.
Leal.
Curioso.

Diego tende a confiar facilmente nas pessoas.
Apesar de trabalhar dentro de uma instalação extremamente
perigosa, mantém uma personalidade relativamente leve.

Sua dificuldade em perceber certas situações faz com que
frequentemente seja subestimado pelos outros membros.

Entretanto, sua lealdade faz com que permaneça ao lado
das pessoas que considera importantes, mesmo quando
isso representa perigo para ele.
        `,

        caracteristicas: `
CARACTERÍSTICAS:

• Sociável e comunicativo.
• Boa relação com outros funcionários humanos.
• Corajoso, apesar de não possuir treinamento científico.
• Demonstra dificuldade em perceber situações óbvias.
• Tende a confiar facilmente.
• Possui fios grisalhos no cabelo.
• Sua idade exata permanece fora do registro público.
• É consideravelmente mais velho que Rômulo, Isabelle e Alessandra.
• Demonstra desconfiança em relação às entidades celestiais.

OBSERVAÇÃO:

Os fios grisalhos parecem estar relacionados à sua idade,
embora a idade real de Diego tenha sido removida dos
registros disponíveis.
        `,

        historia: `
HISTÓRIA:

Diego teve uma infância considerada normal e nunca demonstrou
interesse excepcional por ciência ou tecnologia.

Seu primeiro contato com a organização ocorreu quando foi
contratado para trabalhar na segurança de uma instalação
que, segundo os documentos oficiais, realizava pesquisas
científicas privadas.

Durante seus primeiros meses, Diego acreditava que a Babel
era apenas uma instalação de pesquisa extremamente restrita.

Com o tempo, começou a perceber que existiam setores que
não apareciam nos mapas oficiais.

Portas que não deveriam existir.
Corredores que mudavam de posição.
Funcionários que desapareciam de determinados registros.

Mesmo depois de perceber que havia algo errado, Diego
decidiu permanecer.

Sua função principal passou a ser a segurança geral da
instalação.

A idade de Diego é um dos poucos dados que nunca foi
completamente recuperado. Documentos antigos indicam que
ele já era adulto muito antes dos outros três integrantes
humanos da equipe.

Os fios grisalhos presentes em seu cabelo parecem ser
uma consequência natural de sua idade.

Apesar de não possuir conhecimentos científicos avançados,
Diego acabou tendo contato com informações que muitos
funcionários da Babel jamais deveriam conhecer.
        `,

        entradaBabel: `
ENTRADA NA BABEL:

Diego foi contratado inicialmente para funções básicas
de segurança.

Seu desempenho nos primeiros testes foi considerado apenas
mediano.

Um dos supervisores registrou:

"Talvez seja exatamente por isso que ele seja útil."

Sua capacidade de conversar facilmente com funcionários,
circular por diferentes setores e não levantar suspeitas
acabou tornando Diego mais útil do que os testes iniciais
indicavam.
        `,

        opinioes: `
OPINIÕES E RELACIONAMENTOS:

RÔMULO:
"Um cara inteligente demais e irritante demais.
Parece que acorda todo dia pensando em como me chamar de burro."

ISABELLE:
"Ela é muito inteligente. Às vezes parece que percebe
coisas que ninguém mais percebe."

ALESSANDRA:
"É divertida. Com ela eu consigo esquecer um pouco
que esse lugar é completamente estranho."

URIEL:
"Eu não confio nele. Não sei o que ele é, mas
definitivamente não quero descobrir do pior jeito."

BARAKIEL:
"Ainda pior. Ele observa demais e fala de menos.
Não gosto de ficar perto dele."
        `
    },


    // ========================================================
    // RÔMULO
    // ========================================================

    romulo: {

        nome: "RÔMULO OLIVEIRA",

        identificacao: `
NOME: Rômulo Oliveira
IDADE: [REGISTRO INCOMPLETO]
ORDEM DE IDADE: Mais velho que Isabelle e Alessandra.
ORIENTAÇÃO: Gay
CARGO: Engenheiro Biológico
STATUS: ATIVO
        `,

        personalidade: `
PERSONALIDADE:

Extremamente inteligente.
Confiante.
Observador.
Sarcástico.
Crítico.
Vain.

Rômulo possui uma personalidade extremamente racional
e tende a analisar as pessoas e situações antes de agir.

Possui pouca paciência com pessoas que considera lentas
ou despreparadas.

Frequentemente provoca Diego, principalmente por causa
da dificuldade dele em perceber determinadas situações.
        `,

        caracteristicas: `
CARACTERÍSTICAS:

• Alto desempenho intelectual.
• Excelente conhecimento de biologia.
• Memória excepcional.
• Grande capacidade de observação.
• Especialista em engenharia biológica.
• Impaciente com pessoas que considera pouco eficientes.
• Possui um dos olhos com aparência parcialmente opaca.
• A visão desse olho encontra-se severamente comprometida.

OBSERVAÇÃO OCULAR:

O olho afetado apresenta uma aparência esbranquiçada/
opaca.

A causa exata do dano encontra-se registrada como acidente
de laboratório.

A visão do olho afetado nunca foi completamente recuperada.
        `,

        historia: `
HISTÓRIA:

Desde cedo, Rômulo demonstrou interesse por biologia,
genética e funcionamento de organismos vivos.

Seu desempenho acadêmico chamou a atenção de pesquisadores,
que posteriormente o recrutaram para trabalhar em um
laboratório privado.

O laboratório, entretanto, fazia parte da estrutura
científica da Babel.

Rômulo inicialmente acreditava estar trabalhando em
pesquisas biológicas convencionais.

Isso mudou quando encontrou relatórios envolvendo
organismos cuja origem não podia ser explicada pela
biologia terrestre conhecida.

Durante uma sessão experimental, ocorreu um acidente
envolvendo um procedimento biológico de alta contenção.

Rômulo estava analisando uma amostra quando houve uma
falha no sistema de proteção do laboratório.

O incidente causou uma lesão grave em um dos olhos.

Apesar do tratamento realizado posteriormente, o olho
permaneceu parcialmente opaco e sua visão foi severamente
reduzida.

Rômulo retornou ao trabalho pouco tempo depois.

O acidente não diminuiu sua curiosidade.

Pelo contrário.

Depois daquele dia, passou a questionar ainda mais os
procedimentos da Babel e começou a investigar o que
realmente estava sendo estudado dentro da instalação.

Quanto mais investigava, mais informações encontrava.

E quanto mais informações encontrava, menos a Babel
parecia uma organização científica comum.
        `,

        entradaBabel: `
ENTRADA NA BABEL:

Rômulo apresentou resultados excepcionalmente altos
durante os testes de seleção.

Entretanto, aproximadamente 37% dos procedimentos
apresentados durante os testes foram questionados por ele.

A maioria das perguntas foi considerada inconveniente.

Ainda assim, suas capacidades científicas fizeram com
que fosse contratado.

Seu conhecimento posteriormente lhe concedeu acesso
a setores altamente restritos.
        `,

        opinioes: `
OPINIÕES E RELACIONAMENTOS:

DIEGO:
"Um desastre ambulante. É impressionante como ele
consegue sobreviver neste lugar."

ISABELLE:
"Inteligente. Muito inteligente. Às vezes acho que
ela percebe coisas demais."

ALESSANDRA:
"Divertida, mas não leva quase nada a sério."

URIEL:
"Não deveria existir."

BARAKIEL:
"Ele não reage como um organismo comum."
        `
    },


    // ========================================================
    // ISABELLE
    // ========================================================

    isabelle: {

        nome: "ISABELLE ALENCAR",

        identificacao: `
NOME: Isabelle Alencar
IDADE: [REGISTRO INCOMPLETO]
ORDEM DE IDADE: Mais velha que Alessandra.
ORIENTAÇÃO: Pansexual
CARGO: Chefe de Arquitetura
STATUS: ATIVO
        `,

        personalidade: `
PERSONALIDADE:

Inteligente.
Assustada.
Observadora.
Cautelosa.
Sensível.
Analítica.

Isabelle possui uma personalidade mais reservada.

Demonstra preocupação constante com as alterações
estruturais da Babel.

Apesar do medo, continua investigando as anomalias
arquitetônicas encontradas dentro da instalação.
        `,

        caracteristicas: `
CARACTERÍSTICAS:

• Excelente percepção espacial.
• Memória visual extremamente desenvolvida.
• Capacidade de perceber pequenas alterações estruturais.
• Conhece a estrutura oficial da Babel.
• Evita setores considerados instáveis.
• Analisa constantemente corredores, portas e salas.
• Nenhuma característica física especial registrada.

OBSERVAÇÃO:

Isabelle afirma que determinadas áreas da Babel não
possuem uma estrutura fixa.

Algumas portas simplesmente deixam de levar ao mesmo lugar.
        `,

        historia: `
HISTÓRIA:

Isabelle estudava arquitetura quando foi recrutada para
participar de uma avaliação estrutural de uma instalação
científica privada.

Durante a avaliação, percebeu algo que os outros
profissionais não haviam notado.

Os corredores não correspondiam aos projetos oficiais.

Portas apareciam em posições diferentes das indicadas
nas plantas.

Algumas salas simplesmente não existiam nos documentos.

Isabelle começou a registrar cada inconsistência.

Ao todo, quatorze alterações estruturais foram confirmadas.

Depois disso, sua posição dentro da organização mudou.

Ela recebeu acesso a setores que anteriormente eram
restritos e passou a comandar a divisão responsável
pela arquitetura interna da Babel.

Entretanto, existe uma regra que Isabelle nunca consegue
ignorar:

A Babel não parece possuir apenas uma arquitetura.

Ela parece possuir várias.
        `,

        entradaBabel: `
ENTRADA NA BABEL:

Isabelle foi recrutada inicialmente para uma avaliação
estrutural.

Seu primeiro relatório continha apenas uma frase:

"Os corredores não fazem sentido."

Após a confirmação de múltiplas inconsistências,
Isabelle recebeu autorização para trabalhar diretamente
na estrutura interna da instalação.

Atualmente possui alto nível de acesso.
        `,

        opinioes: `
OPINIÕES E RELACIONAMENTOS:

DIEGO:
"Ele é meio lerdo, mas é uma pessoa boa.
Dá para confiar nele."

RÔMULO:
"Ele sabe demais. Às vezes acho que ele percebe
coisas que nem deveria conseguir perceber."

ALESSANDRA:
"Ela consegue me fazer rir."

URIEL:
"Eu não gosto de olhar para ele por muito tempo."

BARAKIEL:
"Ele observa o espaço. Não apenas as pessoas."
        `
    },


    // ========================================================
    // ALESSANDRA
    // ========================================================

    alessandra: {

        nome: "ALESSANDRA PIMENTA",

        identificacao: `
NOME: Alessandra Pimenta
IDADE: [REGISTRO INCOMPLETO]
ORDEM DE IDADE: A mais jovem dos quatro integrantes humanos.
ORIENTAÇÃO: Lésbica
CARGO: Geóloga / Exploradora
STATUS: ATIVO
        `,

        personalidade: `
PERSONALIDADE:

Boba.
Engraçada.
Divertida.
Extrovertida.
Sociável.
Espontânea.

Alessandra costuma tratar situações perigosas
com uma quantidade incomum de descontração.

Sua curiosidade frequentemente supera seu medo.

Ela possui o hábito de explorar locais que deveriam
permanecer fechados.
        `,

        caracteristicas: `
CARACTERÍSTICAS:

• Geóloga.
• Exploradora.
• Especialista em geologia e topologia.
• Excelente adaptação a ambientes subterrâneos.
• Gosta de explorar cavernas e locais desconhecidos.
• Demonstra grande interesse pelos níveis desconhecidos
  da Torre.
• Possui apenas metade do dedo mínimo de uma das mãos.
• O restante do dedo apresenta aparência de amputação antiga.

OBSERVAÇÃO:

A perda parcial do dedo mínimo ocorreu durante uma
exploração anterior à sua entrada nos setores mais
profundos da Babel.
        `,

        historia: `
HISTÓRIA:

Alessandra sempre demonstrou interesse por lugares
desconhecidos.

Cavernas, estruturas subterrâneas, formações rochosas
e locais abandonados despertavam sua curiosidade.

Sua especialização em geologia e topologia fez com que
fosse recrutada para auxiliar na exploração de estruturas
subterrâneas relacionadas à Babel.

Durante uma dessas explorações, Alessandra entrou em
uma formação cavernosa que não constava nos mapas.

Durante o percurso, ocorreu um acidente.

Uma parte da estrutura rochosa cedeu enquanto ela tentava
atravessar uma passagem estreita.

O acidente causou a perda parcial do dedo mínimo de uma
das mãos.

Alessandra sobreviveu.

E, contra todas as expectativas, continuou explorando.

O incidente não diminuiu sua curiosidade.

Na verdade, parece ter feito exatamente o contrário.

Desde então, Alessandra demonstra ainda mais interesse
pelos locais desconhecidos da Babel.

Principalmente pelos níveis inferiores da Torre.

Ela mesma admite que não conhece todos os andares.

E é justamente isso que a interessa.

Se existem níveis que ninguém conhece...

ela quer ser a primeira a encontrá-los.
        `,

        entradaBabel: `
ENTRADA NA BABEL:

Alessandra foi recrutada devido ao seu conhecimento
em geologia, topologia e exploração subterrânea.

Sua capacidade de identificar estruturas naturais,
passagens e alterações no terreno mostrou-se útil
para mapear setores desconhecidos da Babel.

Durante suas primeiras explorações, demonstrou pouca
preocupação com os protocolos de segurança.

Um supervisor registrou:

"Ela parece considerar uma área proibida apenas
como um convite."

        `,

        opinioes: `
OPINIÕES E RELACIONAMENTOS:

DIEGO:
"Ele é lerdo pra caramba, mas eu gosto dele.
Pelo menos ele tenta ajudar."

RÔMULO:
"Inteligente, bonito e insuportável.
Nessa ordem."

ISABELLE:
"Ela precisa relaxar um pouco.
Embora algumas das coisas que ela diz ter visto
sejam reais."

URIEL:
"Ele me dá arrepios. E isso é estranho porque,
infelizmente, ele é meio bonito."

BARAKIEL:
"Não quero ficar sozinha com ele.
Nem se me pagarem."
        `
    },


    // ========================================================
    // URIEL
    // ========================================================

    uriel: {

        nome: "URIEL",

        identificacao: `
NOME: Uriel
IDADE: DESCONHECIDA
ORIENTAÇÃO: NÃO APLICÁVEL
CARGO: ENTIDADE CELESTIAL
STATUS: ATIVO
        `,

        personalidade: `
PERSONALIDADE:

Sereno.
Observador.
Desconhecido.
Não-humano.

Uriel demonstra comportamento extremamente diferente
dos integrantes humanos.

Grande parte de suas ações permanece sem explicação.
        `,

        caracteristicas: `
CARACTERÍSTICAS:

• Origem desconhecida.
• Classificação biológica inconclusiva.
• Comportamento não-humano.
• Comunicação limitada.
• Associado diretamente ao Angel Engine.
• Mantido em setor de acesso restrito.
        `,

        historia: `
HISTÓRIA:

Não existem registros confiáveis sobre Uriel antes
de sua chegada à Babel.

Os primeiros documentos encontrados utilizam apenas
a classificação:

"ANJO"

Sua origem permanece desconhecida.

Documentos posteriores associam Uriel aos primeiros
projetos relacionados ao Angel Engine.

Seu organismo foi utilizado em pesquisas envolvendo
geração e manipulação de energia.

Entretanto, diversos documentos apresentam classificações
contraditórias.

Um antigo relatório contém uma única observação:

"Não tentar definir aquilo que não compreendemos."
        `,

        entradaBabel: `
ENTRADA NA BABEL:

CLASSIFICAÇÃO: CONFIDENCIAL

ORIGEM: DESCONHECIDA
MÉTODO DE CHEGADA: [REDACTED]
TIPO: ENTIDADE CELESTIAL
CONTENÇÃO: ESTÁVEL

Não permitir que a entidade deixe a área designada.

Contato somente mediante autorização.
        `,

        opinioes: `
OPINIÕES E RELACIONAMENTOS:

DADOS INDISPONÍVEIS.

ACESSO NEGADO.
        `
    },


    // ========================================================
    // BARAKIEL
    // ========================================================

    barakiel: {

        nome: "BARAKIEL",

        identificacao: `
NOME: Barakiel
IDADE: DESCONHECIDA
ORIENTAÇÃO: NÃO APLICÁVEL
CARGO: ENTIDADE CELESTIAL
STATUS: ATIVO
        `,

        personalidade: `
PERSONALIDADE:

Desconhecido.
Observador.
Silencioso.
Imprevisível.
Não-humano.

Barakiel demonstra comportamento predominantemente
observacional.

Sua comunicação é extremamente limitada.
        `,

        caracteristicas: `
CARACTERÍSTICAS:

• Origem desconhecida.
• Entidade não-humana.
• Comunicação limitada.
• Alto comportamento observacional.
• Associado aos projetos da Babel.
• Relação com outras entidades desconhecida.
• Nível de ameaça indeterminado.
        `,

        historia: `
HISTÓRIA:

Os registros sobre Barakiel são extremamente escassos.

Sua origem e método de chegada à Babel permanecem
desconhecidos.

Documentos antigos o associam aos primeiros projetos
envolvendo entidades celestiais.

Durante anos, Barakiel permaneceu em setores de
observação e contenção.

Alguns pesquisadores levantaram a hipótese de que
Barakiel não estaria apenas observando os funcionários.

Talvez estivesse observando a própria Babel.

A hipótese nunca foi confirmada.

Os registros relacionados à entidade permanecem
classificados.
        `,

        entradaBabel: `
ENTRADA NA BABEL:

CLASSIFICAÇÃO: CONFIDENCIAL

ORIGEM: DESCONHECIDA
TIPO: ENTIDADE CELESTIAL
CONTENÇÃO: ESTÁVEL

A entidade permanece silenciosa durante a maior parte
das sessões de monitoramento.

Contato direto não autorizado.

Funcionários não devem permanecer sozinhos no setor
de contenção.
        `,

        opinioes: `
OPINIÕES E RELACIONAMENTOS:

DADOS INDISPONÍVEIS.

ACESSO NEGADO.
        `
    }

};


// ============================================================
// FUNÇÕES DO TERMINAL
// ============================================================

function adicionarTexto(texto, classe = "response") {

    const elemento = document.createElement("div");

    elemento.classList.add(classe);

    elemento.textContent = texto;

    terminalOutput.appendChild(elemento);

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}


// ============================================================
// MOSTRAR COMANDO DIGITADO
// ============================================================

function mostrarComando(comando) {

    const linha = document.createElement("div");

    linha.classList.add("command-line");

    const prompt = document.createElement("span");

    prompt.classList.add("prompt");

    prompt.textContent = ">";

    const texto = document.createElement("span");

    texto.textContent = " " + comando;

    linha.appendChild(prompt);
    linha.appendChild(texto);

    terminalOutput.appendChild(linha);
}


// ============================================================
// AJUDA
// ============================================================

function mostrarAjuda() {

    adicionarTexto(`
============================================================
                    COMANDOS DISPONÍVEIS
============================================================

ajuda
    Exibe esta lista de comandos.

pessoas
    Lista todos os indivíduos registrados no sistema.

status
    Exibe o estado atual do sistema Babel.

sobre
    Exibe informações sobre o terminal.

limpar
    Limpa o conteúdo atual do terminal.


------------------------------------------------------------
                    CONSULTA DE INDIVÍDUOS
------------------------------------------------------------

Para consultar um indivíduo, digite diretamente seu nome:

diego
romulo
isabelle
alessandra
uriel
barakiel

Exemplo:

> diego

O sistema retornará o registro disponível para consulta.

============================================================
    ATENÇÃO: ALGUNS REGISTROS POSSUEM ACESSO RESTRITO.
============================================================
    `);

}


// ============================================================
// LISTAR PESSOAS
// ============================================================

function listarPessoas() {

    adicionarTexto(`
============================================================
              INDIVÍDUOS REGISTRADOS
============================================================

[01] DIEGO SANTANA       // ATIVO
[02] RÔMULO OLIVEIRA     // ATIVO
[03] ISABELLE ALENCAR    // ATIVO
[04] ALESSANDRA PIMENTA  // ATIVO

------------------------------------------------------------

[05] URIEL               // ATIVO
[06] BARAKIEL            // ATIVO

============================================================
    `);

}


// ============================================================
// STATUS
// ============================================================

function mostrarStatus() {

    adicionarTexto(`
============================================================
                    STATUS DO SISTEMA
============================================================

SISTEMA BABEL:        ONLINE
CONEXÃO:              ESTABELECIDA
BANCO DE DADOS:       OPERACIONAL
CONTENÇÃO:            ESTÁVEL
ANGEL ENGINE:         OPERACIONAL

INDIVÍDUOS HUMANOS:
    04 REGISTRADOS
    04 ATIVOS

ENTIDADES CELESTIAIS:
    02 REGISTRADAS
    02 ATIVAS

============================================================
    `);

}


// ============================================================
// SOBRE
// ============================================================

function mostrarSobre() {

    adicionarTexto(`
============================================================
                     BABEL TERMINAL
============================================================

TERMINAL DE ACESSO RESTRITO

DIVISÃO:
BABEL SCIENTIFIC DIVISION

PROJETO:
ANGEL ENGINE INITIATIVE

FINALIDADE:

Armazenamento e consulta de informações relacionadas
a indivíduos, funcionários e entidades associadas
às operações da Babel.

NÍVEL DE ACESSO:
RESTRITO

AVISO:

Informações classificadas não devem ser compartilhadas
fora dos setores autorizados.

A violação desta regra poderá resultar em medidas
disciplinares.

============================================================
    `);

}


// ============================================================
// MOSTRAR PERSONAGEM
// ============================================================

function mostrarPessoa(chave) {

    const pessoa = pessoas[chave];

    if (!pessoa) {

        adicionarTexto(
            "ERRO: Registro não encontrado.",
            "error"
        );

        return;
    }


    adicionarTexto(`
============================================================
                    REGISTRO DE INDIVÍDUO
============================================================

${pessoa.nome}

============================================================
                    IDENTIFICAÇÃO
============================================================

${pessoa.identificacao}

============================================================
                    PERSONALIDADE
============================================================

${pessoa.personalidade}

============================================================
                    CARACTERÍSTICAS
============================================================

${pessoa.caracteristicas}

============================================================
                       HISTÓRIA
============================================================

${pessoa.historia}

============================================================
                   ENTRADA NA BABEL
============================================================

${pessoa.entradaBabel}

============================================================
               OPINIÕES / RELACIONAMENTOS
============================================================

${pessoa.opinioes}

============================================================
                  FIM DO REGISTRO
============================================================
    `);

}


// ============================================================
// LIMPAR TERMINAL
// ============================================================

function limparTerminal() {

    terminalOutput.innerHTML = "";

}


// ============================================================
// PROCESSAR COMANDO
// ============================================================

function processarComando(comando) {

    const entrada = comando
        .trim()
        .toLowerCase();

    if (entrada === "") {
        return;
    }


    mostrarComando(comando);


    switch (entrada) {

        case "ajuda":
        case "help":
            mostrarAjuda();
            break;


        case "pessoas":
        case "individuos":
        case "indivíduos":
            listarPessoas();
            break;


        case "status":
            mostrarStatus();
            break;


        case "sobre":
        case "about":
            mostrarSobre();
            break;


        case "limpar":
        case "clear":
            limparTerminal();
            break;


        case "diego":
            mostrarPessoa("diego");
            break;


        case "romulo":
        case "rômulo":
            mostrarPessoa("romulo");
            break;


        case "isabelle":
            mostrarPessoa("isabelle");
            break;


        case "alessandra":
            mostrarPessoa("alessandra");
            break;


        case "uriel":
            mostrarPessoa("uriel");
            break;


        case "barakiel":
            mostrarPessoa("barakiel");
            break;


        default:

            adicionarTexto(
                `ERRO: Comando "${comando}" não reconhecido.\nDigite "ajuda" para consultar os comandos disponíveis.`,
                "error"
            );

            break;
    }

}


// ============================================================
// ENTER
// ============================================================

commandInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        const comando = commandInput.value;

        processarComando(comando);

        commandInput.value = "";

    }

});


// ============================================================
// MANTER FOCO NO TERMINAL
// ============================================================

document.addEventListener("click", function() {

    commandInput.focus();

});


// ============================================================
// FOCO INICIAL
// ============================================================

window.addEventListener("load", function() {

    commandInput.focus();

});