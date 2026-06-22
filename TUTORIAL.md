# Tutorial: Página de Perfil Responsiva com HTML + CSS

Documento de referência do tutorial completo, desde a estrutura HTML até o deploy no GitHub Pages.

- **Site no ar:** https://wenceslaubaltor.github.io/
- **Repositório:** https://github.com/wenceslaubaltor/wenceslaubaltor.github.io
- **Pasta local:** `~/projetos/perfil-web/`
- **Stack:** HTML5 + CSS3 + JavaScript vanilla (sem frameworks, sem build tools)

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
- [Parte 3 — CSS Grid (seção de projetos)](#parte-3--css-grid-seção-de-projetos)
  - [Grid 1: Flexbox vs Grid + ativação básica](#grid-1--flexbox-vs-grid--ativação-básica)
  - [Grid 2: Controle fino de larguras e espaçamentos](#grid-2--controle-fino-de-larguras-e-espaçamentos)
  - [Grid 3: repeat() e minmax()](#grid-3--repeat-e-minmax)
  - [Grid 4: auto-fit (responsivo sem media queries)](#grid-4--auto-fit-responsivo-sem-media-queries)
  - [Grid 5: Posicionamento (span, grid-column, grid-row)](#grid-5--posicionamento-span-grid-column-grid-row)
  - [Grid 6: grid-template-areas (layout em palavras)](#grid-6--grid-template-areas-layout-em-palavras)
  - [Grid 7: Polimento, commit e deploy](#grid-7--polimento-commit-e-deploy)
- [Parte 4 — JavaScript básico (interatividade)](#parte-4--javascript-básico-interatividade)
  - [JS 1: Console, variáveis e `<script defer>`](#js-1--console-variáveis-e-script-defer)
  - [JS 2: DOM querying (contador automático)](#js-2--dom-querying-contador-automático)
  - [JS 3: Eventos e funções (botão de oi)](#js-3--eventos-e-funções-botão-de-oi)
  - [JS 4: classList.toggle (botão de tema)](#js-4--classlisttoggle-botão-de-tema)
  - [JS 5: localStorage (tema persistente)](#js-5--localstorage-tema-persistente)
  - [JS 6: Arrays + filter + input (busca em tempo real)](#js-6--arrays--filter--input-busca-em-tempo-real)
  - [JS 7: Polimento, commit e deploy](#js-7--polimento-commit-e-deploy)
- [Parte 5 — `fetch` + GitHub API (repos dinâmicos)](#parte-5--fetch--github-api-repos-dinâmicos)
  - [API 1: fetch + Promise + .then](#api-1--fetch--promise--then)
  - [API 2: async/await + try/catch + response.ok](#api-2--asyncawait--trycatch--responseok)
  - [API 3: .map + innerHTML + nova grid-area](#api-3--map--innerhtml--nova-grid-area)
  - [API 4: Estados de UI (loading visível + erro na tela)](#api-4--estados-de-ui-loading-visível--erro-na-tela)
  - [API 5: .filter + .sort + .slice (pipeline de curadoria)](#api-5--filter--sort--slice-pipeline-de-curadoria)
  - [API 6: Refinos visuais (line-clamp, dourado, data relativa)](#api-6--refinos-visuais-line-clamp-dourado-data-relativa)
  - [API 7: Polimento, commit e deploy](#api-7--polimento-commit-e-deploy)
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

# Parte 3 — CSS Grid (seção de projetos)

Adição posterior ao tutorial: uma seção `.projetos` com 5 cards renderizados em grid responsivo. Cobre o sistema CSS Grid do zero, terminando com layout via `grid-template-areas`.

## Grid 1 — Flexbox vs Grid + ativação básica

**Flexbox e Grid não competem — se complementam.**

| Sistema | Dimensão | Tipicamente usado para |
|---------|----------|------------------------|
| **Flexbox** | 1D (linha **ou** coluna) | Navegação, lista de botões, distribuir num eixo |
| **Grid** | 2D (linhas **e** colunas simultaneamente) | Galerias, dashboards, layouts de página |

Outra forma de pensar:
- **Flexbox** é "content-out": "tenho 3 itens, distribui no espaço"
- **Grid** é "layout-in": "tenho uma grade 3×2, coloca itens nas células"

### Sintaxe básica

| Propriedade | Onde vai | Função |
|-------------|----------|--------|
| `display: grid` | No container | Ativa o Grid |
| `grid-template-columns` | No container | Define colunas e larguras |
| `gap` | No container | Espaço entre células (igual ao Flexbox) |
| `fr` | Unidade | "Fração" do espaço disponível |

### Unidade `fr`
`1fr 1fr 1fr` = três colunas iguais. Inclui o `gap` no cálculo (porcentagens não fariam isso).

### Recap

| Conceito | Onde apareceu |
|----------|---------------|
| Flexbox = 1D, Grid = 2D | Conceito teórico |
| Misturar os dois | `.projetos` flex, `.grid-projetos` grid |
| Ativar Grid | `display: grid` |
| Grid sem template-columns | Default = 1 coluna |
| 3 colunas iguais | `grid-template-columns: 1fr 1fr 1fr` |
| HTML semântico para cards | `<article>` |
| Acomodar layout flex existente | `flex-wrap: wrap` + `flex-basis: 100%` |

---

## Grid 2 — Controle fino de larguras e espaçamentos

### Unidades em `grid-template-columns`

| Unidade | Comportamento |
|---------|---------------|
| `1fr` | Fração do espaço **livre** |
| `px` | Tamanho fixo absoluto |
| `%` | Porcentagem do container (raro — `fr` é melhor) |
| `auto` | "O que o conteúdo precisar" |
| `min-content` | Largura da maior palavra |
| `max-content` | Largura do texto sem quebra |
| `minmax(min, max)` | Limites inferior e superior |

### Por que `fr` ganha de `%`

Container de 400px, `gap: 16px`, 3 colunas:
- `33.33%` cada → 133px × 3 + 32px gaps = **431px** (estoura!)
- `1fr` cada → (400 − 32) / 3 = **122.67px** (bate certo)

`fr` é **gap-aware**, `%` é cego ao gap.

### `gap` separado

| Sintaxe | O que faz |
|---------|-----------|
| `gap: 16px` | Igual nas duas direções |
| `gap: 24px 16px` | Vertical / horizontal (igual ao padding) |
| `row-gap: 24px` + `column-gap: 16px` | Versão expandida |

### Padrões clássicos de `template-columns`

```css
grid-template-columns: 240px 1fr;             /* sidebar + conteúdo */
grid-template-columns: 200px 1fr 300px;       /* sidebar + main + aside */
grid-template-columns: auto 1fr;              /* ícone + texto */
grid-template-columns: 1fr 2fr;               /* segunda 2× a primeira */
```

### Recap

| Conceito | Onde apareceu |
|----------|---------------|
| Unidades em Grid | `fr`, `px`, `%`, `auto`, `min-content`, `max-content` |
| `fr` > `%` | `fr` desconta o `gap` antes de dividir |
| `gap` 2 valores | row / column |
| Linhas automáticas | Grid cria linhas conforme itens chegam |
| Padrões de sidebar | `240px 1fr`, `auto 1fr` |

---

## Grid 3 — `repeat()` e `minmax()`

### `repeat()`: fim da repetição

| Antes | Depois |
|-------|--------|
| `1fr 1fr 1fr` | `repeat(3, 1fr)` |
| `100px 100px 100px 100px` | `repeat(4, 100px)` |
| `1fr 1fr 2fr 1fr 1fr 2fr` | `repeat(2, 1fr 1fr 2fr)` |
| `200px 1fr 1fr 1fr 1fr 200px` | `200px repeat(4, 1fr) 200px` |

`repeat()` pode ser misturado com colunas fixas.

### `minmax(min, max)`

| Uso | O que faz |
|-----|-----------|
| `minmax(200px, 1fr)` | Nunca menor que 200px, pode crescer |
| `minmax(200px, 400px)` | Fica entre 200 e 400px |
| `minmax(100px, auto)` | Mínimo 100px, cresce com conteúdo |
| `minmax(0, 1fr)` | Tira a "trava" do `auto` que faz estourar com conteúdo grande |

### A armadilha do `1fr`

`1fr` é tecnicamente `minmax(auto, 1fr)`. O `auto` no mínimo = "tamanho do conteúdo". Conteúdo gigante (URL longa, imagem sem CSS) estoura a coluna. Conserto: `minmax(0, 1fr)`.

### `grid-template-rows` vs `grid-auto-rows`

| Propriedade | Função |
|-------------|--------|
| `grid-template-rows` | Define linhas **explicitamente** |
| `grid-auto-rows` | Define tamanho de linhas **criadas automaticamente** |

Sem `grid-template-rows`, **todas** as linhas são auto, e `grid-auto-rows` controla todas.

### Recap

| Conceito | Onde apareceu |
|----------|---------------|
| `repeat(N, padrão)` | `repeat(3, 1fr)` |
| Misturar repeat com fixos | `200px repeat(4, 1fr) 200px` |
| `minmax(min, max)` | Limites de tamanho |
| Altura mínima das linhas | `grid-auto-rows: minmax(120px, auto)` |
| Conserto de estouro | `minmax(0, 1fr)` |

---

## Grid 4 — `auto-fit` (responsivo sem media queries)

**A etapa mais transformadora do tutorial.**

### `auto-fit` vs `auto-fill`

| Modo | Quando sobra espaço |
|------|----------------------|
| **`auto-fit`** | Estica colunas existentes para preencher |
| **`auto-fill`** | Cria colunas vazias invisíveis para reservar |

**Regra prática:** quase sempre você quer `auto-fit`.

### O one-liner mágico

```css
grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
```

> "Repita colunas quantas couberem, cada uma com mínimo 180px e podendo crescer."

Comportamento em diferentes larguras (com `gap: 16px`):

| Largura | Colunas |
|---------|---------|
| 300px | 1 |
| 500px | 2 |
| 800px | 3 |
| 1200px | 5 |

Sem **nenhuma** media query.

### Comparação direta

**Sem `auto-fit`** (6 blocos de @media):
```css
.grid { grid-template-columns: 1fr; }
@media (min-width: 500px)  { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 700px)  { .grid { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1000px) { .grid { grid-template-columns: repeat(4, 1fr); } }
@media (min-width: 1300px) { .grid { grid-template-columns: repeat(5, 1fr); } }
```

**Com `auto-fit`** (1 linha):
```css
.grid { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
```

### Quando media queries continuam valendo

`auto-fit` resolve **número de colunas de uma grade homogênea**. Ainda precisa de media queries para:
- Mudar `flex-direction` ou `grid-template-areas`
- Mostrar/esconder elementos
- Mudar tipografia drasticamente
- Reorganizar layout estrutural

### Recap

| Conceito | Onde apareceu |
|----------|---------------|
| Decidir colunas dinamicamente | `auto-fit` |
| `auto-fit` vs `auto-fill` | Estica vs reserva |
| One-liner mágico | `repeat(auto-fit, minmax(180px, 1fr))` |
| Mobile-first natural | Já na base, sem @media |
| Escolher o `minmax` mínimo | Pelo conteúdo, não pelo dispositivo |

---

## Grid 5 — Posicionamento (`span`, `grid-column`, `grid-row`)

### Grid lines: numeração

Grid numera **linhas** (não células). Para 3 colunas, linhas verticais são numeradas de 1 a 4.

```
linha 1     linha 2     linha 3     linha 4
   |           |           |           |
   v           v           v           v
   ┌───────────┬───────────┬───────────┐
   │  col 1    │  col 2    │  col 3    │
   └───────────┴───────────┴───────────┘
```

Posicionar item = dizer entre quais linhas ele vive.

### Sintaxes

| Propriedade | Exemplo | Significado |
|-------------|---------|-------------|
| `grid-column: 1 / 3` | Da linha 1 à linha 3 | Ocupa colunas 1 e 2 |
| `grid-column: 1 / -1` | Da linha 1 à última | Ocupa **todas** as colunas |
| `grid-column: span 2` | A partir de onde estaria, 2 colunas | Atalho mais usado |
| `grid-row: 1 / 3` | Mesma lógica, vertical | Item se estica em 2 linhas |
| `grid-row: span 2` | Atalho vertical | Card "alto" |

### Por que `span` é mais portátil

Com `auto-fit`, o número de colunas é dinâmico. `1 / 3` quebra em telas pequenas. `span 2` se adapta — se só tem 1 coluna, ocupa 1 coluna. Mais defensivo.

### Seletor composto

`.projeto-card.destaque` (sem espaço) = elemento com **ambas** as classes. Especificidade maior que `.projeto-card` sozinho, sem precisar de `!important`.

### Padrões úteis

```css
.header   { grid-column: 1 / -1; }           /* ocupa todas as colunas */
.imagem   { grid-row: span 2; }              /* ocupa 2 linhas */
.hero     { grid-column: span 2;
            grid-row: span 2; }              /* 2 col × 2 linhas */
.sidebar  { grid-column: 2 / 4; }            /* posição explícita */
```

### Recap

| Conceito | Onde apareceu |
|----------|---------------|
| Grid lines | Numeração de 1 a N+1 |
| `grid-column: start / end` | Posição explícita |
| `grid-column: 1 / -1` | Da primeira à última |
| `grid-column: span N` | Atalho portátil |
| Seletor composto | `.projeto-card.destaque` |
| Pílula visual | `border-radius: 999px` |

---

## Grid 6 — `grid-template-areas` (layout em palavras)

### Conceito

Desenha o layout com strings nomeando cada célula. Lê-se literalmente como vai parecer.

```css
grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
```

### Sintaxe

Duas partes:
1. **No container:** strings nomeando células
2. **Em cada filho:** `grid-area: <nome>`

| Padrão | Significado |
|--------|-------------|
| `"a b c"` | 1 linha, 3 colunas |
| `"a a b"` | `a` ocupa 2 colunas, `b` 1 |
| `"a a" "b c"` | 2 linhas, 2 colunas; `a` ocupa toda a linha 1 |
| `"a . b"` | Ponto = célula vazia |

**Regra crítica:** células com mesmo nome **devem formar um retângulo**, ou o CSS é inválido.

### O refactor do `<main>`

Antes — Flexbox com wrap (4 regras escondendo o layout):
```css
main { display: flex; flex-direction: row; flex-wrap: wrap; }
.perfil, .links { flex: 1; }
.projetos { flex-basis: 100%; }
```

Depois — Grid com areas (layout desenhado no código):
```css
main {
    display: grid;
    grid-template-areas:
        "perfil   links"
        "projetos projetos";
}
.perfil   { grid-area: perfil; }
.links    { grid-area: links; }
.projetos { grid-area: projetos; }
```

### Padrão para responsivo

```css
/* Mobile: tudo empilhado */
main {
    grid-template-areas:
        "perfil"
        "links"
        "projetos";
}

@media (min-width: 768px) {
    main {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "perfil   links"
            "projetos projetos";
    }
}
```

Os `grid-area` dos filhos ficam fora do @media — só o **layout** muda.

### Recap

| Conceito | Onde apareceu |
|----------|---------------|
| `grid-template-areas` | Layout com strings |
| `grid-area: <nome>` | Atribui filho a uma área |
| Mesmo nome adjacente | Funde em retângulo |
| `.` | Célula vazia |
| Áreas estáveis | Filhos sabem seu nome globalmente; só o template muda nos breakpoints |
| Areas vs span | Areas = layout inteiro; span = ajustes pontuais |

---

## Grid 7 — Polimento, commit e deploy

Sem conceito novo de Grid. Costurar tudo:
1. Pequeno polimento (hover + transition nos cards)
2. Conferir tudo localmente
3. `git add` + `git commit` (com mensagem multi-linha explicando *por quê*)
4. `git push`
5. Aguardar Pages rebuildar (`until <condição>; do sleep 5; done`)
6. Confirmar HTTP 200 + status `built`

### Convenção de commit multi-linha

```
Linha 1: resumo imperativo curto (≤72 chars)
[linha em branco]
Parágrafo explicando o *porquê* e contexto da mudança.
Bom para refatorações grandes ou mudanças com várias partes.
```

### Padrão `until` para polling

```bash
until [ "$(comando-que-retorna-status)" = "estado-desejado" ]; do
    sleep 5
done
```

Mais limpo que `sleep <fixo>`: rápido se finalizar antes, robusto se demorar mais.

### Hard reload

`Ctrl+Shift+R` ignora cache do navegador. Útil logo após push para garantir que está vendo a versão nova.

---

## Comparação Flexbox vs Grid: quando usar cada um

| Cenário | Melhor escolha |
|---------|----------------|
| Barra de navegação horizontal | Flexbox |
| Lista de tags/botões | Flexbox |
| Centralizar 1 item no meio da tela | Flexbox |
| Card/sidebar com 3 elementos empilhados | Flexbox column |
| **Galeria de cards responsiva** | **Grid + auto-fit** |
| **Dashboard com sidebar + main + aside** | **Grid + areas** |
| Layout controlando linhas E colunas | Grid |
| "Espalha o resto do espaço" | Flexbox (`flex: 1`) |
| "Ocupa 2 células" | Grid (`span 2`) |

---

# Parte 4 — JavaScript básico (interatividade)

Até aqui a página era 100% estática: o usuário só lia. Nesta parte, JavaScript entra para fazer a página **reagir** — clicar em botão, alternar tema, lembrar preferência entre visitas e filtrar cards em tempo real.

**Princípio guia da parte:** CSS define **como cada estado fica**; JavaScript só **liga e desliga classes** ou **lê e escreve valores**. Quase nunca JS toca em estilo diretamente.

## JS 1 — Console, variáveis e `<script defer>`

Primeiro arquivo JS conectado à página.

### Conceitos
- **`<script src="…" defer>`** — `defer` faz o navegador esperar o HTML estar pronto antes de rodar o script. Sem ele, `querySelector` em elementos abaixo do `<script>` retornaria `null`.
- **`console.log(...)`** — imprime no DevTools (F12 → Console). É a primeira ferramenta de debug que você vai usar a vida toda.
- **`const`** — variável que **não vai ser reatribuída**. Default da comunidade moderna.
- **`let`** — variável que **será reatribuída**. Usa só quando precisa.
- **Tipos primitivos:** string (`"abc"`), number (`42`), boolean (`true`/`false`).
- **Template literal:** crase + `${variavel}` para interpolar. Substitui concatenação com `+`.

```js
const nome = "Wenceslau";
let cardsAtuais = 5;
const aprendendoJs = true;

console.log(`Hello, eu sou ${nome}!`);
cardsAtuais = 6;
```

### Quando usar `const` vs `let`
Padrão: comece **tudo com `const`**. Só troque para `let` se o linter (ou seu próprio raciocínio) detectar reatribuição real. Torna o código mais fácil de ler — `const` é uma promessa de imutabilidade do "vínculo" entre nome e valor.

---

## JS 2 — DOM querying (contador automático)

### Conceitos
- **DOM** (Document Object Model): a árvore de objetos JavaScript que representa o HTML. Acessada pela variável global `document`.
- **`document.querySelector(seletor)`** — retorna o **primeiro** elemento que casa com o seletor CSS (ou `null`).
- **`document.querySelectorAll(seletor)`** — retorna uma **`NodeList`** com todos os elementos que casam (tem `.length`, aceita `forEach`).
- **`.textContent`** — lê ou escreve o **texto** de um elemento.

```js
const cards = document.querySelectorAll('.projeto-card');
const tituloProjetos = document.querySelector('.projetos h2');
tituloProjetos.textContent = `Meus projetos (${cards.length})`;
```

### Por que `defer` paga o aluguel agora
Sem `defer`, o script rodaria antes do HTML ser parseado → `querySelectorAll` retornaria lista vazia. Aquele detalhe técnico da JS 1 era exatamente para isso.

### Seletor restrito
`'.projetos h2'` (com espaço) significa "h2 **dentro de** elemento com classe `.projetos`". Sem o prefixo, o primeiro h2 da página seria o de "Meus links".

---

## JS 3 — Eventos e funções (botão de oi)

### Conceitos
- **Função** — pedaço de código guardado num nome, que só roda quando chamado.
- **Arrow function** (`=>`) — forma moderna e enxuta:
  ```js
  const cumprimentar = () => {
      console.log("Olá!");
  };
  cumprimentar();   // RODA aqui
  ```
- **`addEventListener('evento', funcao)`** — quando esse evento acontecer nesse elemento, chame essa função.
- **Eventos comuns:** `'click'`, `'input'`, `'submit'`, `'keydown'`.

### Construção: botão "Mandar um oi" com contador
```html
<button id="botao-oi" type="button">Mandar um oi</button>
<p id="mensagem-oi"></p>
```

```js
const botaoOi = document.querySelector('#botao-oi');
const mensagemOi = document.querySelector('#mensagem-oi');
let contagemOis = 0;

const aoClicarOi = () => {
    contagemOis = contagemOis + 1;
    mensagemOi.textContent = `Oi recebido! Você já mandou ${contagemOis}.`;
};

botaoOi.addEventListener('click', aoClicarOi);
```

### O erro clássico: parênteses no listener
- `addEventListener('click', aoClicarOi)` → **certo**: passa a receita.
- `addEventListener('click', aoClicarOi())` → **errado**: chama a função **uma vez** e passa o **resultado** (`undefined`) como handler.

### Por que `let` para o contador
`contagemOis` muda a cada clique → precisa ser `let`. Tudo o mais (referências DOM, a função em si) é `const`.

### Detalhe de CSS: reservar espaço com `min-height`
`#mensagem-oi { min-height: 1.4em }` evita o "pulo" do layout quando a primeira mensagem aparece. Pequena UX que importa.

---

## JS 4 — `classList.toggle` (botão de tema)

### Conceitos
- **`element.classList`** — coleção das classes CSS do elemento, com 3 métodos principais:
  - `.add('x')` → adiciona
  - `.remove('x')` → remove
  - `.toggle('x')` → liga/desliga. **Forma com 2º argumento:** `.toggle('x', condicao)` força o estado.
- **`.contains('x')`** → retorna `true` ou `false`.
- **`if`/`else`** — controle de fluxo:
  ```js
  if (condicao) {
      // verdadeiro
  } else {
      // falso
  }
  ```
- **`===`** — igualdade **estrita** (compara valor E tipo). **Sempre use `===` em vez de `==`** em JS moderno.
- **`position: fixed`** (CSS) — gruda o elemento em coordenadas da janela do navegador. `z-index` controla sobreposição.

### Estratégia de tema escolhida (A): toggle manual
- Drop em `@media (prefers-color-scheme: dark)` — perdemos detecção automática do SO, em troca de controle total do usuário.
- Variáveis CSS redefinidas em `body.tema-escuro` (e não em `:root`) — a herança CSS faz toda a árvore re-renderizar com cores novas.

### Construção
```html
<button id="botao-tema" type="button">Modo escuro</button>
```

```css
body.tema-escuro {
    --cor-fundo: #0f172a;
    --cor-texto: #f1f5f9;
    --cor-texto-suave: #94a3b8;
    --cor-card: #1e293b;
}
```

```js
const botaoTema = document.querySelector('#botao-tema');

const aoClicarTema = () => {
    document.body.classList.toggle('tema-escuro');

    if (document.body.classList.contains('tema-escuro')) {
        botaoTema.textContent = 'Modo claro';
    } else {
        botaoTema.textContent = 'Modo escuro';
    }
};

botaoTema.addEventListener('click', aoClicarTema);
```

### Princípio: CSS define, JS alterna
JavaScript **não toca em nenhuma cor**. Só põe ou tira a classe. O CSS faz o trabalho visual inteiro. Essa separação é o que torna temas (e qualquer estado visual) sustentáveis em projetos grandes.

### UX do texto do botão
Botão deve mostrar **para onde vai te levar**, não onde você está. Estamos no escuro? O botão diz "Modo claro" (para onde o clique te leva).

---

## JS 5 — `localStorage` (tema persistente)

### Conceitos
- **`localStorage`** — armazenamento chave→valor do navegador. **Persiste para sempre**, é **por site**, **síncrono**.
- **Métodos essenciais:**
  - `localStorage.setItem('chave', 'valor')` — guarda
  - `localStorage.getItem('chave')` — lê (string ou `null`)
  - `localStorage.removeItem('chave')` — apaga
- **Pegadinha:** só guarda **strings**. Para objetos/arrays use `JSON.stringify` na ida e `JSON.parse` na volta.

### Construção
```js
const botaoTema = document.querySelector('#botao-tema');

// 1) Ao carregar: lê o tema salvo e aplica.
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'escuro') {
    document.body.classList.add('tema-escuro');
    botaoTema.textContent = 'Modo claro';
}

// 2) Ao clicar: alterna e salva.
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
```

### FOUC (Flash of Unstyled Content)
Como `<script defer>` roda **depois** do HTML ser renderizado, há uma fração de segundo de tema "errado" antes do JS aplicar. Solução clássica: script inline no `<head>` que aplica a classe antes do `<body>` ser desenhado. Trade-off (perde a separação JS/HTML) → fica de TODO.

### Inspecionar `localStorage`
F12 → aba **Application** → **Local Storage** → domínio do site. Vê todas as chaves; pode editar valores manualmente para testar.

---

## JS 6 — Arrays + `filter` + `input` (busca em tempo real)

### Conceitos
- **Array** — lista ordenada de valores. Acesso por índice (`arr[0]`), `arr.length`.
- **`.filter(funcao)`** — retorna um **array novo** só com os itens onde a função retorna `true`. Não modifica o original.
- **`.forEach(funcao)`** — roda a função para cada item. Usada quando você **faz algo com cada um**, não quando precisa de um subconjunto.
- **`.includes(substring)`** — em strings, pergunta se contém. Em arrays, idem.
- **`.toLowerCase()`** + **`.trim()`** — normalização: insensível a maiúsculas e a espaços nas pontas.
- **Evento `'input'`** — dispara **a cada tecla** num campo. Diferente de `'change'` (só quando o campo perde o foco).
- **`input.value`** — em campos de formulário, `.value` é o equivalente de `.textContent`.
- **`Array.from(nodeList)`** — converte `NodeList` em array de verdade (para usar `.filter`, `.map` etc.). Equivalente: `[...nodeList]`.

### Construção
```html
<input type="search" id="busca-projetos" placeholder="Buscar projeto...">
```

```css
.escondido { display: none; }
```

```js
const inputBusca = document.querySelector('#busca-projetos');

const aoDigitar = () => {
    const termo = inputBusca.value.toLowerCase().trim();

    cards.forEach(card => {
        const titulo = card.querySelector('h3').textContent.toLowerCase();
        const descricao = card.querySelector('p').textContent.toLowerCase();
        const combina = titulo.includes(termo) || descricao.includes(termo);
        card.classList.toggle('escondido', !combina);
    });

    const visiveis = Array.from(cards).filter(card => {
        return !card.classList.contains('escondido');
    });
    tituloProjetos.textContent = `Meus projetos (${visiveis.length})`;
};

inputBusca.addEventListener('input', aoDigitar);
```

### `forEach` vs `filter`: qual usar quando
| Precisa | Use |
|---------|-----|
| Fazer algo com **cada item** (efeito colateral) | `forEach` |
| **Selecionar** um subconjunto para usar depois | `filter` |
| Transformar cada item num valor novo | `.map` (não usado aqui ainda) |

Aqui usamos os dois propositalmente: `forEach` para mexer no DOM de cada card, `filter` para contar os visíveis.

### Detalhe: `querySelector` é escopado
`card.querySelector('h3')` busca **dentro daquele card específico**. Sem o `card.` na frente, pegaria o primeiro `<h3>` da página inteira. Sempre que estiver dentro de um loop, prefira o `querySelector` escopado.

---

## JS 7 — Polimento, commit e deploy

Costurar a parte final.

### Polimento: estado vazio na busca
Quando a busca não encontra nada, mostrar mensagem em vez de tela vazia. Aproveitamos para **refatorar** `.projeto-card.escondido` em `.escondido` (utility genérica reutilizável).

```html
<p id="sem-resultados" class="escondido">Nenhum projeto encontrado.</p>
```

```js
const semResultados = document.querySelector('#sem-resultados');
// ... ao final do aoDigitar():
semResultados.classList.toggle('escondido', visiveis.length > 0);
```

### Ciclo de fechamento da parte
1. Testar tudo localmente (cada feature da Parte 4: contador, oi, tema, persistência, busca, estado vazio).
2. Testar em modo claro e escuro.
3. `git add` + `git commit` multi-linha.
4. `git push`.
5. Aguardar Pages rebuildar.
6. Confirmar no site público.

---

# Parte 5 — `fetch` + GitHub API (repos dinâmicos)

Até aqui o site era 100% estático: cards fictícios escritos à mão no HTML. Agora vamos **buscar dados em tempo de execução** da API pública do GitHub e renderizar uma nova seção "Repos do GitHub" abaixo dos fictícios. Conceitos centrais: `fetch`, Promises, `async`/`await`, tratamento de erro, transformação de array (`filter` + `sort` + `slice` + `map`) e estados de UI (loading, error, success).

**Decisão de escopo:** os cards fictícios continuam (vitrine de "projetos planejados"). A nova seção mostra repos reais. A coexistência ensina o padrão real de "dados estáticos + dinâmicos no mesmo layout".

## API 1 — `fetch` + Promise + `.then`

`fetch(url)` faz uma requisição HTTP e retorna **uma Promise** — uma "promessa" de que algum dia vai chegar uma resposta. Você não tem o valor imediatamente; tem um objeto que representa o trabalho em andamento.

```js
const URL_REPOS = 'https://api.github.com/users/wenceslaubaltor/repos';

fetch(URL_REPOS)
    .then(resposta => resposta.json())  // 1º .then: extrai o corpo como JSON
    .then(repos => console.log(repos)); // 2º .then: o array de repos parseado
```

**O que cada `.then` faz:** registra uma função que vai rodar **quando a Promise anterior resolver**. O retorno de um `.then` vira a entrada do próximo — assim você encadeia transformações.

**Por que dois `.then`?** `fetch` resolve para um objeto `Response` (com headers, status, métodos). Pra obter o **corpo** parseado como JSON, você chama `resposta.json()` — que também é assíncrono (retorna outra Promise).

**Endpoint usado:** `https://api.github.com/users/<usuário>/repos` — público, sem autenticação. **Limite:** 60 requisições por hora por IP sem auth.

## API 2 — `async`/`await` + `try`/`catch` + `response.ok`

`.then` encadeado vira bagunça rapidamente. A sintaxe moderna é `async`/`await`:

```js
const carregarRepos = async () => {
    try {
        const resposta = await fetch(URL_REPOS);
        if (!resposta.ok) {
            throw new Error(`HTTP ${resposta.status} ao buscar repos`);
        }
        const repos = await resposta.json();
        console.log(repos);
    } catch (erro) {
        console.error('Falha ao buscar repos:', erro);
    }
};

carregarRepos();
```

**`async`**: marca a função como assíncrona. Toda função `async` **devolve uma Promise** automaticamente.

**`await`**: só funciona dentro de `async`. Pausa a função até a Promise resolver e devolve o valor desempacotado. Visualmente, código assíncrono fica linear como se fosse síncrono.

**`try`/`catch`**: bloco de tratamento de erro. Se algo dentro do `try` lançar uma exceção (rede caiu, JSON inválido, `throw` manual), o controle pula pro `catch`.

### ⚠️ Pegadinha clássica do `fetch`

`fetch` **só rejeita em falha de rede** (sem internet, DNS, CORS). HTTP 404, 500, 403 são considerados "sucesso da requisição com status de erro" — a Promise resolve normalmente. Por isso você **precisa checar `resposta.ok`** (`true` se status é 2xx) e lançar manualmente:

```js
if (!resposta.ok) {
    throw new Error(`HTTP ${resposta.status}`);
}
```

Sem essa checagem, um 404 passaria silenciosamente e você tentaria fazer `.json()` numa resposta de erro, gerando um bug confuso.

## API 3 — `.map` + `innerHTML` + nova `grid-area`

Renderizar os repos como cards. Decisão: **reusar `.projeto-card` e `.grid-projetos`** — zero CSS novo pra layout. Só adicionar a nova área no grid principal.

**HTML — nova seção abaixo das outras:**

```html
<section class="repos">
    <h2>Repos do GitHub</h2>
    <div id="lista-repos" class="grid-projetos">
        <p>Carregando…</p>
    </div>
</section>
```

**CSS — adicionar `repos` ao grid-template-areas (mobile e desktop):**

```css
main {
    grid-template-areas:
        "perfil"
        "links"
        "projetos"
        "repos";
}

.repos { grid-area: repos; }

@media (min-width: 768px) {
    main {
        grid-template-areas:
            "perfil   links"
            "projetos projetos"
            "repos    repos";
    }
}
```

**JS — função que converte um repo em HTML, renderização com `.map`:**

```js
const listaRepos = document.querySelector('#lista-repos');

const repoParaCard = (repo) => {
    const descricao = repo.description || 'Sem descrição.';
    const linguagem = repo.language || '—';
    return `
        <article class="projeto-card">
            <h3><a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a></h3>
            <p>${descricao}</p>
            <div class="meta">${linguagem} • ★ ${repo.stargazers_count}</div>
        </article>
    `;
};

// Dentro do try, após obter `repos`:
listaRepos.innerHTML = repos.map(repoParaCard).join('');
```

**Conceitos:**
- **`.map(fn)`**: transforma cada item, retorna **novo array** com o resultado. Aqui: array de objetos `repo` → array de strings de HTML.
- **`.join('')`**: array de strings vira **uma única string**. Sem o `''`, ele juntaria com vírgula entre os pedaços.
- **`innerHTML`**: lê/escreve o HTML interno como string. ⚠️ Se a string vier de **input de usuário não confiável**, é vetor de XSS. Aqui o conteúdo vem da API do GitHub (que valida nomes de repo), então é seguro.
- **`target="_blank" rel="noopener"`**: abre em nova aba **sem dar à nova janela acesso ao `window.opener`** da sua página. Padrão de segurança recomendado.
- **Fallback `||`**: `repo.description || 'Sem descrição.'` — se `description` for `null`/`undefined`/`''`, usa o texto padrão.

## API 4 — Estados de UI (loading visível + erro na tela)

Toda interface que busca dados de fora tem **três estados**: `loading`, `error`, `success`. Até a Etapa 3 só tratamos o sucesso decentemente. Vamos cobrir loading com **skeleton screens** e erro com **mensagem na tela** (não só `console.error`).

**HTML — substituir `Carregando…` por 3 skeletons:**

```html
<div id="lista-repos" class="grid-projetos">
    <div class="repo-skeleton"></div>
    <div class="repo-skeleton"></div>
    <div class="repo-skeleton"></div>
</div>
```

**CSS — skeleton animado + bloco de erro:**

```css
.repo-skeleton {
    min-height: 110px;
    border-radius: 10px;
    background: linear-gradient(
        90deg,
        #e5e7eb 25%,
        #f4f4f5 50%,
        #e5e7eb 75%
    );
    background-size: 200% 100%;
    animation: skeleton-pulse 1.5s ease-in-out infinite;
}

@keyframes skeleton-pulse {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

.repo-erro {
    grid-column: 1 / -1;
    padding: var(--espaco-medio);
    background-color: #fef2f2;
    border: 1px solid #fecaca;
    border-radius: 8px;
    color: #991b1b;
}
```

**JS — no `catch`, mostrar mensagem visível:**

```js
} catch (erro) {
    console.error('Falha ao buscar repos:', erro);
    listaRepos.innerHTML = `
        <div class="repo-erro">
            <strong>Não foi possível carregar os repos.</strong>
            ${erro.message}
        </div>
    `;
}
```

**Conceitos novos:**
- **Skeleton screens**: padrão moderno de loading (GitHub, LinkedIn, YouTube usam). Placeholders no formato do conteúdo final, com pulso animado. Comunica "vem coisa" sem spinners genéricos.
- **`@keyframes`**: declara animação com estados em pontos do tempo (de `0%` a `100%`). Ativa com a propriedade `animation` no elemento.
- **Truque do shimmer**: `linear-gradient` com `background-size: 200%` + animar `background-position`. A faixa "desliza" criando ilusão de onda passando.
- **`grid-column: 1 / -1`**: item ocupa **todas as colunas** do grid (da primeira à última). Útil pra erro/mensagem que deve ocupar a largura inteira.
- **Substituição automática dos skeletons**: ao escrever `listaRepos.innerHTML = ...` (no sucesso) ou no catch, o conteúdo anterior é **sobrescrito**. Os skeletons somem sozinhos.

## API 5 — `.filter` + `.sort` + `.slice` (pipeline de curadoria)

Mostrar todos os repos crus polui a vitrine. Vamos curar: **excluir forks**, **ordenar por atualização recente**, **limitar a top N**.

```js
const LIMITE_REPOS = 6;

const visiveis = repos
    .filter(repo => !repo.fork)
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, LIMITE_REPOS);

if (visiveis.length === 0) {
    listaRepos.innerHTML = `<p class="repo-vazio">Nenhum repo público para mostrar ainda.</p>`;
    return;
}

listaRepos.innerHTML = visiveis.map(repoParaCard).join('');
```

**Conceitos:**
- **`.filter(fn)`**: já vimos com NodeList; agora em objetos da API. Retorna novo array com os itens onde `fn(item)` é `true`.
- **`.sort((a, b) => …)`**: ordena. A função recebe `(a, b)` e devolve:
  - negativo → `a` vem antes
  - positivo → `b` vem antes
  - zero → mantém ordem
  - Datas: `new Date(str) - new Date(str)` vira diferença em ms (subtração de `Date` converte pra timestamp automaticamente).
- **`.slice(início, fim)`**: pega fatia sem mutar o original. `.slice(0, 6)` pega os 6 primeiros — se houver menos, devolve todos sem erro.
- **`.sort` muta o original**, mas como vem depois de `.filter` (que cria array novo), a mutação ocorre num intermediário — seguro.
- **Encadeamento**: cada método retorna array → você lê o pipeline de cima pra baixo como uma esteira de transformações.
- **Early return**: se nenhum repo sobrar, exibe estado vazio e sai com `return` — evita aninhar o resto em `else`.

## API 6 — Refinos visuais (line-clamp, dourado, data relativa)

Três pontos rústicos a polir.

### 1) Descrição cortada após 2 linhas com `…`

Se a descrição for longa, o card "estica" e quebra o alinhamento da grid. Corte com `-webkit-line-clamp`:

```css
.projeto-card .repo-desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
```

O combo `-webkit-box` + `-webkit-line-clamp` + `-webkit-box-orient: vertical` é a receita-padrão hoje. O prefixo é histórico (WebKit antigo), mas funciona em todos os navegadores modernos.

### 2) Esconder `★ 0` quando não há estrelas

Ternário em template literal:

```js
const estrelas = repo.stargazers_count > 0
    ? `<span class="estrela">★ ${repo.stargazers_count}</span>`
    : '';
```

Renderiza o span só quando há pelo menos uma estrela. Cor dourada via CSS:

```css
.projeto-card .meta .estrela {
    color: #ca8a04; /* dourado discreto, OK em fundo claro e escuro */
}
```

### 3) Data relativa ("atualizado há 3 dias") com `Intl.RelativeTimeFormat`

API nativa do navegador para formatar datas relativas em qualquer idioma. Zero dependência:

```js
const formatadorRelativo = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' });

const formatarDataRelativa = (dataISO) => {
    const diffMs = new Date(dataISO) - new Date();
    const diffDias = Math.round(diffMs / (1000 * 60 * 60 * 24));

    if (Math.abs(diffDias) < 30) return formatadorRelativo.format(diffDias, 'day');
    if (Math.abs(diffDias) < 365) return formatadorRelativo.format(Math.round(diffDias / 30), 'month');
    return formatadorRelativo.format(Math.round(diffDias / 365), 'year');
};
```

- `numeric: 'auto'` ativa frases naturais: "ontem", "amanhã" em vez de "há 1 dia"/"em 1 dia".
- Criamos o formatador **fora da função** (escopo do módulo) — instanciar é caro, fazer uma vez basta.
- `Math.abs` deixa funcionar tanto pra passado (negativo) quanto futuro (positivo) — uniformemente.

### 4) Meta em flex (para alinhar os spans com gap consistente)

```css
.projeto-card .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 0.75rem;
    align-items: center;
    margin-top: var(--espaco-pequeno);
    font-size: 0.75rem;
    color: var(--cor-texto-suave);
}
```

`gap: 0.5rem 0.75rem` define **gap vertical** (entre linhas quando quebra) e **gap horizontal** (entre itens da mesma linha) separadamente.

### Card final — `repoParaCard` refatorado

```js
const repoParaCard = (repo) => {
    const descricao = repo.description || 'Sem descrição.';
    const linguagem = repo.language || '—';
    const dataRelativa = formatarDataRelativa(repo.updated_at);
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
```

## API 7 — Polimento, commit e deploy

Mesmo ciclo de fechamento das partes anteriores.

### Checagem local
- Abrir `xdg-open ~/projetos/perfil-web/index.html`.
- Skeleton pulsa por uma fração de segundo (use throttling **Slow 3G** no DevTools pra ver com calma).
- Cards reais aparecem na seção "Repos do GitHub", ordenados por última atualização.
- Estrelas só aparecem onde > 0; dourado discreto em ambos os temas.
- "Atualizado há X dias" coerente com a ordenação.
- Simular erro (URL inválida) → bloco vermelho aparece com a mensagem.
- Tema escuro: skeleton, estrela, bloco de erro continuam legíveis.

### Ciclo padrão
1. `git add . && git commit -m "..."` (mensagem multi-linha).
2. `git push`.
3. Aguardar Pages rebuildar (~30-60s).
4. Confirmar no site público que a seção "Repos do GitHub" carrega.

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
    <script src="script.js" defer></script>
</head>
<body>
    <button id="botao-tema" type="button">Modo escuro</button>

    <main>
        <section class="perfil">
            <img src="imagem.jpeg" alt="Foto de perfil de Wenceslau">
            <h1>Wenceslau</h1>
            <p class="bio">
                Desenvolvedor curioso, aprendendo HTML e CSS para construir
                minha presença na web.
            </p>
            <button id="botao-oi" type="button">Mandar um oi</button>
            <p id="mensagem-oi"></p>
        </section>

        <section class="links">
            <h2>Meus links</h2>
            <ul>
                <li><a href="https://github.com/">GitHub</a></li>
                <li><a href="https://linkedin.com/">LinkedIn</a></li>
                <li><a href="mailto:baltorw@gmail.com">E-mail</a></li>
            </ul>
        </section>

        <section class="projetos">
            <h2>Meus projetos</h2>
            <input type="search" id="busca-projetos" placeholder="Buscar projeto...">
            <div class="grid-projetos">
                <article class="projeto-card destaque">
                    <span class="badge">Destaque</span>
                    <h3>Página de Perfil</h3>
                    <p>Site pessoal responsivo construído com HTML e CSS puros, hospedado no GitHub Pages.</p>
                </article>
                <article class="projeto-card">
                    <h3>Lista de Tarefas</h3>
                    <p>Aplicativo simples de to-do com persistência local. Praticando manipulação de DOM.</p>
                </article>
                <article class="projeto-card">
                    <h3>Calculadora</h3>
                    <p>Calculadora estilizada com operações básicas. Foco em layout via CSS Grid.</p>
                </article>
                <article class="projeto-card">
                    <h3>Conversor de Moedas</h3>
                    <p>Pequeno conversor que consome uma API pública. Prática inicial com fetch.</p>
                </article>
                <article class="projeto-card">
                    <h3>Quiz Interativo</h3>
                    <p>Jogo de perguntas e respostas com pontuação. Foco em lógica e DOM.</p>
                </article>
            </div>
            <p id="sem-resultados" class="escondido">Nenhum projeto encontrado.</p>
        </section>

        <section class="repos">
            <h2>Repos do GitHub</h2>
            <div id="lista-repos" class="grid-projetos">
                <div class="repo-skeleton"></div>
                <div class="repo-skeleton"></div>
                <div class="repo-skeleton"></div>
            </div>
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

h1 { font-size: 1.75rem; font-weight: 700; }
h2 { font-size: 1.125rem; font-weight: 600; color: var(--cor-texto-suave); }
.bio { color: var(--cor-texto-suave); }

img { max-width: 100%; height: auto; display: block; }

/* ---------- Layout principal ---------- */
body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: var(--espaco-grande);
}

main {
    width: 100%;
    max-width: 420px;
    display: grid;
    gap: var(--espaco-grande);
    grid-template-areas:
        "perfil"
        "links"
        "projetos"
        "repos";
}

.perfil    { grid-area: perfil; }
.links     { grid-area: links; }
.projetos  { grid-area: projetos; }
.repos     { grid-area: repos; }

/* ---------- Cards ---------- */
.perfil, .links, .projetos, .repos {
    background-color: var(--cor-card);
    padding: var(--espaco-grande);
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    gap: var(--espaco-medio);
}

.perfil {
    align-items: center;
    text-align: center;
}

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
    transition: background-color 0.15s ease, border-color 0.15s ease,
                color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
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

.perfil img {
    width: 140px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid var(--cor-card);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* ---------- Botão "Mandar um oi" ---------- */
.perfil button {
    padding: 0.5rem 1.25rem;
    background-color: var(--cor-destaque);
    color: white;
    border: none;
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.perfil button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
}

#mensagem-oi {
    color: var(--cor-texto-suave);
    font-size: 0.9rem;
    min-height: 1.4em;
}

/* ---------- Botão de tema (fixo, canto superior direito) ---------- */
#botao-tema {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 10;
    padding: 0.5rem 0.875rem;
    background-color: var(--cor-card);
    color: var(--cor-texto);
    border: 1px solid #e5e7eb;
    border-radius: 999px;
    font-family: inherit;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

#botao-tema:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* ---------- Campo de busca de projetos ---------- */
#busca-projetos {
    width: 100%;
    padding: 0.625rem var(--espaco-medio);
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.9rem;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

#busca-projetos:focus {
    outline: none;
    border-color: var(--cor-destaque);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

body.tema-escuro #busca-projetos {
    border-color: #334155;
}

/* Classe utilitária — JS adiciona para esconder qualquer elemento. */
.escondido { display: none; }

#sem-resultados {
    text-align: center;
    color: var(--cor-texto-suave);
    font-size: 0.9rem;
    padding: var(--espaco-medio) 0;
    font-style: italic;
}

/* ---------- Grid de cards de projeto ---------- */
.grid-projetos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem 1rem;
    grid-auto-rows: minmax(120px, auto);
}

.projeto-card {
    padding: var(--espaco-medio);
    background-color: var(--cor-fundo);
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    transition: transform 0.15s ease, box-shadow 0.15s ease,
                border-color 0.15s ease;
}

.projeto-card:hover {
    transform: translateY(-2px);
    border-color: var(--cor-destaque);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
}

.projeto-card h3 { font-size: 1rem; font-weight: 600; margin-bottom: var(--espaco-pequeno); }
.projeto-card p  { font-size: 0.875rem; color: var(--cor-texto-suave); }

.projeto-card.destaque {
    grid-column: span 2;
    background-color: var(--cor-card);
    border-color: var(--cor-destaque);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
}

.badge {
    display: inline-block;
    align-self: flex-start;
    padding: 0.125rem 0.5rem;
    margin-bottom: var(--espaco-pequeno);
    background-color: var(--cor-destaque);
    color: white;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 999px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

/* ---------- Cards de repo: extras (link no título + descrição cortada + meta) ---------- */
.projeto-card h3 a {
    color: var(--cor-texto);
    text-decoration: none;
}
.projeto-card h3 a:hover { color: var(--cor-destaque); }

.projeto-card .repo-desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.projeto-card .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 0.75rem;
    align-items: center;
    margin-top: var(--espaco-pequeno);
    font-size: 0.75rem;
    color: var(--cor-texto-suave);
}

.projeto-card .meta .estrela { color: #ca8a04; }

/* ---------- Skeleton de carregamento ---------- */
.repo-skeleton {
    min-height: 110px;
    border-radius: 10px;
    background: linear-gradient(90deg, #e5e7eb 25%, #f4f4f5 50%, #e5e7eb 75%);
    background-size: 200% 100%;
    animation: skeleton-pulse 1.5s ease-in-out infinite;
}

@keyframes skeleton-pulse {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

body.tema-escuro .repo-skeleton {
    background: linear-gradient(90deg, #1e293b 25%, #334155 50%, #1e293b 75%);
    background-size: 200% 100%;
}

/* ---------- Bloco de erro (catch do fetch) ---------- */
.repo-erro {
    grid-column: 1 / -1;
    padding: var(--espaco-medio);
    background-color: #fef2f2;
    border: 1px solid #fecaca;
    border-radius: 8px;
    color: #991b1b;
    font-size: 0.9rem;
}

.repo-erro strong { display: block; margin-bottom: 0.25rem; }

body.tema-escuro .repo-erro {
    background-color: #450a0a;
    border-color: #7f1d1d;
    color: #fecaca;
}

/* ---------- Estado vazio (todos filtrados) ---------- */
.repo-vazio {
    grid-column: 1 / -1;
    text-align: center;
    color: var(--cor-texto-suave);
    font-style: italic;
    padding: var(--espaco-medio) 0;
}

/* ---------- DESKTOP (≥ 768px) ---------- */
@media (min-width: 768px) {
    main {
        max-width: 760px;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "perfil   links"
            "projetos projetos"
            "repos    repos";
    }

    .perfil img { width: 160px; }
    h1 { font-size: 2rem; }
}

/* ---------- DARK MODE (controlado pela classe via JS) ---------- */
body.tema-escuro {
    --cor-fundo: #0f172a;
    --cor-texto: #f1f5f9;
    --cor-texto-suave: #94a3b8;
    --cor-card: #1e293b;
}

body.tema-escuro .links a    { border-color: #334155; }
body.tema-escuro #botao-tema { border-color: #334155; }
```

## `script.js`

```js
// ---------- Contador automático de projetos ----------
const cards = document.querySelectorAll('.projeto-card');
const tituloProjetos = document.querySelector('.projetos h2');
tituloProjetos.textContent = `Meus projetos (${cards.length})`;

// ---------- Botão "Mandar um oi" ----------
const botaoOi = document.querySelector('#botao-oi');
const mensagemOi = document.querySelector('#mensagem-oi');
let contagemOis = 0;

const aoClicarOi = () => {
    contagemOis = contagemOis + 1;
    mensagemOi.textContent = `Oi recebido! Você já mandou ${contagemOis}.`;
};

botaoOi.addEventListener('click', aoClicarOi);

// ---------- Botão de tema (claro/escuro) ----------
const botaoTema = document.querySelector('#botao-tema');

const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'escuro') {
    document.body.classList.add('tema-escuro');
    botaoTema.textContent = 'Modo claro';
}

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
    const termo = inputBusca.value.toLowerCase().trim();

    cards.forEach(card => {
        const titulo = card.querySelector('h3').textContent.toLowerCase();
        const descricao = card.querySelector('p').textContent.toLowerCase();
        const combina = titulo.includes(termo) || descricao.includes(termo);
        card.classList.toggle('escondido', !combina);
    });

    const visiveis = Array.from(cards).filter(card => {
        return !card.classList.contains('escondido');
    });
    tituloProjetos.textContent = `Meus projetos (${visiveis.length})`;
    semResultados.classList.toggle('escondido', visiveis.length > 0);
};

inputBusca.addEventListener('input', aoDigitar);

// ---------- Buscar e renderizar repos reais do GitHub ----------
const URL_REPOS = 'https://api.github.com/users/wenceslaubaltor/repos';
const LIMITE_REPOS = 6;
const listaRepos = document.querySelector('#lista-repos');

const formatadorRelativo = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' });

const formatarDataRelativa = (dataISO) => {
    const diffMs = new Date(dataISO) - new Date();
    const diffDias = Math.round(diffMs / (1000 * 60 * 60 * 24));

    if (Math.abs(diffDias) < 30)  return formatadorRelativo.format(diffDias, 'day');
    if (Math.abs(diffDias) < 365) return formatadorRelativo.format(Math.round(diffDias / 30), 'month');
    return formatadorRelativo.format(Math.round(diffDias / 365), 'year');
};

const repoParaCard = (repo) => {
    const descricao = repo.description || 'Sem descrição.';
    const linguagem = repo.language || '—';
    const dataRelativa = formatarDataRelativa(repo.updated_at);
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

        const visiveis = repos
            .filter(repo => !repo.fork)
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
            .slice(0, LIMITE_REPOS);

        if (visiveis.length === 0) {
            listaRepos.innerHTML = `<p class="repo-vazio">Nenhum repo público para mostrar ainda.</p>`;
            return;
        }

        listaRepos.innerHTML = visiveis.map(repoParaCard).join('');
    } catch (erro) {
        console.error('Falha ao buscar repos:', erro);
        listaRepos.innerHTML = `
            <div class="repo-erro">
                <strong>Não foi possível carregar os repos.</strong>
                ${erro.message}
            </div>
        `;
    }
};

carregarRepos();
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

## CSS — Grid

| Termo | Definição |
|-------|-----------|
| CSS Grid | Sistema de layout 2D (linhas + colunas simultâneas) |
| Grid container | Elemento com `display: grid` |
| Grid item | Filho direto de um grid container |
| Grid line | Linha invisível entre células, numerada de 1 a N+1 |
| `grid-template-columns` | Define quantas colunas e suas larguras |
| `grid-template-rows` | Define linhas **explicitamente** |
| `grid-auto-rows` | Define tamanho de linhas **automáticas** |
| `fr` | "Fração" do espaço livre (gap-aware) |
| `repeat(N, padrão)` | Atalho para repetir colunas/linhas |
| `minmax(min, max)` | Define limites de tamanho |
| `auto-fit` | Cria quantas colunas couberem, estica para preencher |
| `auto-fill` | Cria quantas couberem, mas mantém células vazias |
| `grid-column: span N` | Item ocupa N colunas a partir de onde estaria |
| `grid-row: span N` | Equivalente vertical |
| `grid-column: 1 / -1` | Da primeira à última coluna |
| `grid-template-areas` | Layout desenhado com strings de nomes |
| `grid-area: <nome>` | Atribui filho a uma área nomeada |
| `.` em areas | Célula vazia |

## CSS — interatividade

| Termo | Definição |
|-------|-----------|
| `:hover` | Pseudo-classe ativa quando o cursor está em cima |
| `:focus-visible` | Foco visível em navegação por teclado |
| `transition` | Anima a mudança entre estados |
| `transform` | Propriedade performática (GPU) para mover/escalar |
| `position: fixed` | Gruda o elemento em coordenadas da janela do navegador |
| `z-index` | Controla sobreposição entre elementos posicionados (maior = na frente) |

## JavaScript — fundamentos

| Termo | Definição |
|-------|-----------|
| `<script defer>` | Atributo que faz o JS rodar **após** o HTML ser parseado |
| `console.log(...)` | Imprime no DevTools Console; ferramenta primária de debug |
| `const` | Vínculo nome→valor imutável. **Default da comunidade** |
| `let` | Variável reatribuível. Use só quando precisa |
| Tipos primitivos | string, number, boolean (e null, undefined) |
| Template literal | `` `texto ${var} texto` `` — interpolação com crases |
| `===` | Igualdade estrita (valor E tipo). **Sempre prefira** a `==` |
| Arrow function | `(args) => { ... }` ou `(args) => expressao` |
| `if`/`else` | Controle de fluxo condicional |

## JavaScript — DOM

| Termo | Definição |
|-------|-----------|
| DOM | Árvore de objetos JS que representa o HTML |
| `document` | Objeto global, raiz do DOM |
| `querySelector(seletor)` | Primeiro elemento que casa (ou `null`) |
| `querySelectorAll(seletor)` | NodeList com todos que casam (tem `.length`, `forEach`) |
| `.textContent` | Lê/escreve o **texto** de um elemento |
| `.value` | Lê/escreve o valor de inputs/textareas |
| `element.querySelector(...)` | Idem, mas restrito ao escopo do elemento |
| `classList.add('x')` | Adiciona a classe |
| `classList.remove('x')` | Remove a classe |
| `classList.toggle('x')` | Liga/desliga; com 2º arg booleano força o estado |
| `classList.contains('x')` | Retorna `true`/`false` |

## JavaScript — eventos e funções

| Termo | Definição |
|-------|-----------|
| `addEventListener('evento', fn)` | Liga uma função à ocorrência do evento |
| Evento `'click'` | Disparado em clique do mouse / tap |
| Evento `'input'` | Disparado **a cada tecla** num campo de texto |
| Evento `'change'` | Disparado quando o campo **perde foco** após mudar |
| Função sem `()` | Passar como referência (handler) |
| Função com `()` | **Executar agora** |
| Escopo léxico | Variáveis fora da função permanecem acessíveis dentro |

## JavaScript — arrays e strings

| Termo | Definição |
|-------|-----------|
| Array | Lista ordenada (`[1, 2, 3]`), acessada por índice (`arr[0]`) |
| `.length` | Quantidade de itens |
| `.forEach(fn)` | Roda fn para cada item. Use para **efeitos colaterais** |
| `.filter(fn)` | Retorna array novo só com itens onde fn dá `true` |
| `.map(fn)` | Retorna array novo com cada item **transformado** por fn |
| `Array.from(nodeList)` | Converte NodeList em array de verdade |
| `[...nodeList]` | Equivalente moderno via spread |
| `.includes(x)` | Em string ou array: contém? |
| `.toLowerCase()` | String em minúsculas |
| `.trim()` | Remove espaços nas pontas |

## JavaScript — armazenamento

| Termo | Definição |
|-------|-----------|
| `localStorage.setItem('k', 'v')` | Salva (só strings, sobrescreve) |
| `localStorage.getItem('k')` | Lê (string ou `null`) |
| `localStorage.removeItem('k')` | Apaga uma chave |
| `localStorage.clear()` | Apaga todas as chaves do site |
| `JSON.stringify(obj)` | Converte objeto/array em string para salvar |
| `JSON.parse(str)` | Volta de string para objeto/array |
| Per-origin | Cada domínio tem sua própria gavetinha isolada |
| FOUC | "Flash of Unstyled Content" — instante de tema "errado" antes do JS aplicar |

## JavaScript — assíncrono (`fetch`, Promises, `async`/`await`)

| Termo | Definição |
|-------|-----------|
| `fetch(url)` | Faz requisição HTTP. Retorna uma **Promise** de `Response` |
| Promise | Objeto que representa um valor que **chegará no futuro** (resolve ou rejeita) |
| `.then(fn)` | Registra função pra rodar quando a Promise resolver; encadeável |
| `async function` | Marca a função como assíncrona. Sempre retorna uma Promise |
| `await` | Dentro de `async`: pausa e devolve o valor da Promise quando resolver |
| `try`/`catch`/`throw` | Bloco de tratamento de erro. `throw` interrompe e pula pro `catch` |
| `response.ok` | `true` se status HTTP é 2xx. **`fetch` não rejeita em 404/500** — precisa checar |
| `response.json()` | Parseia o corpo da resposta como JSON. Também é assíncrono |
| `response.status` | Código HTTP numérico (200, 404, 500, …) |
| `new Error(msg)` | Cria objeto de erro. `.message` é a string passada |
| `target="_blank" rel="noopener"` | Abre em nova aba sem dar acesso ao `window.opener` (segurança) |
| XSS via `innerHTML` | Vetor quando string vem de input não confiável. API do GitHub é segura |
| Rate limit | API limita requests. GitHub: 60/hora por IP sem auth |

## JavaScript — arrays (avançado)

| Termo | Definição |
|-------|-----------|
| `.sort((a, b) => …)` | Ordena. Devolve negativo (a antes), positivo (b antes), zero (mantém) |
| `.sort` muta o original | Único dos métodos clássicos que muta. Cuidado se quiser preservar |
| `.slice(início, fim)` | Devolve **fatia** sem mutar; aceita índices negativos |
| `.map(fn).join('')` | Padrão para gerar HTML em massa a partir de array de objetos |
| Encadeamento | `arr.filter().sort().slice().map()` lê-se como esteira de transformações |
| `new Date(str) - new Date(str)` | Diferença em ms (subtração de Date converte automaticamente) |

## JavaScript — internacionalização (`Intl`)

| Termo | Definição |
|-------|-----------|
| `Intl` | Namespace nativo do navegador para formatação consciente de idioma |
| `Intl.RelativeTimeFormat` | Formata datas relativas ("há 3 dias", "ontem") em qualquer locale |
| `numeric: 'auto'` | Ativa frases naturais: "ontem", "amanhã" em vez de "há 1 dia" |
| `Intl.NumberFormat` | Formata números, moedas, percentuais por locale |
| `Intl.DateTimeFormat` | Formata datas absolutas ("22 de junho de 2026") |

## CSS — animações

| Termo | Definição |
|-------|-----------|
| `@keyframes nome { … }` | Declara animação com estados em pontos do tempo (`0%`, `50%`, `100%`) |
| `animation` | Aplica uma `@keyframes` ao elemento (nome, duração, timing, iteração) |
| `infinite` | Loop infinito da animação |
| `ease-in-out` | Curva de tempo: começa devagar, acelera, desacelera |
| Truque do shimmer | `linear-gradient` + `background-size: 200%` + animar `background-position` |
| `-webkit-line-clamp` | Trunca texto após N linhas com `…`. Precisa do trio `display: -webkit-box`, `-webkit-box-orient: vertical`, `overflow: hidden` |
| `grid-column: 1 / -1` | Faz item ocupar todas as colunas do grid (da primeira à última) |

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
| **CSS clamp(), min(), max()** | Tipografia fluida sem precisar de tantas media queries |
| **Container queries** | Adapta layout pelo tamanho do container, não da viewport |
| **Acessibilidade ARIA** | Atributos extras para leitores de tela em UI complexa |
| **JS: `.reduce`** | Acumular valor a partir de array (somas, agrupamentos, objetos) |
| **JS: módulos (`import`/`export`)** | Dividir `script.js` em múltiplos arquivos com responsabilidade clara |
| **JS: Promise.all / Promise.race** | Disparar múltiplos `fetch` em paralelo e aguardar |
| **JS: `AbortController`** | Cancelar `fetch` em andamento (útil em buscas com debounce) |
| **TypeScript** | JavaScript com tipos verificados em tempo de desenvolvimento |
| **Build tools (Vite/esbuild)** | Bundle, minificação e dev server quando o projeto crescer |

## Recursos recomendados

- **MDN Web Docs** (https://developer.mozilla.org/) — referência canônica de HTML/CSS/JS
- **Flexbox Froggy** (https://flexboxfroggy.com/) — jogo para fixar Flexbox
- **Grid Garden** (https://cssgridgarden.com/) — mesmo conceito para CSS Grid
- **Can I Use** (https://caniuse.com/) — checa compatibilidade de features CSS/JS
- **JavaScript.info** (https://javascript.info/) — curso aberto, profundo, em pt-BR disponível
- **You Don't Know JS** (https://github.com/getify/You-Dont-Know-JS) — série gratuita sobre fundamentos

## Possíveis evoluções da página

- **Domínio próprio:** R$ 40/ano em registro.br por `.com.br`, aponta para GitHub Pages
- **Bio dinâmica:** buscar dados de `/users/wenceslaubaltor` (avatar, bio, contagem de followers) e injetar no card de perfil
- **Tema tri-estado:** claro / escuro / automático (segue SO) com 3 estados no botão
- **Eliminar FOUC:** script inline no `<head>` que aplica `tema-escuro` antes do `<body>` renderizar
- **Cache local dos repos:** salvar resposta em `localStorage` com timestamp; revalidar só após N minutos (reduz uso do rate limit)
- **Topic filter:** botões pra filtrar repos por `topics` (tags do GitHub) no estilo das pílulas do GitHub
- **Formulário de contato:** com serviços como Formspree (sem backend)
- **Análise:** GoatCounter ou Plausible (privacy-friendly, sem cookies)
- **PWA:** transformar em app instalável (manifest + service worker)
