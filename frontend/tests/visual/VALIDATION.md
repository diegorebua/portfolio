# Registro de validação visual — 2026-11-11

Responsável pela inspeção: Codex, por autorização expressa do usuário para
validar screenshots, corrigir problemas, repetir os testes e gerar baselines
após a validação. Não foi uma aprovação automática do layout anterior.

## Ambiente e cobertura

Playwright 1.65.0, Chromium da imagem oficial `v1.65.0-noble`, Linux/amd64,
fontes locais fixadas, tema escuro, pt-BR, America/Sao_Paulo, escala 1.
Screenshots com movimento reduzido; animações exercitadas separadamente.

| Projeto | Viewport | Páginas e estados inspecionados |
| --- | --- | --- |
| mobile-390 | 390×844 | 6 páginas, menu aberto, segunda imagem da galeria |
| tablet-768 | 768×1024 | 6 páginas, menu aberto, segunda imagem da galeria |
| desktop-1440 | 1440×900 | 6 páginas, menu aberto, segunda imagem da galeria |
| desktop-1920 | 1920×1080 | 6 páginas, menu aberto, segunda imagem da galeria |

Foram abertas e analisadas as 32 imagens da primeira rodada. Após as correções,
as capturas de Contato e da galeria foram analisadas novamente nas quatro
resoluções. As demais páginas e estados mantêm a composição inspecionada;
a rodada completa de testes foi repetida antes da promoção.

## Análise por página

| Página/estado | Resultado da inspeção |
| --- | --- |
| Início | Hero ocupa a primeira tela; nome legível sobre o fade mobile; rosto visível; projetos e footer dentro do container; duas colunas no desktop e uma no mobile/tablet. |
| Sobre | Foto em 3:4 sem distorção; conteúdo em coluna no mobile/tablet e duas no desktop; princípios e parágrafos legíveis. |
| Stack | Ícones, nomes e funções sem sobreposição; uma coluna no mobile e agrupamento em duas colunas quando há espaço. |
| Projetos | Previews proporcionais, descrições sem cortes, tags e miniaturas quebram linha no mobile. O recorte superior das capturas nos previews é intencional. |
| Trajetória | Períodos e cargos bem separados no mobile; colunas alinhadas no desktop; listas dentro dos limites. |
| Contato | Corrigidos quebra desnecessária do título em 1920px e desalinhamento da linha de redes em tablet/desktop. E-mail e controles cabem no mobile. |
| Menu | Tela inteira, X acessível, links visíveis, indicação de página atual; Tab/Escape, restauração do foco e bloqueio de scroll aprovados. |
| Galeria | Segunda imagem selecionada corretamente; corrigido artefato da captura que colocava o header sticky no meio do screenshot. |

## Correções realizadas antes dos baselines

1. `--heading-width` passou de 58.75rem para 64rem no sistema compartilhado.
   Em 1920px, a tipografia crescia até o máximo enquanto o container de título
   permanecia estreito, fazendo “Vamos conversar.” quebrar apesar de caber em
   uma linha numa tela menor. A largura adicional preserva as margens e a escala.
2. `.contact-bottom` usa alinhamento central na disposição horizontal. O
   alinhamento inferior anterior deslocava o texto em relação aos links de 44px.
3. A captura de página completa volta ao topo e remove hover incidental antes
   de fotografar. O clique de Playwright na galeria rolava a página e o header
   sticky era fotografado nessa posição intermediária. Nenhum header foi
   escondido, mascarado ou removido do produto/teste.
4. As verificações geométricas agora detectam títulos inesperadamente quebrados
   no desktop e desalinhamento da linha de redes. Tolerâncias visuais preservadas.

A identidade visual e as animações foram preservadas. Não houve mudança
arbitrária de conteúdo ou redesenho das páginas.

## Evidência e execução

- Primeira rodada: 36 testes aprovados no modo revisão, com 32 capturas.
- Rodada após correções: 36 testes aprovados no modo revisão, com 32 capturas.
- Lint, typecheck, 7 testes de aplicação e 6 testes do fluxo de aprovação passaram.
- Comparação final após promoção: `npm run test:visual` — 36 testes aprovados
  (32 comparações de screenshots e 4 testes de movimento), sem diferenças
  visuais inesperadas. Nenhum baseline foi alterado pela execução de comparação.

Manifesto revisado e autorizado para promoção:

`19ec6e4ecee68c94bafc43974825166b7e36b5ff8ed5f9b1cb9d7b1b48ce9113`

Os arquivos promovidos e seus hashes estão em `baselines/approvals.json`.
As capturas revisáveis ficam em `frontend/visual-review/index.html`; o relatório
da comparação fica em `frontend/playwright-report/index.html` (artefatos locais).
O procedimento obrigatório está no `AGENTS.md` da raiz e no README desta pasta.

Esta validação cobre Chromium nas viewports emuladas acima; não substitui uma
verificação em aparelhos físicos ou em Safari/Firefox quando isso for exigido.

## Revisão posterior da Hero — baselines preservados

Pedido posterior do usuário em 2026-11-11: corrigir a Hero desktop/mobile,
manter fullscreen e validar com Playwright, **sem alterar baselines nesta etapa**.
Essa restrição prevalece sobre a autorização anterior de promoção.

Causas identificadas: a imagem em fluxo participava do tamanho intrínseco do
grid mobile; a sobreposição dependia de margem negativa. No desktop, o texto
ficava no topo da altura mínima enquanto a foto se alinhava à viewport inteira,
fora das bordas do container, deixando espaços vazios desequilibrados.

Correções: foto decorativa posicionada fora do fluxo, uma única camada de conteúdo
responsável pela altura da Hero, texto centralizado verticalmente no desktop e
ancorado na base com padding no mobile, foto alinhada ao container no desktop.
Tipografia e espaçamentos da Hero consideram também `svh` para telas baixas.
O degradê integra as bordas da foto ao fundo; a proporção da imagem é preservada.

Cobertura adicional: nome e descrição totalmente dentro da primeira viewport,
Hero ocupando a altura disponível, mobile compacto 320×568 e 375×667 e orientação
horizontal 568×320 e 844×390, além das quatro resoluções oficiais.

Inspeção final realizada nas oito viewports: nome e descrição visíveis na
primeira tela; foto com rosto preservado, sem bordas abruptas, e composição
centrada no desktop. `visual:review`: 44 testes aprovados e 12 repetições
compactas ignoradas nos projetos não mobile. A comparação com referências
anteriores terminou com 40 testes aprovados, 12 ignorados e 4 diferenças
esperadas em `home.png` (uma por resolução). Os diffs foram inspecionados e
estão restritos à Hero; as demais páginas, menu e galeria passaram. Os 34 arquivos do diretório de baselines, incluindo
32 PNGs e o manifesto de aprovação, foram verificados por SHA-256 e permanecem
intactos. Diferenças intencionais da Home não serão promovidas nesta etapa.
