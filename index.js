const prompt = require("prompt-sync")()

// Mensagem de boas-vindas
function bemVindo() {
    return "Olá, bem vindo ao guia de xadrez, aqui você aprenderá o que precisa para treinar e se tornar um verdadeiro jogador de xadrez."
}

// Essa função agora pede o nível e RETORNA a escolha do usuário
function pedirNivel() {
    let escolhaNivel = prompt(`Qual nível você gostaria de aprender? 
            1 - Iniciante
            2 - Intermediário
            3 - Avançado
`)
    
    // Convertemos para número para facilitar a comparação no switch
    return parseInt(escolhaNivel) 
}

// Definindo os módulos de cada nível como arrays de objetos
let iniciante = [
    { id: 1, nome: "Movimentos" },
    { id: 2, nome: "O que é o Xeque" },
    { id: 3, nome: "Xeque-mate" },
    { id: 4, nome: "Como fazer o Roque" },
    { id: 5, nome: "Captura ao Passo (En Passant)" },
    { id: 6, nome: "Dicas para Iniciantes" },
]

let intermediario = [
    { id: 1, nome: "Aberturas Comuns" },
    { id: 2, nome: "Estratégias de Meio-Jogo" },
    { id: 3, nome: "Técnicas de Finais" },
    { id: 4, nome: "Planejamento de Partidas" },
]

let avancado = [
    { id: 1, nome: "Táticas Avançadas" },
    { id: 2, nome: "Psicologia no Xadrez" },
    { id: 3, nome: "Análise de Partidas" },
    { id: 4, nome: "Estudo de Grandes Mestres" },
]

let confirmacao
let confirmacao2
// --- Início do Programa ---

console.log(bemVindo())
console.log("Existem três níveis de aprendizado: Iniciante, Intermediário e Avançado. Cada nível possui tópicos específicos para ajudar no seu desenvolvimento como jogador.")
do {

let nivelEscolhido = pedirNivel() // Armazena a escolha do usuário aqui!

switch (nivelEscolhido) {
    case 1:
        do {
        console.log("--- Módulos de Iniciante ---")
        let listaIniciante = ""

        for (let i = 0; i < iniciante.length; i++) {
            listaIniciante += `${iniciante[i].id} - ${iniciante[i].nome}\n`
        }
        let moduloInicianteId = parseInt(prompt(`Agora escolha qual módulo você quer aprender:
${listaIniciante}`))
        
        if (moduloInicianteId === 1) {
        console.log(`-----Movimentos das peças-----     
Rei:
Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.
Dama:
Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.
Torre:
Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.
Bispo:
Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.
Cavalo:
É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.
Peão:
Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.
`)
        } else if (moduloInicianteId === 2) {
            console.log(`No xadrez, o xeque é uma situação em que o rei de um jogador está ameaçado de ser capturado pelo adversário na próxima jogada. É uma jogada estratégica e importante, que serve como um aviso de perigo para o rei.
 Quando um rei está em xeque, o jogador deve obrigatoriamente tomar uma das três ações possíveis para sair da situação:
 mover o rei para uma casa segura, bloquear a ameaça com outra peça ou capturar a peça que está dando o xeque.
 É proibido fazer um movimento que deixe o rei em xeque ou mover o rei para uma casa onde ele continuaria em xeque.`)
        } else if (moduloInicianteId === 3) {
            console.log(`Xeque-mate, também conhecido simplesmente como mate, é o lance que põe fim a uma partida de xadrez quando o rei adversário está sob ataque e não pode escapar por meio de um movimento legítimo, captura da peça atacante ou bloqueio do ataque com outra peça.
 É o principal objetivo do jogo, e o jogador que realiza o xeque-mate vence a partida imediatamente.`)
        } else if (moduloInicianteId === 4) {
            console.log(`O roque é uma jogada especial no xadrez que envolve o movimento simultâneo do rei e de uma torre em um único lance, sendo a única jogada em que duas peças são movidas ao mesmo tempo.
 O objetivo principal do roque é proteger o rei, retirando-o do centro do tabuleiro, onde é mais vulnerável, e colocando-o em um canto mais seguro, geralmente atrás de uma estrutura de peões, enquanto também ativa a torre, posicionando-a mais perto do centro para facilitar ataques.
 Existem dois tipos de roque: o roque pequeno (ou roque curto), quando realizado com a torre mais próxima do rei, e o roque grande (ou roque longo), quando feito com a torre mais afastada.
Para executar o roque, o rei deve se mover duas casas na direção da torre escolhida, e a torre passa por cima do rei, ocupando a casa ao seu lado.`)
        } else if (moduloInicianteId === 5) {
            console.log(`En passant é uma regra especial do xadrez que permite a captura de um peão adversário quando ele avança duas casas em um único lance, pousando ao lado de um peão do jogador que está atacando.
 A expressão "en passant" é de origem francesa e significa "de passagem", refletindo exatamente como essa captura funciona.
 Essa regra foi introduzida para manter o equilíbrio do jogo após a mudança que permitiu que os peões avançassem duas casas em seu primeiro movimento, evitando que os jogadores pudessem criar peões passados com facilidade ao pular sobre peões inimigos.`)
        } else if (moduloInicianteId === 6) {
            console.log(`Lembre-se, o importante é se divertir com o jogo, pois o prazer é um dos maiores motivadores para continuar aprendendo e melhorando.
 Ferramentas como Lichess, Chess.com e vídeos no YouTube (como os de GothamChess ou Nelson Lopez) podem ser úteis para aprender regras, estratégias e resolver problemas de tática.
 A promoção de peões, quando alcançam a oitava linha, é outra regra especial importante: um peão pode ser promovido a qualquer outra peça, geralmente a rainha.`)
        } else {
            console.log("Módulo inválido para o nível Iniciante.")
        }
        confirmacao = prompt(`Você gostaria de aprender outro módulo? (S/N)`).toUpperCase()
    } while (confirmacao === "S")
    break

    case 2:
    do {
        console.log("--- Módulos de Intermediário ---")
        let listaIntermediario = ""
        for (let i = 0; i < intermediario.length; i++) {
            listaIntermediario += `${intermediario[i].id} - ${intermediario[i].nome}\n`
        }
        let moduloIntermediarioId = parseInt(prompt(`Agora escolha qual módulo você quer aprender:
${listaIntermediario}`))

        if (moduloIntermediarioId === 1) {
            console.log(`As aberturas comuns no xadrez são as primeiras jogadas que definem o tom estratégico e tático de uma partida, sendo fundamentais para o desenvolvimento do jogo.
 As mais populares são baseadas nos primeiros lances das brancas, com destaque para a Abertura do Peão do Rei (1.e4), a Abertura da Dama (1.d4) e a Abertura Inglesa (1.c4).
 A Abertura do Peão do Rei é amplamente utilizada, levando a jogos abertos onde ambos os jogadores buscam o controle do centro cedo, com respostas comuns como o Ruy López, o Italiano e o Scotch.
 Já a Abertura da Dama é conhecida por sua flexibilidade, com o Gambito da Dama (1.d4 d5 2.c4) sendo um dos mais clássicos e respeitados.`)
        } else if (moduloIntermediarioId === 2) {
            console.log(`O meio-jogo no xadrez é a fase intermediária que ocorre após a abertura e antes do final, sendo frequentemente considerada a mais crucial e complexa, onde muitos jogos são decididos.
 Ele começa quando as peças estão desenvolvidas e os reis protegidos, geralmente após o roque, embora não haja um momento exato definido para essa transição.
 O objetivo principal é entrar no final do jogo em uma posição vitoriosa, aproveitando táticas e estratégias para ganhar vantagem em material, espaço, desenvolvimento ou iniciativa.`)
        } else if (moduloIntermediarioId === 3) {
            console.log(`Os finais no xadrez têm características que os distinguem das outras etapas de uma partida. Também por isso exigem treinamentos específicos para serem conduzidos corretamente. Ainda assim, não é raro que enxadristas priorizem os estudos de aberturas e meio-jogo, deixando os finais em segundo plano.
A falta de habilidade no final pode fazer com que vitórias praticamente certas se transformem em empates frustrantes, ou até mesmo derrotas inesperadas. Além disso, é preciso saber empatar os finais teóricos quando estivermos em desvantagem.
O final de reis e peões é um exemplo de final e deve ser o primeiro a ser estudado nos seus treinamentos. Sua teoria é importante para todos os outros tipos de finais e além disso você irá melhorar seu cálculo, já que os finais de rei e peões são “matemáticos” e precisam ser calculados até o final.`)
        } else if (moduloIntermediarioId === 4) {
            console.log(`O planejamento das partidas de xadrez geralmente é dividido em três fases distintas: a abertura, o meio-jogo e o final.
 A abertura, que normalmente compreende os vinte e cinco primeiros lances, é a fase em que os jogadores desenvolvem suas peças e definem o início dos combates.
 Durante esta fase, é comum o uso de aberturas clássicas, como o Ruy-Lopez, o Sistema London ou o Gambito da Rainha, que oferecem estratégias bem estabelecidas para começar bem.
 O meio-jogo é a fase de maior desenvolvimento das peças, onde as táticas e estratégias se intensificam.
 Já o final é caracterizado pela redução do número de peças no tabuleiro, com os reis assumindo um papel mais ativo.`)
        } else {
            console.log("Módulo inválido para o nível Intermediário.")
        }
        confirmacao = prompt(`Você gostaria de aprender outro módulo? (S/N)`).toUpperCase()
    } while (confirmacao === "S")
     break
    
    case 3:
        do {
            console.log("--- Módulos de Avançado ---")
            let listaAvancado = ""
            for (let i = 0; i < avancado.length; i++) {
                listaAvancado += `${avancado[i].id} - ${avancado[i].nome}\n`
            }
            let moduloAvancadoId = parseInt(prompt(`Agora escolha qual módulo você quer aprender:
${listaAvancado}`))
            
            if(moduloAvancadoId === 1) {
                console.log(`Controle do centro: Uma peça no centro é mais poderosa do que uma na borda. Desenvolver peças para controlar o centro é fundamental, mesmo que isso signifique sacrificar um peão no início (como no Gambito do Rei).
Ataques à defesa do rei:

Ataque de raio-x: Ataque uma peça para ganhar a peça que está atrás dela.
Ataque duplo (garfo): Ataque duas peças ao mesmo tempo, forçando o oponente a perder uma delas.
Ataque descoberto: Mova uma peça para revelar um ataque de outra peça que estava atrás dela.
Xeques duplos: Um lance de xeque que, ao mesmo tempo, expõe uma ameaça contra outra peça.

Peças penduradas e desprotegidas: Identifique e explore peças desprotegidas ou "penduradas", que podem ser atacadas sem sofrer muitas consequências para o oponente.`)
            } else if (moduloAvancadoId === 2) {
                console.log(`Mude sua mentalidade: Encare as derrotas não como um fracasso, mas como uma oportunidade para aprender e se refinar.
Pratique a autoanálise: Tente identificar os pensamentos e padrões de comportamento que levam a erros, em vez de apenas focar no lance.
Desenvolva resiliência: Trabalhe na sua força mental para se recuperar de derrotas e continuar jogando.
Gerencie suas emoções: Use técnicas de relaxamento e respiração para manter a calma sob pressão.
Concentre-se na partida: Use exercícios específicos para melhorar seu foco e atenção plena durante o jogo.
Registre suas experiências: Mantenha um diário para anotar o que você sentiu (ansiedade, raiva, etc.) durante e após as partidas.
Faça pausas: Evite jogar várias partidas sem descanso, pois o esgotamento mental pode levar a erros. `)
            } else if (moduloAvancadoId === 3) {
                console.log(`Identifique os momentos-chave: Encontre lances que parecem decisivos, lances que foram ignorados e lances que você considera erros.
Pergunte-se sobre as capturas: Anote todas as capturas possíveis. Para cada captura, pergunte-se: "O que acontece em seguida?".
Planeje seus próximos lances: Tente planejar 4-5 jogadas à frente, imaginando os planos do oponente e como você pode responder ou atacá-los.
Avalie a posição: Tente atribuir uma avaliação básica (melhor para Brancas, igual, melhor para Pretas) para a posição após cada variação.
Justifique seus lances: Se você violou um princípio do xadrez (como "não mover uma peça duas vezes"), tente justificar por que fez a jogada. Se não conseguir, provavelmente foi um erro. `)
            } else if (moduloAvancadoId === 4) {
                console.log(`Domínio dos fundamentos: Todo GM começa com a base: controle do centro, desenvolvimento rápido das peças e segurança do rei.
Treinamento consistente: Habilidades são construídas com horas diárias de estudo, resolução de táticas e jogos.
Estudo de aberturas: GMs precisam conhecer profundamente as variantes e os planos estratégicos por trás das aberturas.
Análise de partidas: Estudar partidas de outros GMs é fundamental para entender suas decisões e estratégias.
Aprimoramento do meio-jogo e finais: A tática e a estratégia no meio-jogo são cruciais, mas os finais são frequentemente decisivos.
Prática em torneios: Competição regular contra jogadores de alto nível é necessária para obter as normas e o rating necessários.
Mentoria: Trabalhar com um treinador experiente pode acelerar o progresso ao identificar fraquezas e guiar o aprendizado. `)
            } else {
                console.log("Módulo inválido para o nível Avançado.")
            }
            confirmacao = prompt(`Você gostaria de aprender outro módulo? (S/N)`).toUpperCase()
        } while (confirmacao === "S")
        break

    default:
        console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.")
        break
}
    confirmacao2 = prompt(`Se você ja aprendeu tudo deste módulo, gostaria de escolher outro? (S/N)`).toUpperCase()
} while (confirmacao2 === "S")
console.log("Encerrando programa. Bom estudo!")
