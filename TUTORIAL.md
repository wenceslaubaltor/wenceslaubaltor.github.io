# Tutorial: Página de Perfil Responsiva com HTML + CSS

Documento de referência do tutorial completo, desde a estrutura HTML até o deploy no GitHub Pages.

- **Site no ar:** https://wenceslaubaltor.github.io/
- **Repositório:** https://github.com/wenceslaubaltor/wenceslaubaltor.github.io
- **Pasta local:** `~/projetos/perfil-web/`
- **Stack:** HTML5 + CSS3 puros (sem frameworks, sem JavaScript)

---

## Índice

- [Parte 1 — Construção da página (HTML + CSS)](#parte-1--construção-da-página-html--css)
  - [Etapa 1: Estrutura HTML semântica](#etapa-1--estrutura-html-semântica)
  - [Etapa 2: CSS básico (reset, variáveis, tipografia)](#etapa-2--css-básico-reset-variáveis-tipografia)
  - [Etapa 3: Flexbox e layout centralizado](#etapa-3--flexbox-e-layout-centralizado)
  - [Etapa 4: Lista de links como botões](#etapa-4--lista-de-links-como-botões)
  - [Etapa 5: Foto responsiva e circular](#etapa-5--foto-responsiva-e-circular)
  - [Etapa 6: Media queries (mobile-first)](#etapa-6--media-queries-mobile-first)
  - [Etapa 7: Hover, transições e dark mode](#etapa-7--hover-transições-e-dark-mode)
- [Parte 2 — Deploy no GitHub Pages](#parte-2--deploy-no-github-pages)
  - [Deploy 1: Pré-requisitos](#deploy-1--pré-requisitos)
  - [Deploy 2: GitHub CLI](#deploy-2--github-cli)
  - [Deploy 3: Git local e primeiro commit](#deploy-3--git-local-e-primeiro-commit)
  - [Deploy 4: Criar repo no GitHub e push](#deploy-4--criar-repo-no-github-e-push)
  - [Deploy 5: GitHub Pages no ar](#deploy-5--github-pages-no-ar)
- [Anexo A — Código final](#anexo-a--código-final)
- [Anexo B — Glossário de conceitos](#anexo-b--glossário-de-conceitos)
- [Anexo C — Comandos úteis](#anexo-c--comandos-úteis)
- [Próximos passos](#próximos-passos)

---

# Parte 1 — Construção da página (HTML + CSS)

## Etapa 1 — Estrutura HTML semântica

HTML semântico significa usar tags que **descrevem o significado** do conteúdo, não só sua aparência. Em vez de `<div>` para tudo, usamos `<header>`, `<main>`, `<section>` etc.

### Por que importa
- **Acessibilidade:** leitores de tela entendem a estrutura
- **SEO:** o Google entende o que é título, conteúdo principal, navegação
- **Manutenção:** o nome da tag já documenta a função

### Tags principais

| Tag | Significado |
|------|--------------|
| `<!DOCTYPE html>` | Diz ao navegador "isto é HTML5" |
| `<html lang="pt-BR">` | Raiz do documento, com idioma declarado |
| `<head>` | Metadados invisíveis |
| `<meta charset="UTF-8">` | Permite acentos e caracteres especiais |
| `<meta name="viewport"...>` | **Essencial para responsividade** — impede o celular de "encolher" a página |
| `<main>` | Conteúdo principal (uma vez por página) |
| `<section>` | Agrupa conteúdo relacionado |
| `<img>` com `alt` | Imagem, com texto alternativo obrigatório |
| `<h1>` único | Título mais importante (1 por página) |
| `<ul>`, `<li>`, `<a>` | Lista, item, link |

### Recap

| Conceito | Onde aparece |
|----------|--------------|
| HTML semântico | `<main>`, `<section>` em vez de `<div>` |
| Meta viewport (responsividade) | `<meta name="viewport"...>` no `<head>` |
| Acessibilidade | atributo `alt` na `<img>`, `lang="pt-BR"` no `<html>` |
| Hierarquia de títulos | `<h1>` único + `<h2>` para subseções |
| `mailto:` | Prefixo de link que abre cliente de e-mail |

---

## Etapa 2 — CSS básico (reset, variáveis, tipografia)

Três alicerces antes de qualquer layout:

1. **Reset** — zera os defaults inconsistentes entre navegadores
2. **Variáveis CSS (custom properties)** — define cores, espaçamentos e fontes uma vez só
3. **Tipografia** — define a "vibe" visual do site

### Conceitos

| Sintaxe | O que faz |
|---------|-----------|
| `<link rel="stylesheet" href="style.css">` | Liga o CSS ao HTML |
| `* { ... }` | Seletor universal (aplica a todos os elementos) |
| `:root { --nome: valor }` | Declara variável no elemento raiz |
| `var(--nome)` | Lê o valor da variável |
| `rem` | Unidade relativa à fonte do `<html>` (padrão 16px) |
| `@import url(...)` | Importa fonte do Google Fonts |
| `box-sizing: border-box` | `width` passa a incluir padding/borda |

### Por que `rem` em vez de `px`
Se o usuário aumenta a fonte do navegador para acessibilidade, tudo escala junto. Em `px`, nada se ajusta.

### Por que variáveis com nomes semânticos
`--cor-destaque` em vez de `--azul`. Se um dia trocar a cor para roxo, o nome continua fazendo sentido.

### Recap

| Conceito | Onde aparece |
|----------|--------------|
| Linkar CSS ao HTML | `<link rel="stylesheet">` no `<head>` |
| Reset universal | `*, *::before, *::after { ... }` |
| `box-sizing: border-box` | Dentro do reset |
| Variáveis CSS | `:root { --cor-fundo: ... }` |
| Usar variável | `var(--cor-fundo)` |
| Tipografia escalável | `rem` em vez de `px` |
| Hierarquia visual | Tamanhos e pesos diferentes em `h1` e `h2` |

---

## Etapa 3 — Flexbox e layout centralizado

**Flexbox** é o sistema do CSS para distribuir elementos em **uma direção** (linha ou coluna).

### Propriedades-chave

| Propriedade | Onde se aplica | Função |
|-------------|----------------|--------|
| `display: flex` | No container | Ativa o Flexbox |
| `flex-direction` | No container | `row` (padrão) ou `column` |
| `justify-content` | No container | Eixo **principal** |
| `align-items` | No container | Eixo **cruzado** |
| `gap` | No container | Espaço entre filhos |
| `min-height: 100vh` | No `body` | Mínimo da altura da viewport |

### Pegadinha importante
`justify-content` e `align-items` **trocam de eixo** dependendo do `flex-direction`:
- `row` → `justify-content` é horizontal, `align-items` é vertical
- `column` → `justify-content` é vertical, `align-items` é horizontal

### Padrão de container responsivo
`width: 100% + max-width: 420px` — em telas pequenas ocupa tudo, em telas grandes não fica gigante.

### Recap

| Conceito | Onde aparece |
|----------|--------------|
| Ativar Flexbox | `display: flex` |
| Direção da linha vs coluna | `flex-direction: column` no `.perfil` |
| Alinhamento eixo principal | `justify-content: center` no `body` |
| Alinhamento eixo cruzado | `align-items: center` no `.perfil` |
| Espaço entre filhos | `gap: var(--espaco-medio)` |
| Container responsivo | `width: 100% + max-width: 420px` |
| Altura da viewport | `min-height: 100vh` |
| Card visual | `padding + border-radius + box-shadow` |

---

## Etapa 4 — Lista de links como botões

HTML não tem tag `<button-link>`. O padrão é estilizar `<a>` para parecer um botão.

### Defaults a combater

| Default | Solução |
|---------|---------|
| `<ul>` vem com bolinhas | `list-style: none` |
| `<a>` vem sublinhado | `text-decoration: none` |
| `<a>` é `inline` | `display: block` (vira "blocão" clicável) |

### Regra de ouro de UX
Área clicável de botão no celular: **mínimo 44×44px** (recomendação Apple). Padding generoso resolve.

### Por que `display: block` no link
- **Inline:** ocupa só o espaço do texto. Padding vertical ignorado.
- **Block:** ocupa a largura inteira do pai, padding por todos os lados, clica em qualquer parte do retângulo.

### Sintaxe de padding

| Valores | Significado |
|---------|-------------|
| 1 valor | Todos os lados |
| 2 valores | Vertical / horizontal |
| 4 valores | Top / right / bottom / left (sentido horário) |

### Recap

| Conceito | Onde aparece |
|----------|--------------|
| Remover bullets | `list-style: none` |
| Tirar sublinhado | `text-decoration: none` |
| Link como área clicável | `display: block` |
| Padding 2-valores | `padding: 0.75rem var(--espaco-medio)` |
| Sintaxe curta de borda | `border: 1px solid #e5e7eb` |
| Seletor descendente | `.links a` (só dentro de `.links`) |

---

## Etapa 5 — Foto responsiva e circular

Duas coisas: tirar o `style=` inline do HTML e tornar imagens "à prova de bala".

### Por que evitar `style=` inline
- **Mistura responsabilidades:** HTML deveria descrever estrutura, CSS deveria descrever aparência
- **Especificidade altíssima:** estilos inline ganham de quase qualquer regra externa

### Regra global de proteção
```css
img {
    max-width: 100%;
    height: auto;
    display: block;
}
```
Essa é uma das regras mais valiosas de CSS — vale colocar em **todo** projeto novo.

### Foto circular: combo essencial
- `width: 140px` + `aspect-ratio: 1 / 1` → caixa quadrada de tamanho fixo
- `object-fit: cover` → recorta a imagem para preencher sem distorcer
- `border-radius: 50%` → vira círculo (só funciona em caixa quadrada!)

**Atenção:** `border-radius: 50%` em caixa retangular vira **elipse**, não círculo.

### Recap

| Conceito | Onde aparece |
|----------|--------------|
| HTML limpo (sem inline) | Removemos do `<img>` |
| Imagem nunca estoura o pai | `img { max-width: 100% }` global |
| Manter proporção | `height: auto` |
| Caixa quadrada forçada | `aspect-ratio: 1 / 1` |
| Círculo perfeito | `border-radius: 50%` em caixa quadrada |
| Recorte sem distorção | `object-fit: cover` |
| Profundidade visual | borda + `box-shadow` |

---

## Etapa 6 — Media queries (mobile-first)

Media queries = blocos de CSS que só se aplicam quando uma condição da tela é verdadeira.

### Mobile-first vs desktop-first

| Abordagem | Como funciona | Quando usar |
|-----------|---------------|-------------|
| Desktop-first (antigo) | Base = desktop. `@media (max-width)` remove para mobile | Sites legados |
| **Mobile-first** (moderno) | Base = mobile. `@media (min-width)` adiciona para desktop | **Padrão atual** |

### Por que mobile-first ganhou
- Maioria do tráfego é mobile
- Layouts mobile são mais simples (uma coluna) → base mais limpa
- Você **adiciona** complexidade em vez de tentar **desfazer**

### Sintaxe
```css
@media (min-width: 768px) {
    /* só vale se a tela tiver ≥ 768px */
}
```

### Breakpoints comuns

| Largura | Representa |
|---------|------------|
| 480px | Smartphones grandes em paisagem |
| 768px | Tablets |
| 1024px | Laptops |
| 1280px | Desktops |

**Regra de ouro:** escolha o breakpoint pelo conteúdo, não pelo dispositivo. Onde seu layout começa a parecer feio = breakpoint.

### `flex: 1`
Atalho para `flex-grow: 1; flex-shrink: 1; flex-basis: 0`. Tradução: "estica para ocupar espaço, encolhe se necessário, base zero". Faz cards dividirem espaço igualmente.

### Recap

| Conceito | Onde aparece |
|----------|--------------|
| Filosofia mobile-first | CSS base = mobile, `@media (min-width)` adiciona desktop |
| Sintaxe de media query | `@media (min-width: 768px) { ... }` |
| Sobrescrita condicional | Mudar `flex-direction` no desktop |
| Dividir espaço entre flex items | `flex: 1` em ambos os cards |
| Esticar cards à mesma altura | `align-items: stretch` |
| Ajustar tipografia por viewport | `h1 { font-size: 2rem }` dentro do @media |

---

## Etapa 7 — Hover, transições e dark mode

Quatro acabamentos transformam página estática em página viva:

1. **`:hover`** — Pseudo-classe acionada quando o cursor está em cima
2. **`transition`** — Anima a mudança entre dois estados de forma suave
3. **`:focus-visible`** — Mostra contorno quando o usuário navega por teclado (acessibilidade)
4. **`@media (prefers-color-scheme: dark)`** — Detecta modo escuro do SO

### Anatomia da `transition`

```css
transition: <propriedade> <duração> <curva>;
```

- **Duração:** `0.15s` é o sweet spot para UI (rápido mas não brusco)
- **Múltiplas propriedades:** separa por vírgula
- **Curva:** `ease`, `ease-out`, `linear`...

### Erro comum
Colocar `transition` dentro de `:hover`. Resultado: anima a "entrada" mas não a "saída". **Sempre coloque `transition` na regra base.**

### Propriedades performáticas
**Anime sem medo:** `transform`, `opacity`.
**Evite animar:** `width`, `top`, `left` — forçam o navegador a recalcular layout.

### Acessibilidade: `:focus-visible` em vez de `:focus`
- `:focus` dispara em clique de mouse (visualmente poluído)
- `:focus-visible` só dispara em navegação por teclado (Tab)

**Nunca use `outline: none` sem alternativa.** Quebra navegação por teclado.

### Dark mode em 8 linhas
Por usar variáveis em todo lugar, **basta sobrescrever as variáveis** dentro do `@media (prefers-color-scheme: dark)` e a página inteira muda. Esse é o pagamento do investimento da Etapa 2.

### Testar dark mode no DevTools
F12 → Ctrl+Shift+P → "Rendering" → "Emulate CSS media feature prefers-color-scheme" → dark

### Recap

| Conceito | Onde aparece |
|----------|--------------|
| Estado de hover | `.links a:hover { ... }` |
| Animação suave | `transition` na **base**, não no `:hover` |
| Movimento performático | `transform: translateY(-2px)` |
| Acessibilidade do teclado | `:focus-visible` com `outline` |
| Detectar preferência do SO | `@media (prefers-color-scheme: dark)` |
| Tema via variáveis | Sobrescrever `--cor-...` em `:root` |

---

# Parte 2 — Deploy no GitHub Pages

## Deploy 1 — Pré-requisitos

Necessários:
- Conta no GitHub (login real: `wenceslaubaltor`)
- `git` instalado (já tinha — v2.51.2)
- `git config --global user.name` e `user.email` configurados (já estavam)

---

## Deploy 2 — GitHub CLI

### Instalação no NixOS (3 opções)

| Modo | Comando | Persistência |
|------|---------|--------------|
| Permanente no sistema | Editar `configuration.nix` | Reboot resiliente |
| Permanente no usuário | `nix profile install nixpkgs#gh` | Por usuário |
| **Temporário** | `nix-shell -p gh` | Só na sessão |

### Fluxo do `gh auth login`
1. GitHub.com (não Enterprise)
2. HTTPS
3. Autenticar git operations: **Yes**
4. **Login with a web browser**
5. Cola o código no navegador, autoriza

### Truque: comandos interativos no Claude Code
Prefixar com `!` no prompt roda na sessão do usuário:
```
! nix-shell -p gh --run "gh auth login"
```

---

## Deploy 3 — Git local e primeiro commit

### Fluxo básico do git

```
arquivo modificado  →  git add  →  staging  →  git commit  →  histórico
```

A **staging area** permite escolher quais mudanças entram no próximo commit.

### Comandos essenciais

| Comando | Função |
|---------|--------|
| `git init -b main` | Cria repo com branch principal `main` |
| `git status` | Mostra estado dos arquivos |
| `git add .` | Move tudo para staging |
| `git commit -m "msg"` | Cria snapshot |
| `git log --oneline` | Histórico resumido |

### `main` vs `master`
Padrão antigo era `master`. Em 2020 a comunidade migrou para `main`. Sempre force com `-b main` em repos novos.

### Convenção de mensagem de commit
- Linha 1 com ≤72 caracteres
- Modo imperativo: "Adicionar X", não "Adicionado X"
- Pense: "Esse commit vai _____"

### Hash do commit
Identificador único (SHA-1 abreviado, ex: `be50475`). Permite referenciar qualquer commit no histórico.

---

## Deploy 4 — Criar repo no GitHub e push

### Conceito: `remote`
Um "apelido" para a URL de um repo remoto. Por convenção o principal se chama `origin`.

### Atalho do `gh` CLI
```bash
gh repo create wenceslaubaltor.github.io \
    --public \
    --source=. \
    --remote=origin \
    --push
```

| Flag | Função |
|------|--------|
| `--public` | Repo público (**obrigatório para GitHub Pages grátis**) |
| `--source=.` | Usa o repo git da pasta atual |
| `--remote=origin` | Adiciona como remote `origin` |
| `--push` | Faz `git push -u origin main` |

### Lição aprendida nesta etapa
**O nome do repo importa.** Para virar site de usuário automático, deve ser **exatamente** `<seuuser>.github.io`. Eu inicialmente criei com `baltorw.github.io` (confundindo username com prefixo de e-mail) e tive que renomear para `wenceslaubaltor.github.io` com:

```bash
gh repo rename wenceslaubaltor.github.io --yes
```

O `gh repo rename` atualiza tanto o GitHub quanto o URL do remote local automaticamente.

---

## Deploy 5 — GitHub Pages no ar

### Comportamento de site de usuário
Para repos no padrão `<usuario>.github.io`:
- GitHub Pages **ativa sozinho**
- Não precisa mexer em configurações
- Primeira build leva ~30-60 segundos
- Cada `push` na `main` dispara rebuild automático

### Verificar status
```bash
gh api repos/<user>/<repo>/pages --jq '.status'
# "building" → "built"
```

### Verificar HTTP
```bash
curl -sI https://wenceslaubaltor.github.io/ | head -5
# HTTP/2 200 = no ar
```

### Características do plano grátis
- HTTPS automático com certificado válido
- CDN global (Fastly)
- 1 GB de banda/mês
- 10 builds/hora
- Para perfil pessoal: infinito na prática

---

# Anexo A — Código final

## `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Perfil</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <section class="perfil">
            <img src="imagem.jpeg" alt="Foto de perfil de Wenceslau">
            <h1>Wenceslau</h1>
            <p class="bio">
                Desenvolvedor curioso, aprendendo HTML e CSS para construir
                minha presença na web.
            </p>
        </section>

        <section class="links">
            <h2>Meus links</h2>
            <ul>
                <li><a href="https://github.com/">GitHub</a></li>
                <li><a href="https://linkedin.com/">LinkedIn</a></li>
                <li><a href="mailto:baltorw@gmail.com">E-mail</a></li>
            </ul>
        </section>
    </main>
</body>
</html>
```

## `style.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

/* ---------- Reset ---------- */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ---------- Variáveis (paleta e tipografia) ---------- */
:root {
    --cor-fundo: #f4f4f5;
    --cor-texto: #1f2937;
    --cor-texto-suave: #6b7280;
    --cor-destaque: #2563eb;
    --cor-card: #ffffff;

    --fonte-principal: 'Inter', system-ui, sans-serif;

    --espaco-pequeno: 0.5rem;
    --espaco-medio: 1rem;
    --espaco-grande: 2rem;
}

/* ---------- Tipografia base ---------- */
body {
    font-family: var(--fonte-principal);
    font-size: 1rem;
    line-height: 1.6;
    color: var(--cor-texto);
    background-color: var(--cor-fundo);
}

h1 {
    font-size: 1.75rem;
    font-weight: 700;
}

h2 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--cor-texto-suave);
}

.bio {
    color: var(--cor-texto-suave);
}

/* ---------- Imagens responsivas (regra geral) ---------- */
img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* ---------- Layout: centralizar tudo na tela ---------- */
body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: var(--espaco-grande);
}

main {
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    gap: var(--espaco-grande);
}

/* ---------- Card de perfil ---------- */
.perfil {
    background-color: var(--cor-card);
    padding: var(--espaco-grande);
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--espaco-medio);
    text-align: center;
}

/* ---------- Card da lista de links ---------- */
.links {
    background-color: var(--cor-card);
    padding: var(--espaco-grande);
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: column;
    gap: var(--espaco-medio);
}

/* ---------- Links como botões ---------- */
.links ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--espaco-pequeno);
}

.links a {
    display: block;
    padding: 0.75rem var(--espaco-medio);
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    text-decoration: none;
    text-align: center;
    font-weight: 600;

    transition: background-color 0.15s ease,
                border-color 0.15s ease,
                color 0.15s ease,
                transform 0.15s ease,
                box-shadow 0.15s ease;
}

.links a:hover {
    background-color: var(--cor-card);
    border-color: var(--cor-destaque);
    color: var(--cor-destaque);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
}

.links a:focus-visible {
    outline: 2px solid var(--cor-destaque);
    outline-offset: 2px;
}

/* ---------- Foto de perfil circular ---------- */
.perfil img {
    width: 140px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid var(--cor-card);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* ---------- DESKTOP (≥ 768px): duas colunas ---------- */
@media (min-width: 768px) {
    main {
        max-width: 760px;
        flex-direction: row;
        align-items: stretch;
    }

    .perfil,
    .links {
        flex: 1;
    }

    .perfil {
        justify-content: center;
    }

    .perfil img {
        width: 160px;
    }

    h1 {
        font-size: 2rem;
    }
}

/* ---------- DARK MODE ---------- */
@media (prefers-color-scheme: dark) {
    :root {
        --cor-fundo: #0f172a;
        --cor-texto: #f1f5f9;
        --cor-texto-suave: #94a3b8;
        --cor-card: #1e293b;
    }

    .links a {
        border-color: #334155;
    }
}
```

---

# Anexo B — Glossário de conceitos

## HTML

| Termo | Definição |
|-------|-----------|
| HTML semântico | Tags que descrevem significado (`<main>`, `<section>`), não aparência |
| Meta viewport | Tag que controla como o celular renderiza a largura |
| `alt` | Texto alternativo de imagem, essencial para acessibilidade |
| Hierarquia de títulos | `<h1>` único → `<h2>` → `<h3>`... |
| `mailto:` | Prefixo de link que abre cliente de e-mail |

## CSS — fundamentos

| Termo | Definição |
|-------|-----------|
| Reset | Zerar defaults inconsistentes entre navegadores |
| `:root` | Pseudo-classe que casa com `<html>`, usada para variáveis |
| Custom property (variável CSS) | `--nome: valor` em `:root`, lida com `var(--nome)` |
| `rem` | Unidade relativa à fonte do `<html>` (padrão 1rem = 16px) |
| `box-sizing: border-box` | `width` passa a incluir padding e borda |
| Especificidade | Regras de prioridade entre seletores CSS conflitantes |
| Seletor descendente | `.parent .child` aplica só dentro do parent |

## CSS — layout

| Termo | Definição |
|-------|-----------|
| Flexbox | Sistema 1D para distribuir elementos em linha ou coluna |
| Container flex | Elemento com `display: flex` |
| Eixo principal vs cruzado | Depende de `flex-direction` |
| `gap` | Espaçamento entre filhos de um flex container |
| Fluid design | `width: 100%` combinado com `max-width` |
| `vh` | Unidade = % da altura da viewport |
| `flex: 1` | Atalho para `flex-grow: 1; flex-shrink: 1; flex-basis: 0` |

## CSS — imagens

| Termo | Definição |
|-------|-----------|
| `aspect-ratio` | Força proporção da caixa (`1 / 1` = quadrado) |
| `object-fit: cover` | Recorta imagem para preencher caixa sem distorcer |
| `border-radius: 50%` | Vira círculo (só se caixa for quadrada) |

## CSS — responsividade

| Termo | Definição |
|-------|-----------|
| Media query | `@media (condição) { regras }` |
| Mobile-first | Base = mobile, `@media (min-width)` adiciona desktop |
| Breakpoint | Largura onde o layout muda |
| `prefers-color-scheme` | Media query que detecta modo escuro do SO |

## CSS — interatividade

| Termo | Definição |
|-------|-----------|
| `:hover` | Pseudo-classe ativa quando o cursor está em cima |
| `:focus-visible` | Foco visível em navegação por teclado |
| `transition` | Anima a mudança entre estados |
| `transform` | Propriedade performática (GPU) para mover/escalar |

## Git

| Termo | Definição |
|-------|-----------|
| Repositório | Pasta com `.git/` rastreando histórico |
| Staging area | Área intermediária entre arquivo modificado e commit |
| Commit | Snapshot do estado do código em um momento |
| Hash | Identificador único do commit (SHA-1) |
| Branch | Linha de desenvolvimento (padrão moderno: `main`) |
| Remote | Apelido para URL de repo remoto (padrão: `origin`) |
| `push` | Enviar commits locais para o remote |

## GitHub Pages

| Termo | Definição |
|-------|-----------|
| Site de usuário | Repo `<user>.github.io` → URL `https://<user>.github.io/`, ativa sozinho |
| Site de projeto | Qualquer outro repo → URL `https://<user>.github.io/<repo>/` |
| Build status | `building` → `built` quando pronto |
| CDN | Rede de servidores que cacheia o site globalmente (Fastly) |

---

# Anexo C — Comandos úteis

## Atualizar a página (ciclo padrão)

```bash
cd ~/projetos/perfil-web
# (edita arquivos)
git status                              # ver o que mudou
git add .                               # palco
git commit -m "Atualizar bio"           # registrar
git push                                # mandar pro GitHub
```

GitHub Pages rebuilda em ~30-60s.

## Ver status do site

```bash
nix-shell -p gh --run "gh api repos/wenceslaubaltor/wenceslaubaltor.github.io/pages --jq '.status'"
```

## Testar localmente

Abrir no navegador:
```bash
xdg-open ~/projetos/perfil-web/index.html
```

## Git: comandos do dia a dia

| Comando | Função |
|---------|--------|
| `git status` | Estado dos arquivos |
| `git diff` | O que foi mudado nos arquivos modificados |
| `git diff --staged` | O que está em staging |
| `git log --oneline` | Histórico resumido |
| `git log --oneline -n 5` | Últimos 5 commits |
| `git checkout -- arquivo` | Desfaz mudanças não-staged |
| `git reset HEAD arquivo` | Tira arquivo do staging |

## GitHub CLI: comandos úteis

| Comando | Função |
|---------|--------|
| `gh repo view --web` | Abre o repo no navegador |
| `gh repo create <nome> --public` | Cria repo |
| `gh repo rename <novo-nome>` | Renomeia repo (atualiza remote local) |
| `gh auth status` | Confirma quem está logado |

## Testar dark mode no Chrome DevTools

1. F12
2. Ctrl+Shift+P
3. Digite "Rendering" → "Show Rendering"
4. Em "Emulate CSS media feature prefers-color-scheme" → escolha **dark**

## Testar responsividade

1. F12
2. Ctrl+Shift+M (toggle device toolbar)
3. Escolha um perfil (iPhone SE, iPad, etc.) ou puxe as bordas

---

# Próximos passos

## Refinamentos no projeto atual

- Substituir cores hardcoded restantes (`#e5e7eb`, `#334155`) por variáveis `--cor-borda`
- Extrair estilo de card duplicado em `.perfil` e `.links` para uma classe `.card`
- Adicionar `<meta name="description">` para SEO
- Adicionar uma seção "Sobre" mais longa abaixo dos links

## Tópicos para estudar

| Tópico | O que ganha |
|--------|-------------|
| **CSS Grid** | Layouts em 2D (linhas + colunas simultâneas). Próximo passo natural depois do Flexbox |
| **CSS clamp(), min(), max()** | Tipografia fluida sem precisar de tantas media queries |
| **Container queries** | Adapta layout pelo tamanho do container, não da viewport |
| **CSS animations (`@keyframes`)** | Animações elaboradas além de `transition` |
| **Acessibilidade ARIA** | Atributos extras para leitores de tela em UI complexa |
| **JavaScript** | Interatividade (forms, scroll animations, fetch de API) |

## Recursos recomendados

- **MDN Web Docs** (https://developer.mozilla.org/) — referência canônica de HTML/CSS
- **Flexbox Froggy** (https://flexboxfroggy.com/) — jogo para fixar Flexbox
- **Grid Garden** (https://cssgridgarden.com/) — mesmo conceito para CSS Grid
- **Can I Use** (https://caniuse.com/) — checa compatibilidade de features CSS

## Possíveis evoluções da página

- **Domínio próprio:** R$ 40/ano em registro.br por `.com.br`, aponta para GitHub Pages
- **Adicionar projetos:** seção de cards listando seus repos do GitHub
- **Botão de tema:** toggle manual de light/dark (precisa JavaScript + localStorage)
- **Formulário de contato:** com serviços como Formspree (sem backend)
- **Análise:** GoatCounter ou Plausible (privacy-friendly, sem cookies)
