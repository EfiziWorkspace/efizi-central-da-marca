# Template de apresentação · Efizi

Modelo base pro time montar apresentações na cara da marca (Manrope, laranja Efizi,
creme, calibrado pra TV 1920×1080). Roda no navegador, sem PowerPoint.

## Arquivos
- **`index.html`** — o template. 17 moldes de slide prontos (3 capas + conteúdo + fecho).
- **`banco.html`** — galeria das 18 fotos do banco. Clique no nome do arquivo pra copiar o caminho.
- **`img/banco/`** — as 18 fotos, no padrão da marca (institucional golden / claro, 16:9).

## Como montar a sua
1. **Duplique a pasta inteira** (ex.: `apresentacao-template/` → `minha-apresentacao/`).
   Copiando a pasta toda, o banco de fotos vai junto.
2. Abra `index.html` e leia o guia no topo (comentário grande).
3. Cada `<section class="slide">` é um molde. **Copie o bloco que precisa, cole na ordem
   certa, troque o texto.** Apague os moldes que não usar (a numeração se ajusta sozinha).
4. **Fotos**: capa, aberturas e contracapa precisam de imagem. Abra `banco.html`, escolha,
   copie o caminho e cole no `src`. Padrão obrigatório: golden/claro, pessoas reais, fora
   da rede. Nada de look "varejo" laranja em slide.

## Apresentar
`F` tela cheia · `← →` navegar · `N` notas do apresentador · `R` reset ·
`Cmd/Ctrl+P` → salvar PDF (1 slide por página).

## Precisa de foto nova?
Gere no mesmo padrão (ver `dna/06-PHOTOGRAPHY-DIRECTION.md`), salve em `img/banco/`
com nome `bNN-assunto.jpg` e acrescente uma linha no array `BANCO` do `banco.html`.
