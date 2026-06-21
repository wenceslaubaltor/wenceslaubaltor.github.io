// ---------- Contador automático de projetos ----------
// Pega todos os cards de projeto que existem no HTML.
const cards = document.querySelectorAll('.projeto-card');

// Pega o título da seção de projetos.
const tituloProjetos = document.querySelector('.projetos h2');

// Atualiza o texto do título incluindo a quantidade de cards.
tituloProjetos.textContent = `Meus projetos (${cards.length})`;

// ---------- Botão "Mandar um oi" ----------
const botaoOi = document.querySelector('#botao-oi');
const mensagemOi = document.querySelector('#mensagem-oi');

// Variável que sobrevive entre cliques. let, porque vai mudar.
let contagemOis = 0;

// A "receita": o que fazer quando o botão é clicado.
const aoClicarOi = () => {
    contagemOis = contagemOis + 1;
    mensagemOi.textContent = `Oi recebido! Você já mandou ${contagemOis}.`;
};

// Liga o evento de clique do botão à função.
botaoOi.addEventListener('click', aoClicarOi);

// ---------- Botão de tema (claro/escuro) ----------
const botaoTema = document.querySelector('#botao-tema');

// 1) Ao carregar: lê o tema salvo do localStorage e aplica.
//    getItem retorna null se nada foi salvo antes (primeira visita).
const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'escuro') {
    document.body.classList.add('tema-escuro');
    botaoTema.textContent = 'Modo claro';
}

// 2) Ao clicar: alterna o tema e salva a escolha.
const aoClicarTema = () => {
    document.body.classList.toggle('tema-escuro');

    if (document.body.classList.contains('tema-escuro')) {
        botaoTema.textContent = 'Modo claro';
        localStorage.setItem('tema', 'escuro');
    } else {
        botaoTema.textContent = 'Modo escuro';
        localStorage.setItem('tema', 'claro');
    }
};

botaoTema.addEventListener('click', aoClicarTema);

// ---------- Busca de projetos em tempo real ----------
const inputBusca = document.querySelector('#busca-projetos');
const semResultados = document.querySelector('#sem-resultados');

const aoDigitar = () => {
    // Normaliza o termo: minúsculas e sem espaços nas pontas.
    const termo = inputBusca.value.toLowerCase().trim();

    // Para cada card, decide se combina e mostra ou esconde.
    cards.forEach(card => {
        const titulo = card.querySelector('h3').textContent.toLowerCase();
        const descricao = card.querySelector('p').textContent.toLowerCase();
        const combina = titulo.includes(termo) || descricao.includes(termo);

        // toggle com 2º argumento: força o estado (true = põe, false = tira).
        card.classList.toggle('escondido', !combina);
    });

    // Conta quantos cards continuam visíveis e atualiza o título.
    const visiveis = Array.from(cards).filter(card => {
        return !card.classList.contains('escondido');
    });
    tituloProjetos.textContent = `Meus projetos (${visiveis.length})`;

    // Mostra "Nenhum projeto encontrado." só se não sobrar nenhum visível.
    semResultados.classList.toggle('escondido', visiveis.length > 0);
};

inputBusca.addEventListener('input', aoDigitar);
