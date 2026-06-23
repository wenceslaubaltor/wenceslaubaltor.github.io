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

// ---------- URLs da GitHub API ----------
// Centralizamos as URLs no topo para facilitar mudança e revisão.
const USUARIO = 'wenceslaubaltor';
const URL_PERFIL = `https://api.github.com/users/${USUARIO}`;
const URL_REPOS  = `https://api.github.com/users/${USUARIO}/repos`;
const LIMITE_REPOS = 6;

const listaRepos = document.querySelector('#lista-repos');

// Formatador de datas relativas em pt-BR ("há 3 dias", "há 2 meses"…).
// Criado uma vez só (fora da função) por performance — instanciar é caro.
const formatadorRelativo = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' });

// Recebe uma data ISO ("2026-06-19T14:23:00Z") e devolve "há 3 dias", etc.
const formatarDataRelativa = (dataISO) => {
    const diffMs = new Date(dataISO) - new Date();
    const diffDias = Math.round(diffMs / (1000 * 60 * 60 * 24));

    if (Math.abs(diffDias) < 30) {
        return formatadorRelativo.format(diffDias, 'day');
    }
    if (Math.abs(diffDias) < 365) {
        return formatadorRelativo.format(Math.round(diffDias / 30), 'month');
    }
    return formatadorRelativo.format(Math.round(diffDias / 365), 'year');
};

// Transforma um objeto de repo (da API) em string de HTML de um card.
const repoParaCard = (repo) => {
    const descricao = repo.description || 'Sem descrição.';
    const linguagem = repo.language || '—';
    const dataRelativa = formatarDataRelativa(repo.updated_at);

    // Só mostra estrelas se houver pelo menos uma — evita "★ 0" poluindo.
    const estrelas = repo.stargazers_count > 0
        ? `<span class="estrela">★ ${repo.stargazers_count}</span>`
        : '';

    return `
        <article class="projeto-card">
            <h3><a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a></h3>
            <p class="repo-desc">${descricao}</p>
            <div class="meta">
                <span>${linguagem}</span>
                ${estrelas}
                <span>Atualizado ${dataRelativa}</span>
            </div>
        </article>
    `;
};

const carregarRepos = async () => {
    try {
        const resposta = await fetch(URL_REPOS);
        if (!resposta.ok) {
            throw new Error(`HTTP ${resposta.status} ao buscar repos`);
        }
        const repos = await resposta.json();

        // Pipeline de curadoria: filtra, ordena, limita.
        const visiveis = repos
            .filter(repo => !repo.fork)
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
            .slice(0, LIMITE_REPOS);

        // Caso raro mas possível: usuário só tem forks, ou nenhum repo público.
        if (visiveis.length === 0) {
            listaRepos.innerHTML = `
                <p class="repo-vazio">Nenhum repo público para mostrar ainda.</p>
            `;
            return;
        }

        // map: cada repo vira uma string de HTML.
        // join(''): array de strings vira string única.
        listaRepos.innerHTML = visiveis.map(repoParaCard).join('');
    } catch (erro) {
        // Efeito local: substituir os skeletons pelo bloco de erro.
        listaRepos.innerHTML = `
            <div class="repo-erro">
                <strong>Não foi possível carregar os repos.</strong>
                ${erro.message}
            </div>
        `;
        // Re-lança para a orquestração também saber que esta parte falhou.
        // Sem isso, init() vê "tudo ok" enquanto a UI mostra erro — confuso.
        throw erro;
    }
};

// ---------- Buscar e renderizar dados do perfil do usuário ----------
// Princípio: progressive enhancement. O HTML estático já tem nome e bio
// hardcoded; o JS só sobrescreve se a API responder com valores reais.
// Se algum campo vier null/vazio, o conteúdo estático permanece.

const elAvatar = document.querySelector('#avatar');
const elNome   = document.querySelector('#nome');
const elBio    = document.querySelector('#bio');
const elStats  = document.querySelector('#stats');

// Formatador de números em pt-BR (separador de milhar = ponto).
const formatadorNumero = new Intl.NumberFormat('pt-BR');

// Pluralização simples: devolve singular se n === 1, senão plural.
const plural = (n, singular, pluralForma) => n === 1 ? singular : pluralForma;

const renderizarPerfil = (perfil) => {
    if (perfil.name) {
        elNome.textContent = perfil.name;
        elAvatar.alt = `Foto de perfil de ${perfil.name}`;
    }
    if (perfil.bio) elBio.textContent = perfil.bio;

    if (perfil.avatar_url) {
        // Fallback: se a imagem remota falhar, cai para a local.
        // {once:true} remove o listener após a primeira execução —
        // se o fallback também falhar, evita loop infinito de erro.
        elAvatar.addEventListener('error', () => {
            elAvatar.src = 'imagem.jpeg';
        }, { once: true });

        // ?s=300: o GitHub serve a imagem nesse tamanho (~150px @2x).
        // A URL da API já vem com ?v=4, então usamos & para concatenar.
        elAvatar.src = `${perfil.avatar_url}&s=300`;
    }

    // Stats clicáveis. Cada link abre direto na aba relevante do GitHub.
    elStats.innerHTML = `
        <a href="${perfil.html_url}?tab=repositories" target="_blank" rel="noopener">
            <strong>${formatadorNumero.format(perfil.public_repos)}</strong>
            ${plural(perfil.public_repos, 'repo', 'repos')}
        </a>
        <a href="${perfil.html_url}?tab=followers" target="_blank" rel="noopener">
            <strong>${formatadorNumero.format(perfil.followers)}</strong>
            ${plural(perfil.followers, 'seguidor', 'seguidores')}
        </a>
        <a href="${perfil.html_url}?tab=following" target="_blank" rel="noopener">
            <strong>${formatadorNumero.format(perfil.following)}</strong>
            seguindo
        </a>
    `;
};

const carregarPerfil = async () => {
    // Sem try/catch aqui: o HTML estático já é o fallback visual,
    // então o JS não tem nada a fazer no erro. Deixamos a rejeição
    // propagar para a orquestração (init) saber que falhou.
    const resposta = await fetch(URL_PERFIL);
    if (!resposta.ok) {
        throw new Error(`HTTP ${resposta.status} ao buscar perfil`);
    }
    const perfil = await resposta.json();
    renderizarPerfil(perfil);
};

// ---------- Orquestração inicial ----------
// Dispara perfil e repos em paralelo. Usamos Promise.allSettled (não all)
// porque cada parte tem seu próprio tratamento de erro: se uma cair,
// a outra deve continuar funcionando e queremos saber exatamente o que
// aconteceu com cada uma.
const init = async () => {
    const inicio = performance.now();

    const resultados = await Promise.allSettled([
        carregarPerfil(),
        carregarRepos(),
    ]);

    const duracao = Math.round(performance.now() - inicio);
    const nomes = ['perfil', 'repos'];

    resultados.forEach((r, i) => {
        if (r.status === 'fulfilled') {
            console.log(`✓ ${nomes[i]} carregado`);
        } else {
            console.warn(`✗ ${nomes[i]} falhou:`, r.reason.message);
        }
    });

    console.log(`Carregamento finalizado em ${duracao}ms.`);
};

init();
