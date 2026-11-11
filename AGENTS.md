# Instruções do projeto

## Layout e identidade visual

- A aplicação React/TypeScript fica em `frontend/`. Use a stack existente.
- Centralize containers, grids, escala tipográfica e espaçamentos em
  `frontend/src/styles/layout.css`. O visual dos componentes e as animações ficam
  em `frontend/src/index.css`. Evite ajustes repetidos por página.
- Preserve cores, tipografia, proporções das imagens, menu circular e scroll
  reveal. Use os breakpoints compartilhados de 40rem e 64rem.
- A Hero tem altura mínima da viewport descontando o header e pode crescer com
  o conteúdo. As demais seções acompanham seu conteúdo.

## Testes e validação visual opcionais

Alterações no projeto não exigem executar testes, capturas ou validações visuais
com Playwright. Use essas ferramentas quando solicitado pelo usuário ou quando
forem úteis para investigar um problema específico.

Comandos disponíveis, executados na raiz com o Docker iniciado:

- `npm run visual:review`: gera capturas para revisão.
- `npm run test:visual`: compara com os baselines aprovados.
- `npm run visual:report`: abre o relatório da comparação.

O runner usa a imagem oficial do Playwright fixada no pacote, em Linux/amd64,
como o CI. O procedimento detalhado está no guia de testes visuais.

## Autorização e registro dos baselines

- Capturas atuais não são corretas por definição. Baselines só podem ser criados
  ou atualizados após inspeção visual explícita e autorização para essa mudança.
- O usuário pode delegar expressamente a um agente a análise e a geração dos
  baselines após validação. Nesse caso, cumpra a inspeção e registre a evidência;
  não solicite novamente uma aprovação já delegada. Sem essa delegação, apresente
  o conjunto revisável ao usuário antes de promovê-lo.
- Quando houver uma revisão de baselines solicitada, registre a análise e as
  correções em `frontend/tests/visual/VALIDATION.md`,
  incluindo resoluções, páginas, responsável pela inspeção, autorização,
  SHA-256 do manifesto e resultado da comparação final.
- Versione os PNGs em `frontend/tests/visual/baselines/` e `approvals.json` junto
  da mudança aprovada. Não altere manualmente hashes para aprovar diferenças.
  Relatórios e capturas de trabalho permanecem ignorados pelo Git.
- O CI só compara, não aprova nem atualiza referências. Manter sua imagem do
  Playwright alinhada à versão exata em `frontend/package.json`.

Guia completo: `frontend/tests/visual/README.md`.
