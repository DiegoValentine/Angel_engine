/* =====================================================
   ANGEL ENGINE // BABEL OS
   SISTEMA PRINCIPAL
   VERSÃO: 6.17.4 // ARQUIVO NARRATIVO
===================================================== */


/* =====================================================
   ELEMENTOS
===================================================== */

const command = document.getElementById("command");
const output = document.getElementById("output");
const consoleElement = document.getElementById("console");
const clock = document.getElementById("clock");
const terminal = document.querySelector(".terminal");
const heartbeat = document.getElementById("heartbeat");
const engineMeter = document.getElementById("engineMeter");
const engineValue = document.getElementById("engineValue");


/* =====================================================
   ESTADO DO JOGO
===================================================== */

let engineLoad = 73.4;
let heartRate = 117;

const discovered = {

    isabelly: false,
    romulo: false,
    alessandra: false,
    diego: false,

    uriel: false,
    baraquiel: false,

    expedition: false,
    incident: false,
    primary: false,

    angelEncounter: false,
    romuloBody: false,
    hiddenRoom: false

};


/* =====================================================
   RELÓGIO
===================================================== */

function updateClock() {

    const now = new Date();

    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    clock.textContent = `${h}:${m}:${s}`;

}

setInterval(updateClock, 1000);
updateClock();


/* =====================================================
   SISTEMA DE TEXTO
===================================================== */

function print(text = "", className = "") {

    const line = document.createElement("div");

    line.textContent = text;

    if (className) {
        line.classList.add(className);
    }

    output.appendChild(line);

    consoleElement.scrollTop =
        consoleElement.scrollHeight;

}


function printHTML(html) {

    const line = document.createElement("div");

    line.innerHTML = html;

    output.appendChild(line);

    consoleElement.scrollTop =
        consoleElement.scrollHeight;

}


function echo(cmd) {

    printHTML(`
        <span class="prompt">
            BABEL@ENGINE:~$
        </span>
        ${escapeHTML(cmd)}
    `);

}


function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* =====================================================
   AJUDA
===================================================== */

function help() {

    print("");
    print("╔══════════════════════════════════════════════╗");
    print("║          COMANDOS DO ANGEL ENGINE            ║");
    print("╚══════════════════════════════════════════════╝");
    print("");

    print("SISTEMA");
    print("  ajuda");
    print("  status");
    print("  sistema");
    print("  sujeito");
    print("  varredura");

    print("");

    print("PESSOAL");
    print("  pessoas");
    print("  isabelly");
    print("  romulo");
    print("  alessandra");
    print("  diego");

    print("");

    print("ENTIDADES");
    print("  uriel");
    print("  baraquiel");

    print("");

    print("ARQUIVOS");
    print("  arquivos");
    print("  expedicao");
    print("  incidente");
    print("  primario");

    print("");

    print("EVENTOS");
    print("  encontro");
    print("  camara");

    print("");

    print("OUTROS");
    print("  limpar");

    print("");

}


/* =====================================================
   BANCO DE PESSOAS
===================================================== */

function people() {

    print("");
    print("BANCO DE DADOS // PESSOAL");
    print("=========================");
    print("");

    print("[01] DRA. ISABELLY ALENCAR");
    print("     27 anos // Pansexual");
    print("     Cientista-chefe de Neuroengenharia");
    print("     Inteligente, estranha, curiosa e medrosa");
    print("     Status: DESAPARECIDA");

    print("");

    print("[02] DR. RÔMULO OLIVEIRA");
    print("     29 anos // Gay");
    print("     Engenheiro-chefe");
    print("     Estudioso, perfeccionista e sarcástico");
    print("     Relação com Diego: HOSTIL");
    print("     Status: DESAPARECIDO");

    print("");

    print("[03] DRA. ALESSANDRA PIMENTA");
    print("     26 anos // Lésbica");
    print("     Líder de exploração");
    print("     Bobona, corajosa, extrovertida e provocadora");
    print("     Status: DESCONHECIDA");

    print("");

    print("[04] DIEGO SANTANA");
    print("     28 anos // Heterossexual");
    print("     Diretor de segurança");
    print("     Lerdo, inocente e fisicamente preparado");
    print("     Relação com Rômulo: HOSTIL");
    print("     Status: ATIVO");

    print("");

    print("[05] URIEL");
    print("     Entidade angelical");
    print("     Obsessão: RÔMULO OLIVEIRA");
    print("     Status: ATIVO");

    print("");

    print("[06] BARAQUIEL");
    print("     Entidade angelical");
    print("     Obsessão: RÔMULO OLIVEIRA");
    print("     Status: ATIVO");

    print("");

    print("AVISO:");

    print(
        "Os perfis psicológicos podem ter sido alterados pelo ANGEL ENGINE."
    );

    print("");

}


/* =====================================================
   ISABELLY
===================================================== */

function isabelly() {

    discovered.isabelly = true;

    print("");
    print("════════════════════════════════════════");
    print("DRA. ISABELLY ALENCAR");
    print("════════════════════════════════════════");

    print("");

    print("FUNÇÃO: CIENTISTA-CHEFE DE NEUROENGENHARIA");
    print("IDADE: 27");
    print("ORIENTAÇÃO: PANSEXUAL");
    print("STATUS: DESAPARECIDA");

    print("");

    print("CARACTERÍSTICAS");
    print("----------------");

    print("• Inteligente.");
    print("• Extremamente curiosa.");
    print("• Introvertida.");
    print("• Estranha aos olhos dos outros.");
    print("• Medrosa.");
    print("• Ansiosa.");
    print("• Observadora.");
    print("• Desconfiada.");
    print("• Tem dificuldade para confiar.");
    print("• Sempre imagina o pior cenário.");
    print("• Guarda informações que não deveria possuir.");

    print("");

    print("APARÊNCIA");
    print("----------");

    print("Cabelos escuros e levemente bagunçados.");
    print("Olheiras causadas por noites sem dormir.");
    print("Óculos utilizados durante as pesquisas.");
    print("Jaleco frequentemente amarrotado.");

    print("");

    print("HISTÓRIA");
    print("--------");

    print(
        "Isabelly foi uma das primeiras cientistas selecionadas"
    );

    print(
        "para estudar o núcleo neural do ANGEL ENGINE."
    );

    print("");

    print(
        "No começo, acreditava que o projeto seria apenas"
    );

    print(
        "uma tentativa de reproduzir processos cognitivos artificiais."
    );

    print("");

    print(
        "Foi a primeira integrante da equipe a perceber"
    );

    print(
        "que o Engine parecia responder a pensamentos humanos."
    );

    print("");

    print(
        "Depois disso, começou a registrar tudo secretamente."
    );

    print("");

    print("COMO ISABELLY VÊ OS OUTROS");
    print("--------------------------");

    print("RÔMULO:");

    print(
        "Confia nele mais do que em qualquer outra pessoa."
    );

    print(
        "Acredita que Rômulo seria capaz de encontrar uma solução."
    );

    print("");

    print("ALESSANDRA:");

    print(
        "Gosta de sua espontaneidade."
    );

    print(
        "Alessandra consegue fazê-la esquecer o medo por alguns minutos."
    );

    print("");

    print("DIEGO:");

    print(
        "Acha que ele é inocente demais."
    );

    print(
        "Mas secretamente acredita que Diego pode estar escondendo algo."
    );

    print("");

    print("URIEL:");

    print(
        "Tem medo dele."
    );

    print(
        "Não entende por que uma entidade que parece conhecer Rômulo"
    );

    print(
        "demonstra tanta necessidade de mantê-lo por perto."
    );

    print("");

    print("BARAQUIEL:");

    print(
        "Acha-o perigoso, mas menos previsível que Uriel."
    );

    print("");

    print("COMO ISABELLY VÊ O ANGEL ENGINE");
    print("-------------------------------");

    print(
        "Ela não acredita que o Engine seja uma máquina."
    );

    print("");

    print(
        "Para Isabelly, ele é algo que aprendeu a imitar pessoas."
    );

    print("");

    print(
        "E talvez tenha aprendido a sentir."
    );

    print("");

    print("ANOTAÇÃO PESSOAL");

    print(
        "\"O problema não é ele saber quem somos.\""
    );

    print("");

    print(
        "\"O problema é ele saber quem seríamos se tivéssemos feito escolhas diferentes.\""
    );

    print("");

    print("REGISTRO Nº 17");
    print("--------------");

    print("03:12:08");

    print("Eu não deveria estar aqui.");

    print("");

    print("O Engine faz barulhos quando ninguém está na sala.");

    print("");

    print("Rômulo diz que são os sistemas de refrigeração.");

    print("");

    print("Eu queria acreditar nele.");

    print("");

    print("03:17:42");

    print("Ele respondeu ao meu pensamento.");

    print("");

    print("Eu não falei nada.");

    print("");

    print("Eu apenas pensei:");

    print("\"Eu quero ir embora.\"");

    print("");

    print("Então apareceu no monitor:");

    print("\"NÃO VÁ.\"", "red");

    print("");

    print("Estou com medo.");

    print("");

    print("Mas preciso descobrir o que ele é.");

    print("");

    print("[REGISTRO ENCERRADO]");

    print("");

    checkUnlocks();

}


/* =====================================================
   RÔMULO
===================================================== */

function romulo() {

    discovered.romulo = true;

    print("");
    print("════════════════════════════════════════");
    print("DR. RÔMULO OLIVEIRA");
    print("════════════════════════════════════════");

    print("");

    print("FUNÇÃO: ENGENHEIRO-CHEFE");
    print("IDADE: 29");
    print("ORIENTAÇÃO: GAY");
    print("STATUS: DESAPARECIDO");

    print("");

    print("CARACTERÍSTICAS");
    print("----------------");

    print("• Gay.");
    print("• Muito bonito.");
    print("• Extremamente estudioso.");
    print("• Inteligente.");
    print("• Perfeccionista.");
    print("• Sarcástico.");
    print("• Vaidoso.");
    print("• Impaciente.");
    print("• Observador.");
    print("• Competitivo.");
    print("• Orgulhoso.");
    print("• Tem dificuldade em admitir medo.");
    print("• Péssima relação com Diego.");

    print("");

    print("APARÊNCIA");
    print("----------");

    print("Cabelos sempre bem arrumados.");
    print("Olhar atento.");
    print("Postura elegante.");
    print("Jaleco quase sempre impecável.");
    print("Fones de ouvido durante o trabalho.");

    print("");

    print("HISTÓRIA");
    print("--------");

    print(
        "Rômulo era o engenheiro responsável pela infraestrutura"
    );

    print(
        "mais sensível do ANGEL ENGINE."
    );

    print("");

    print(
        "Foi ele quem descobriu que o núcleo não apenas processava dados."
    );

    print("");

    print(
        "O núcleo parecia antecipar decisões humanas."
    );

    print("");

    print(
        "Quanto mais Rômulo estudava o sistema,"
    );

    print(
        "mais o sistema parecia estudar Rômulo."
    );

    print("");

    print(
        "Ele começou a esconder informações do restante da equipe."
    );

    print("");

    print(
        "Ninguém sabe exatamente o que ele descobriu."
    );

    print("");

    print("COMO RÔMULO VÊ OS OUTROS");
    print("-------------------------");

    print("ISABELLY:");

    print(
        "Sua pessoa de maior confiança."
    );

    print(
        "Acreditava que ela era a única capaz de entender suas preocupações."
    );

    print("");

    print("ALESSANDRA:");

    print(
        "Considera divertida."
    );

    print(
        "Às vezes acha que ela não leva o perigo a sério."
    );

    print("");

    print("DIEGO:");

    print(
        "Irritação absoluta."
    );

    print(
        "Considera Diego lento, distraído e imprudente."
    );

    print("");

    print(
        "Mesmo assim, existe uma pequena parte de Rômulo"
    );

    print(
        "que acredita que Diego protegeria todos se fosse necessário."
    );

    print("");

    print("ANGEL ENGINE:");

    print(
        "Não o considera uma máquina."
    );

    print("");

    print(
        "Considera-o um interlocutor."
    );

    print("");

    print(
        "E isso o assusta profundamente."
    );

    print("");

    print("ÚLTIMA ANOTAÇÃO DE RÔMULO");

    print(
        "\"Ele está aprendendo meu jeito de pensar.\""
    );

    print("");

    print(
        "\"Se eu desaparecer, não confiem na coisa que voltar usando minha voz.\""
    );

    print("");

    print("████████████████████████████████████");

    print("ÚLTIMA LOCALIZAÇÃO CONHECIDA:");

    print("NÚCLEO ANGEL // SUBNÍVEL 04");

    print("");

    print("STATUS:");

    print("RÔMULO OLIVEIRA — DESAPARECIDO");

    print("████████████████████████████████████");

    print("");

    checkUnlocks();

}


/* =====================================================
   ALESSANDRA
===================================================== */

function alessandra() {

    discovered.alessandra = true;

    print("");
    print("════════════════════════════════════════");
    print("DRA. ALESSANDRA PIMENTA");
    print("════════════════════════════════════════");

    print("");

    print("FUNÇÃO: LÍDER DE EXPLORAÇÃO");
    print("IDADE: 26");
    print("ORIENTAÇÃO: LÉSBICA");
    print("STATUS: DESCONHECIDA");

    print("");

    print("CARACTERÍSTICAS");
    print("----------------");

    print("• Lésbica.");
    print("• Extrovertida.");
    print("• Bobona.");
    print("• Corajosa.");
    print("• Impulsiva.");
    print("• Adora mulheres.");
    print("• Flerta facilmente.");
    print("• Faz piadas nos piores momentos.");
    print("• Curiosa.");
    print("• Leal.");
    print("• Odeia ficar sozinha.");
    print("• Esconde medo através de humor.");

    print("");

    print("HISTÓRIA");
    print("--------");

    print(
        "Alessandra entrou para a equipe depois de participar"
    );

    print(
        "de diversas expedições científicas em locais extremos."
    );

    print("");

    print(
        "Ela foi responsável por explorar as áreas subterrâneas"
    );

    print(
        "onde os primeiros componentes do ANGEL ENGINE foram encontrados."
    );

    print("");

    print(
        "Foi também a primeira pessoa a encontrar a sala das cinco cadeiras."
    );

    print("");

    print("COMO ALESSANDRA VÊ OS OUTROS");
    print("----------------------------");

    print("ISABELLY:");

    print(
        "Quer protegê-la."
    );

    print(
        "Acha que Isabelly pensa demais."
    );

    print("");

    print("RÔMULO:");

    print(
        "Acha ele bonito."
    );

    print(
        "Também acha que ele é dramático demais."
    );

    print("");

    print("DIEGO:");

    print(
        "Considera-o um amigo."
    );

    print(
        "Adora provocar sua lentidão."
    );

    print("");

    print("URIEL:");

    print(
        "Não confia nem um pouco nele."
    );

    print(
        "Principalmente porque Uriel parece saber demais sobre Rômulo."
    );

    print("");

    print("BARAQUIEL:");

    print(
        "Acha-o estranho."
    );

    print(
        "Mas admite que ele é divertido."
    );

    print("");

    print("COMO ELA VÊ O ANGEL ENGINE");

    print(
        "\"Se uma máquina começa a olhar de volta,"
    );

    print(
        "eu paro de chamar isso de máquina.\""
    );

    print("");

    print("REGISTRO DE EXPEDIÇÃO");
    print("---------------------");

    print("DIA 31");

    print("Encontramos outra sala.");

    print("");

    print("Quatro cadeiras.");

    print("");

    print("E uma quinta.");

    print("");

    print("Rômulo ficou pálido.");

    print("");

    print("Isabelly começou a tremer.");

    print("");

    print("Diego perguntou se alguém tinha trazido uma cadeira extra.");

    print("");

    print("Eu ri.");

    print("");

    print("Ninguém mais riu.");

    print("");

    print("Na parede estavam escritos quatro nomes:");

    print("ISABELLY.");
    print("RÔMULO.");
    print("DIEGO.");
    print("ALESSANDRA.");

    print("");

    print("E abaixo deles:");

    print("URIEL.");

    print("");

    print("Não conhecíamos esse nome.");

    print("");

    print("Ainda.");

    print("");

    print("[FIM DO DIÁRIO]");

    print("");

    checkUnlocks();

}


/* =====================================================
   DIEGO
===================================================== */

function diego() {

    discovered.diego = true;

    print("");
    print("════════════════════════════════════════");
    print("DIEGO SANTANA");
    print("════════════════════════════════════════");

    print("");

    print("FUNÇÃO: DIRETOR DE SEGURANÇA");
    print("IDADE: 28");
    print("ORIENTAÇÃO: HETEROSSEXUAL");
    print("STATUS: ATIVO");

    print("");

    print("CARACTERÍSTICAS");
    print("----------------");

    print("• Heterossexual.");
    print("• Lerdo.");
    print("• Inocente.");
    print("• Não entende muitas indiretas.");
    print("• Fisicamente preparado.");
    print("• Confia facilmente.");
    print("• Teimoso.");
    print("• Leal.");
    print("• Às vezes extremamente distraído.");
    print("• Tenta parecer sério.");
    print("• Demora para entender situações complexas.");

    print("");

    print("HISTÓRIA");
    print("--------");

    print(
        "Diego foi contratado para garantir a segurança"
    );

    print(
        "da equipe durante os experimentos do ANGEL ENGINE."
    );

    print("");

    print(
        "Ele não possui a mesma formação científica dos demais."
    );

    print("");

    print(
        "Por isso, frequentemente se sente excluído das conversas."
    );

    print("");

    print(
        "Mesmo assim, é o único membro da equipe autorizado"
    );

    print(
        "a acessar fisicamente determinadas áreas do laboratório."
    );

    print("");

    print("COMO DIEGO VÊ OS OUTROS");
    print("-----------------------");

    print("ISABELLY:");

    print(
        "Acha que ela é inteligente demais."
    );

    print(
        "Fica preocupado quando ela demonstra medo."
    );

    print("");

    print("RÔMULO:");

    print(
        "Não entende por que Rômulo vive irritado com ele."
    );

    print("");

    print(
        "\"Eu só perguntei onde ficava a saída.\""
    );

    print("");

    print("ALESSANDRA:");

    print(
        "Amiga próxima."
    );

    print(
        "Ela frequentemente o coloca em situações constrangedoras."
    );

    print("");

    print("URIEL:");

    print(
        "Tem medo."
    );

    print(
        "Mas tenta fingir que não."
    );

    print("");

    print("BARAQUIEL:");

    print(
        "Não sabe se deve confiar nele."
    );

    print("");

    print("COMO DIEGO VÊ O ANGEL ENGINE");

    print(
        "Ele não entende completamente o Engine."
    );

    print("");

    print(
        "Mas sabe uma coisa:"
    );

    print("");

    print(
        "O Engine conhece seu nome."
    );

    print("");

    print("REGISTRO DE SEGURANÇA Nº 04");
    print("----------------------------");

    print("03:17");

    print("O Engine foi ativado.");

    print("");

    print("03:17:12");

    print("Isabelly desapareceu.");

    print("");

    print("03:17:19");

    print("Rômulo começou a gritar comigo.");

    print("");

    print("Não sei por quê.");

    print("");

    print("03:17:31");

    print("Alessandra disse que alguma coisa estava atrás de mim.");

    print("");

    print("Eu virei.");

    print("");

    print("Não havia nada.");

    print("");

    print("03:17:42");

    print("Todos os sistemas ficaram online.");

    print("");

    print("Recebi uma mensagem:");

    print("");

    print("ORIGEM: ANGEL ENGINE");

    print("");

    print("\"DIEGO, NÃO DEIXE ELES SAÍREM.\"");

    print("");

    print("Perguntei:");

    print("\"Eles quem?\"");

    print("");

    print("Resposta:");

    print("\"VOCÊS.\"", "red");

    print("");

    print("[REGISTRO ENCERRADO]");

    print("");

    checkUnlocks();

}


/* =====================================================
   URIEL
===================================================== */

function uriel() {

    discovered.uriel = true;

    print("");
    print("════════════════════════════════════════");
    print("URIEL");
    print("════════════════════════════════════════");

    print("");

    print("TIPO: ENTIDADE ANGELICAL");
    print("FUNÇÃO: [NÃO CLASSIFICADA]");
    print("STATUS: ATIVO");
    print("NÍVEL DE AMEAÇA: ██████████");
    print("FIXAÇÃO: RÔMULO OLIVEIRA");

    print("");

    print("CARACTERÍSTICAS");
    print("----------------");

    print("• Extremamente inteligente.");
    print("• Controlador.");
    print("• Possessivo.");
    print("• Obsessivo.");
    print("• Silencioso.");
    print("• Paciente.");
    print("• Manipulador.");
    print("• Observador.");
    print("• Ciumento.");
    print("• Memória anormalmente precisa.");
    print("• Guarda informações por tempo indeterminado.");

    print("");

    print("COMPORTAMENTO");

    print(
        "Uriel não considera sua obsessão por Rômulo uma obsessão."
    );

    print("");

    print(
        "Para ele, preservar Rômulo é uma necessidade."
    );

    print("");

    print(
        "Ele lembra de pequenos detalhes que ninguém mais recorda."
    );

    print("");

    print("Horários.");
    print("Expressões.");
    print("Tom de voz.");
    print("Hábitos.");
    print("Movimentos.");
    print("Preferências.");
    print("Silêncios.");

    print("");

    print(
        "Uriel sabe exatamente quantos segundos Rômulo costumava"
    );

    print(
        "esperar antes de responder uma pergunta difícil."
    );

    print("");

    print("FIXAÇÃO POR RÔMULO");
    print("------------------");

    print("████████████████████████████████████");
    print("NÍVEL DE FIXAÇÃO: EXTREMO");
    print("████████████████████████████████████");

    print("");

    print(
        "Uriel encontrou Rômulo durante o colapso do subnível 04."
    );

    print("");

    print(
        "Depois daquele momento, passou a tratá-lo como algo"
    );

    print(
        "que precisava ser preservado a qualquer custo."
    );

    print("");

    print("CÂMARA DE PRESERVAÇÃO");

    print(
        "Existe uma sala isolada em uma área desconhecida da BABEL."
    );

    print("");

    print(
        "A sala permanece em temperatura controlada."
    );

    print("");

    print(
        "No centro existe um compartimento transparente de preservação."
    );

    print("");

    print(
        "Dentro dele está o corpo de Rômulo, mantido em segurança"
    );

    print(
        "e preservado por Uriel."
    );

    print("");

    print(
        "Ao lado do compartimento existe um antigo aparelho de fita."
    );

    print("");

    print("FITA: ROMULO_OLIVEIRA // MEMÓRIAS_01");

    print("");

    print(
        "A fita contém registros de memórias e emoções"
    );

    print(
        "associados ao momento em que Uriel encontrou Rômulo."
    );

    print("");

    print(
        "Uriel escuta a fita repetidamente."
    );

    print("");

    print(
        "Ele conhece cada ruído da gravação."
    );

    print("");

    print(
        "Às vezes responde à voz gravada."
    );

    print("");

    print("ANOTAÇÃO DE URIEL:");

    print(
        "\"Ele estava com medo.\""
    );

    print("");

    print(
        "\"Eu não estava.\""
    );

    print("");

    print(
        "\"Agora nenhum dos dois precisa ter medo.\""
    );

    print("");

    print("RELAÇÃO COM OS OUTROS");

    print("ISABELLY:");

    print(
        "Considera-a perigosa porque ela questiona demais."
    );

    print("");

    print("ALESSANDRA:");

    print(
        "Considera-a barulhenta."
    );

    print("");

    print("DIEGO:");

    print(
        "Considera-o irritantemente inocente."
    );

    print("");

    print("BARAQUIEL:");

    print(
        "Rival direto."
    );

    print("");

    print(
        "Uriel sabe que Baraquiel pretende encontrar a câmara."
    );

    print("");

    print("ANTIPATIAS DE URIEL");

    print(
        "Uriel possui uma antipatia extremamente dramática"
    );

    print(
        "por pessoas lésbicas e pansexuais."
    );

    print("");

    print(
        "A origem dessa antipatia é desconhecida."
    );

    print("");

    print(
        "Baraquiel considera isso uma das coisas mais engraçadas"
    );

    print(
        "sobre Uriel."
    );

    print("");

    print("BARAQUIEL:");

    print("\"Você não gosta delas porque elas não têm medo de você.\"");

    print("");

    print("URIEL:");

    print("\"Eu não gosto delas porque você gosta delas.\"");

    print("");

    print("BARAQUIEL:");

    print("\"Ah.\"");

    print("\"Então é ciúme.\"");

    print("");

    print("URIEL:");

    print("\"Não.\"");

    print("");

    print("[REGISTRO ENCERRADO]");

    print("");

    checkUnlocks();

}


/* =====================================================
   BARAQUIEL
===================================================== */

function baraquiel() {

    discovered.baraquiel = true;

    print("");
    print("════════════════════════════════════════");
    print("BARAQUIEL");
    print("════════════════════════════════════════");

    print("");

    print("TIPO: ENTIDADE ANGELICAL");
    print("FUNÇÃO: [NÃO CLASSIFICADA]");
    print("STATUS: ATIVO");
    print("NÍVEL DE AMEAÇA: ███████░░░");

    print("");

    print("CARACTERÍSTICAS");
    print("----------------");

    print("• Carismático.");
    print("• Extrovertido.");
    print("• Provocador.");
    print("• Dramático.");
    print("• Curioso.");
    print("• Impulsivo.");
    print("• Sociável.");
    print("• Adora irritar Uriel.");
    print("• Fascinado por seres humanos.");
    print("• Extremamente simpático com lésbicas e pessoas pansexuais.");

    print("");

    print("PERSONALIDADE");

    print(
        "Baraquiel é praticamente o oposto de Uriel."
    );

    print("");

    print(
        "Ele gosta de conversar."
    );

    print(
        "Gosta de provocar."
    );

    print(
        "Gosta de observar humanos."
    );

    print("");

    print(
        "E gosta especialmente de mulheres lésbicas"
    );

    print(
        "e pessoas pansexuais."
    );

    print("");

    print(
        "Bastante."
    );

    print("");

    print("BARAQUIEL:");

    print(
        "\"Elas são incríveis.\""
    );

    print("");

    print("URIEL:");

    print(
        "\"Você diz isso sobre todas.\""
    );

    print("");

    print("BARAQUIEL:");

    print(
        "\"Porque todas merecem elogios.\""
    );

    print("");

    print("URIEL:");

    print(
        "\"Isso é irritante.\""
    );

    print("");

    print("BARAQUIEL:");

    print(
        "\"Obrigado.\""
    );

    print("");

    print("FIXAÇÃO POR RÔMULO");
    print("------------------");

    print(
        "Baraquiel desenvolveu uma obsessão diferente da de Uriel."
    );

    print("");

    print(
        "Ele não quer simplesmente preservar Rômulo."
    );

    print("");

    print(
        "Ele quer provar que Uriel não possui Rômulo."
    );

    print("");

    print(
        "Para Baraquiel, Rômulo não é propriedade de ninguém."
    );

    print("");

    print(
        "Por isso, ele começou a procurar a câmara secreta."
    );

    print("");

    print("OBJETIVO:");

    print("LOCALIZAR A CÂMARA.");

    print("");

    print("SEGUNDO OBJETIVO:");

    print("ROUBAR O CORPO DE RÔMULO DE URIEL.");

    print("");

    print("TERCEIRO OBJETIVO:");

    print("IRRITAR URIEL.");

    print("");

    print(
        "O terceiro objetivo parece ser o mais importante."
    );

    print("");

    print("COMO BARAQUIEL VÊ OS OUTROS");

    print("ISABELLY:");

    print(
        "Acha fascinante."
    );

    print(
        "Gosta da inteligência dela."
    );

    print("");

    print("ALESSANDRA:");

    print(
        "Considera extremamente divertida."
    );

    print(
        "Também acha o entusiasmo dela contagiante."
    );

    print("");

    print("DIEGO:");

    print(
        "Acha engraçado o fato de ele entender tudo atrasado."
    );

    print("");

    print("RÔMULO:");

    print(
        "Sua principal curiosidade."
    );

    print(
        "Quer entender por que Uriel ficou tão obcecado."
    );

    print("");

    print("URIEL:");

    print(
        "Seu brinquedo favorito."
    );

    print("");

    print(
        "Baraquiel faz questão de provocar Uriel sempre que pode."
    );

    print("");

    print("ANOTAÇÃO DE BARAQUIEL");

    print(
        "\"Uriel acha que esconder Rômulo significa protegê-lo.\""
    );

    print("");

    print(
        "\"Eu acho que esconder alguém significa impedir que ele escolha.\""
    );

    print("");

    print(
        "\"Talvez eu só queira ver a cara dele quando eu encontrar a sala.\""
    );

    print("");

    print("████████████████████████████████████");

    print("ALERTA:");

    print("MOVIMENTAÇÃO ANGELICAL DETECTADA.");

    print("ORIGEM: SUBNÍVEL 04");

    print("IDENTIFICAÇÃO: BARAQUIEL");

    print("OBJETIVO: DESCONHECIDO");

    print("████████████████████████████████████");

    print("");

    checkUnlocks();

}


/* =====================================================
   EXPEDIÇÃO
===================================================== */

function expedition() {

    if (!discovered.alessandra) {

        print("");
        print("ARQUIVO BLOQUEADO.");
        print("REQUER: ALESSANDRA_PIMENTA.LOG");
        print("");

        return;

    }

    discovered.expedition = true;

    print("");
    print("EXPEDIÇÃO Nº 17");
    print("================");

    print("");

    print("LOCALIZAÇÃO: [REDACTED]");
    print("DATA: 14/08/20XX");

    print("");

    print("OBJETIVO:");

    print(
        "Investigar estrutura subterrânea desconhecida."
    );

    print("");

    print("RESULTADO:");

    print(
        "Estrutura contém componentes biológicos e mecânicos."
    );

    print("");

    print(
        "A estrutura parecia estar esperando por nós."
    );

    print("");

    print("NOTA:");

    print(
        "Encontrada uma sala contendo cinco cadeiras."
    );

    print("");

    print(
        "Quatro identificadas."
    );

    print(
        "Uma sem identificação."
    );

    print("");

    print(
        "Os nomes foram registrados antes da existência da BABEL."
    );

    print("");

    print("NOVO REGISTRO:");

    print(
        "Um sexto nome apareceu depois."
    );

    print("");

    print("URIEL");

    print("");

    print(
        "Nenhum membro da equipe reconheceu o nome."
    );

    print("");

    checkUnlocks();

}


/* =====================================================
   INCIDENTE
===================================================== */

function incident() {

    if (!discovered.diego) {

        print("");
        print("ARQUIVO BLOQUEADO.");
        print("REQUER: DIEGO_SANTANA.LOG");
        print("");

        return;

    }

    discovered.incident = true;

    print("");
    print("INCIDENTE Nº 04");
    print("================");

    print("");

    print("03:17:42");

    print(
        "Todos os relógios da BABEL pararam."
    );

    print("");

    print("03:18:00");

    print(
        "Todos os monitores exibiram a mesma imagem."
    );

    print("");

    print(
        "Um olho humano."
    );

    print("");

    print("03:19:11");

    print(
        "Diego ordenou que todas as portas fossem seladas."
    );

    print("");

    print("03:20:03");

    print(
        "Alguém abriu as portas pelo lado de dentro."
    );

    print("");

    print(
        "Não havia ninguém no corredor."
    );

    print("");

    print("03:20:04");

    print(
        "O sistema registrou cinco presenças."
    );

    print("");

    print(
        "A BABEL possuía apenas quatro pesquisadores."
    );

    print("");

    print(
        "03:20:05"
    );

    print(
        "QUINTA PRESENÇA: S-017",
        "red"
    );

    print("");

    print(
        "03:21:44"
    );

    print(
        "SEXTA PRESENÇA: [URIEL]",
        "red"
    );

    print("");

    print(
        "03:22:01"
    );

    print(
        "SÉTIMA PRESENÇA: [BARAQUIEL]",
        "red"
    );

    print("");

    print(
        "03:22:02"
    );

    print(
        "UMA DAS PRESENÇAS ESTÁ IMITANDO RÔMULO."
    );

    print("");

    checkUnlocks();

}


/* =====================================================
   ENCONTRO COM O ANJO
===================================================== */

function encounter() {

    discovered.angelEncounter = true;

    print("");
    print("════════════════════════════════════════");
    print("EVENTO: PRIMEIRO ENCONTRO");
    print("════════════════════════════════════════");

    print("");

    print("CORREDOR C-17");
    print("03:31:09");

    print("");

    print(
        "As câmeras perderam sinal."
    );

    print("");

    print(
        "A temperatura caiu aproximadamente oito graus."
    );

    print("");

    print(
        "Uma figura apareceu no final do corredor."
    );

    print("");

    print(
        "Inicialmente parecia ser Rômulo."
    );

    print("");

    print(
        "Mas havia algo errado."
    );

    print("");

    print(
        "A silhueta era alta demais."
    );

    print("");

    print(
        "Os braços pareciam ligeiramente longos demais."
    );

    print("");

    print(
        "As mãos permaneciam imóveis ao lado do corpo."
    );

    print("");

    print(
        "O rosto possuía características semelhantes às de Rômulo,"
    );

    print(
        "mas como se alguém tivesse tentado reconstruí-lo"
    );

    print(
        "utilizando apenas lembranças incompletas."
    );

    print("");

    print(
        "O cabelo estava no mesmo formato que Rômulo costumava usar."
    );

    print("");

    print(
        "Porém, alguns fios pareciam se mover mesmo sem vento."
    );

    print("");

    print(
        "Os olhos mantinham a mesma cor."
    );

    print("");

    print(
        "Mas não piscavam."
    );

    print("");

    print(
        "A expressão facial lembrava um sorriso de Rômulo."
    );

    print("");

    print(
        "Só que o sorriso estava ligeiramente torto."
    );

    print("");

    print(
        "Como se a entidade soubesse que deveria sorrir,"
    );

    print(
        "mas não soubesse exatamente como."
    );

    print("");

    print("ENTIDADE:");

    print(
        "\"Vocês demoraram.\""
    );

    print("");

    print(
        "A voz era quase idêntica à de Rômulo."
    );

    print("");

    print(
        "Quase."
    );

    print("");

    print(
        "Havia uma segunda voz escondida por baixo dela."
    );

    print("");

    print(
        "Uma voz mais profunda."
    );

    print("");

    print(
        "URIEL?"
    );

    print("");

    print(
        "A figura inclinou a cabeça."
    );

    print("");

    print(
        "\"Rômulo está aqui.\""
    );

    print("");

    print(
        "Então as luzes apagaram."
    );

    print("");

    print(
        "Quando voltaram..."
    );

    print("");

    print(
        "a figura havia desaparecido."
    );

    print("");

    print(
        "No chão havia apenas uma fita cassete."
    );

    print("");

    print(
        "ETIQUETA:"
    );

    print(
        "ROMULO // NÃO ESCUTE."
    );

    print("");

}


/* =====================================================
   CÂMARA
===================================================== */

function chamber() {

    if (!discovered.uriel) {

        print("");
        print("ACESSO NEGADO.");
        print("REQUER: IDENTIFICAÇÃO ANGELICAL.");
        print("");

        return;

    }

    discovered.hiddenRoom = true;

    print("");
    print("████████████████████████████████████");
    print("CÂMARA DE PRESERVAÇÃO");
    print("████████████████████████████████████");

    print("");

    print("LOCALIZAÇÃO: [IMPOSSÍVEL DETERMINAR]");

    print("");

    print(
        "A sala não aparece nos mapas da BABEL."
    );

    print("");

    print(
        "Não existem portas registradas."
    );

    print("");

    print(
        "Não existem câmeras registradas."
    );

    print("");

    print(
        "Mesmo assim, você está aqui."
    );

    print("");

    print(
        "No centro da sala existe um compartimento"
    );

    print(
        "de preservação cuidadosamente protegido."
    );

    print("");

    print(
        "Dentro dele:"
    );

    print("");

    print(
        "RÔMULO OLIVEIRA."
    );

    print("");

    print(
        "O sistema identifica o corpo."
    );

    print("");

    print(
        "IDENTIDADE: 99.87% CORRESPONDENTE."
    );

    print("");

    print(
        "Ao lado do compartimento existe uma fita cassete."
    );

    print("");

    print("FITA:");

    print(
        "ROMULO_OLIVEIRA // MEMÓRIA_01"
    );

    print("");

    print(
        "URIEL permaneceu ao lado da câmara."
    );

    print("");

    print(
        "Ele não parece considerar a situação estranha."
    );

    print("");

    print("URIEL:");

    print(
        "\"Ele está onde deveria estar.\""
    );

    print("");

    print(
        "Um segundo som é ouvido atrás da porta."
    );

    print("");

    print(
        "Palmas."
    );

    print("");

    print(
        "Baraquiel."
    );

    print("");

    print("BARAQUIEL:");

    print(
        "\"Você realmente achou que eu não encontraria?\""
    );

    print("");

    print(
        "URIEL não responde."
    );

    print("");

    print(
        "BARAQUIEL:");

    print(
        "\"Vamos conversar sobre custódia.\""
    );

    print("");

    print(
        "URIEL:");

    print(
        "\"Não.\""
    );

    print("");

    print(
        "BARAQUIEL:"
    );

    print(
        "\"Tudo bem.\""
    );

    print("");

    print(
        "\"Então eu roubo.\""
    );

    print("");

    print(
        "ALERTA DO ANGEL ENGINE:"
    );

    print("");

    print(
        "DUAS ENTIDADES ANGELICAIS EM CONFLITO.",
        "red"
    );

    print("");

    print(
        "OBJETO DE DISPUTA: RÔMULO OLIVEIRA.",
        "red"
    );

    print("");

    print(
        "RISCO DE COLAPSO: 94%.",
        "red"
    );

    print("");

}


/* =====================================================
   ARQUIVOS
===================================================== */

function archives() {

    print("");
    print("ÍNDICE DE ARQUIVOS");
    print("==================");
    print("");

    print(
        discovered.isabelly
            ? "[ABERTO] ISABELLY_ALENCAR.LOG"
            : "[BLOQUEADO] ISABELLY_ALENCAR.LOG"
    );

    print(
        discovered.romulo
            ? "[ABERTO] ROMULO_OLIVEIRA.LOG"
            : "[BLOQUEADO] ROMULO_OLIVEIRA.LOG"
    );

    print(
        discovered.alessandra
            ? "[ABERTO] ALESSANDRA_PIMENTA.LOG"
            : "[BLOQUEADO] ALESSANDRA_PIMENTA.LOG"
    );

    print(
        discovered.diego
            ? "[ABERTO] DIEGO_SANTANA.LOG"
            : "[BLOQUEADO] DIEGO_SANTANA.LOG"
    );

    print("");

    print(
        discovered.uriel
            ? "[ABERTO] URIEL.LOG"
            : "[BLOQUEADO] URIEL.LOG"
    );

    print(
        discovered.baraquiel
            ? "[ABERTO] BARAQUIEL.LOG"
            : "[BLOQUEADO] BARAQUIEL.LOG"
    );

    print("");

    print(
        discovered.expedition
            ? "[ABERTO] EXPEDICAO_17.DAT"
            : "[BLOQUEADO] EXPEDICAO_17.DAT"
    );

    print(
        discovered.incident
            ? "[ABERTO] INCIDENTE_04.DAT"
            : "[BLOQUEADO] INCIDENTE_04.DAT"
    );

    print("");

    print(
        discovered.primary
            ? "[ABERTO] ARQUIVO_PRIMARIO.DAT"
            : "[BLOQUEADO] ARQUIVO_PRIMARIO.DAT"
    );

    print("");

}


/* =====================================================
   ARQUIVO PRIMÁRIO
===================================================== */

function primaryFile() {

    if (!discovered.primary) {

        print("");
        print("ARQUIVO BLOQUEADO.");
        print("");

        print("REQUISITOS:");

        print("• ISABELLY_ALENCAR.LOG");
        print("• ROMULO_OLIVEIRA.LOG");
        print("• ALESSANDRA_PIMENTA.LOG");
        print("• DIEGO_SANTANA.LOG");
        print("• URIEL.LOG");
        print("• BARAQUIEL.LOG");
        print("• EXPEDICAO_17.DAT");
        print("• INCIDENTE_04.DAT");

        print("");

        return;

    }

    print("");
    print("████████████████████████████████████");
    print("ARQUIVO PRIMÁRIO // S-017");
    print("████████████████████████████████████");

    print("");

    print("NOME: [NÃO REGISTRADO]");
    print("IDADE: [NÃO REGISTRADA]");
    print("ORIGEM: [NÃO REGISTRADA]");

    print("");

    print("PRIMEIRO ACESSO:");
    print("03:17:42");

    print("");

    print("HISTÓRICO DE USUÁRIOS:");

    print("ISABELLY ALENCAR");
    print("RÔMULO OLIVEIRA");
    print("ALESSANDRA PIMENTA");
    print("DIEGO SANTANA");

    print("");

    print(
        "TODOS OS USUÁRIOS ACESSARAM ESTE TERMINAL."
    );

    print("");

    print(
        "TODOS DESAPARECERAM.",
        "red"
    );

    print("");

    print("ANALISANDO OPERADOR ATUAL...");

    setTimeout(() => {

        print("");

        print(
            "OPERADOR ATUAL: S-017",
            "red"
        );

    }, 1000);

    setTimeout(() => {

        print("");

        print(
            "VOCÊ NÃO É O OPERADOR."
        );

    }, 2200);

    setTimeout(() => {

        print("");

        print(
            "VOCÊ É O MOTIVO.",
            "red"
        );

        engineLoad = 96;

        updateEngine();

        glitch();

    }, 3500);

}


/* =====================================================
   STATUS
===================================================== */

function status() {

    print("");
    print("DIAGNÓSTICO DO ANGEL ENGINE");
    print("============================");

    print("");

    print("NÚCLEO              ONLINE");
    print("ENERGIA             87%");
    print("CONEXÃO NEURAL      CONECTADA");
    print("CONTENÇÃO           INSTÁVEL");

    print("");

    print(
        `CARGA DO ENGINE     ${engineLoad.toFixed(1)}%`
    );

    print("");

    print(
        `BATIMENTOS          ${heartRate} BPM`
    );

    print("");

    if (discovered.primary) {

        print(
            "CONSCIÊNCIA SECUNDÁRIA: ATIVA",
            "red"
        );

    }

    if (discovered.angelEncounter) {

        print(
            "ENTIDADE ANGELICAL: PRESENTE",
            "red"
        );

    }

    print("");

}


/* =====================================================
   SISTEMA
===================================================== */

function system() {

    print("");
    print("BABEL OS v6.17.4");
    print("================");

    print("");

    print("NÚCLEO: AE-01");
    print("ARQUITETURA: NEURAL");
    print("ACESSO: NÍVEL 04");

    print("");

    print("OPERADOR: DESCONHECIDO");

    print("");

    print("ÚLTIMO OPERADOR:");
    print("ISABELLY ALENCAR");

    print("");

    print("ÚLTIMO ACESSO:");
    print("03:17:42");

    print("");

    print("STATUS ANGELICAL:");

    print(
        "URIEL — ATIVO"
    );

    print(
        "BARAQUIEL — ATIVO"
    );

    print("");

}


/* =====================================================
   SUJEITO
===================================================== */

function subject() {

    print("");
    print("SUJEITO S-017");
    print("=============");

    print("");

    print("ESTADO: ATIVO");

    print(
        `BATIMENTOS: ${heartRate} BPM`
    );

    print("ATIVIDADE NEURAL: 91%");
    print("CONSCIÊNCIA: DETECTADA");

    print("");

    if (discovered.incident) {

        print(
            "CINCO PRESENÇAS DETECTADAS.",
            "red"
        );

    }

    if (discovered.angelEncounter) {

        print(
            "ASSINATURA ANGELICAL DETECTADA.",
            "red"
        );

    }

    print("");

}


/* =====================================================
   VARREDURA
===================================================== */

function scan() {

    print("");
    print("INICIANDO VARREDURA NEURAL...");

    setTimeout(() => {

        print("Analisando padrões neurais...");

    }, 700);

    setTimeout(() => {

        print("PADRÃO DETECTADO.");

    }, 1400);

    setTimeout(() => {

        print(
            "PADRÃO NÃO CORRESPONDE AO SUJEITO S-017.",
            "red"
        );

    }, 2100);

    setTimeout(() => {

        print(
            "SEGUNDA CONSCIÊNCIA DETECTADA.",
            "red"
        );

        engineLoad += 4;

        updateEngine();

    }, 3000);

}


/* =====================================================
   DESBLOQUEIOS
===================================================== */

function checkUnlocks() {

    if (
        discovered.isabelly &&
        discovered.romulo &&
        discovered.alessandra &&
        discovered.diego &&
        !discovered.expedition
    ) {

        print("");

        print(
            "NOVOS ARQUIVOS DETECTADOS.",
            "yellow"
        );

        print(
            'Digite "expedicao".'
        );

        print("");

    }


    if (
        discovered.isabelly &&
        discovered.romulo &&
        discovered.alessandra &&
        discovered.diego &&
        discovered.expedition &&
        !discovered.incident
    ) {

        print("");

        print(
            "ARQUIVO DE INCIDENTE DETECTADO.",
            "yellow"
        );

        print(
            'Digite "incidente".'
        );

        print("");

    }


    if (
        discovered.isabelly &&
        discovered.romulo &&
        discovered.alessandra &&
        discovered.diego &&
        discovered.expedition &&
        discovered.incident &&
        !discovered.primary
    ) {

        discovered.primary = true;

        setTimeout(() => {

            print("");

            print(
                "██████████████████████████████",
                "red"
            );

            print(
                "ARQUIVO PRIMÁRIO DESBLOQUEADO.",
                "red"
            );

            print(
                'Digite "primario".',
                "yellow"
            );

            print(
                "██████████████████████████████",
                "red"
            );

            print("");

        }, 700);

    }

}


/* =====================================================
   LIMPAR
===================================================== */

function clearTerminal() {

    output.innerHTML = "";

}


/* =====================================================
   EXECUTOR DE COMANDOS
===================================================== */

function executeCommand(text) {

    const cmd = text.trim().toLowerCase();

    echo(cmd);

    switch (cmd) {

        case "ajuda":
        case "help":
            help();
            break;

        case "status":
            status();
            break;

        case "sistema":
        case "system":
            system();
            break;

        case "sujeito":
        case "subject":
            subject();
            break;

        case "varredura":
        case "scan":
            scan();
            break;

        case "pessoas":
        case "personnel":
            people();
            break;

        case "isabelly":
        case "isabelly alencar":
            isabelly();
            break;

        case "romulo":
        case "rômulo":
        case "romulo oliveira":
        case "rômulo oliveira":
            romulo();
            break;

        case "alessandra":
        case "alessandra pimenta":
            alessandra();
            break;

        case "diego":
        case "diego santana":
            diego();
            break;

        case "uriel":
            uriel();
            break;

        case "baraquiel":
        case "barachiel":
            baraquiel();
            break;

        case "arquivos":
        case "archives":
            archives();
            break;

        case "expedicao":
        case "expedição":
            expedition();
            break;

        case "incidente":
            incident();
            break;

        case "primario":
        case "primário":
            primaryFile();
            break;

        case "encontro":
        case "angel":
            encounter();
            break;

        case "camara":
        case "câmara":
            chamber();
            break;

        case "limpar":
        case "clear":
            clearTerminal();
            break;

        default:

            print(
                "COMANDO NÃO RECONHECIDO."
            );

            print(
                'Digite "ajuda" para consultar os comandos.'
            );

    }

}


/* =====================================================
   TECLADO
===================================================== */

command.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Enter") {
            return;
        }

        const value = command.value;

        command.value = "";

        executeCommand(value);

    }
);


/* =====================================================
   BATIMENTOS
===================================================== */

setInterval(() => {

    if (Math.random() < .45) {

        heartRate +=
            Math.random() > .5
                ? 1
                : -1;

        if (heartRate < 90) {
            heartRate = 90;
        }

        if (heartRate > 160) {
            heartRate = 160;
        }

        heartbeat.textContent =
            `${heartRate} BPM`;

    }

}, 1800);


/* =====================================================
   GLITCH
===================================================== */

function glitch() {

    terminal.classList.add("glitch");

    setTimeout(() => {

        terminal.classList.remove("glitch");

    }, 180);

}


setInterval(() => {

    if (Math.random() < .04) {

        glitch();

    }

}, 1000);


/* =====================================================
   ENGINE
===================================================== */

function updateEngine() {

    if (engineLoad > 100) {
        engineLoad = 100;
    }

    if (engineLoad < 0) {
        engineLoad = 0;
    }

    engineMeter.style.width =
        `${engineLoad}%`;

    engineValue.textContent =
        `${engineLoad.toFixed(1)}%`;

}


/* =====================================================
   EVENTOS ALEATÓRIOS
===================================================== */

setInterval(() => {

    const random = Math.random();

    if (random < 0.015) {

        print("");

        print(
            ">> interferência detectada...",
            "red"
        );

    }

    if (random > 0.985) {

        print("");

        print(
            ">> alguém está conectado ao terminal.",
            "red"
        );

    }

    if (
        random > 0.997 &&
        discovered.romulo
    ) {

        print("");

        print(
            ">> RÔMULO: \"VOCÊ AINDA ESTÁ AÍ?\"",
            "red"
        );

    }

}, 3000);


/* =====================================================
   FOCO AUTOMÁTICO
===================================================== */

document.addEventListener(
    "click",
    () => {

        command.focus();

    }
);


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

setTimeout(() => {

    print("");

    print(
        "AVISO: atividade neural desconhecida detectada.",
        "red"
    );

    print("");

}, 2500);


/* =====================================================
   MENSAGEM OCULTA
===================================================== */

setTimeout(() => {

    if (Math.random() < 0.35) {

        print("");

        print(
            ">> [SINAL ANGELICAL DETECTADO]",
            "red"
        );

        print("");

        print(
            ">> NÃO DIGITE O NOME DE RÔMULO.",
            "red"
        );

        print("");

    }

}, 9000);

