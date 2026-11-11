# Testes visuais

A suíte usa Playwright/Chromium fixado na versão do `frontend/package.json`.
Todos os comandos abaixo são executados **na raiz do repositório**.
Docker deve estar iniciado. O runner usa Linux/amd64 na imagem oficial
`mcr.microsoft.com/playwright:v1.65.0-noble`, inclusive no Mac, para reproduzir o CI.
A primeira execução baixa a imagem; as seguintes ainda executam `npm ci` em um
volume isolado, sem substituir o `node_modules` do host. Nenhuma porta é exposta.

## Cobertura

- Início, Sobre, Stack, Projetos, Trajetória e Contato.
- Mobile 390×844, tablet 768×1024, desktop 1440×900 e 1920×1080.
- Página completa, menu aberto e segunda imagem da galeria: 32 capturas.
- Overflow horizontal da página e dos elementos, alinhamento dos containers,
  texto cortado, sobreposição na stack e altura/conteúdo da Hero.
- Menu em tela cheia, scroll bloqueado, Tab, Escape e restauração do foco.
- Quatro testes adicionais exercitam scroll reveal e menu com movimento ativo.
- `hero.spec.ts` verifica nome e descrição na primeira viewport e altura fullscreen
  nas quatro resoluções; testa ainda 320×568, 375×667, 568×320 e 844×390 no
  projeto mobile. As repetições compactas nos outros projetos são ignoradas.
  Essas capturas auxiliares não são baselines e não ampliam o conjunto de 32 PNGs.

A comparação usa `toHaveScreenshot`, tolerância de cor de 0,1 e **zero pixels
diferentes permitidos**. Não aumentar tolerâncias para encobrir regressões.
As verificações geométricas admitem 1px de arredondamento subpixel.
Os testes não garantem a identificação de toda sobreposição possível; a
comparação visual complementa essas verificações.

## Primeiro uso: capturar, revisar e aprovar

**O layout atual não é considerado correto por padrão.** A revisão inicial e
sua autorização são registradas em `VALIDATION.md`. Quando uma referência estiver
ausente, a comparação e o CI falham; nenhuma imagem é aprovada automaticamente.

```bash
npm ci --prefix frontend
npm run visual:review
```

Abra `frontend/visual-review/index.html` e revise **todas as 32 imagens em tamanho
original**, incluindo alinhamentos, recortes, proporções, conteúdo, menu e footer.
Capturas ficam em `visual-review/`; não são utilizadas como referência oficial.
O relatório exibe o SHA-256 do manifesto do conjunto. Compartilhe o relatório e
as imagens com o responsável pela aprovação visual. Somente depois dessa
aprovação explícita execute:

```bash
npm run visual:approve -- --approved SHA256_DO_MANIFESTO_REVISADO
npm run test:visual
```

O comando de aprovação copia exatamente as imagens revisadas; **não recaptura**
a página. Ele verifica o hash de cada arquivo, a versão, o ambiente e o conjunto
completo antes de escrever. Imagens alteradas, revisão incompleta e hash incorreto
são rejeitados. O argumento declara que houve revisão visual explicitamente
autorizada; não a substitui. A revisão pode ser feita pelo usuário ou por um
agente ao qual o usuário delegou expressamente a inspeção e geração dos
baselines após validação. Registre a autorização, análise e hash em `VALIDATION.md`.
Não execute esse comando automaticamente, nem por sugestão de um teste falho.
O CI não pode executar a aprovação.

Commitar `frontend/tests/visual/baselines/`, incluindo `approvals.json`, junto com
a mudança aprovada. O manifesto registra hashes e data; a aprovação/revisor deve
ser registrado na descrição do PR. Não editar `approvals.json` manualmente.

## Desenvolvimento

Depois de qualquer mudança em CSS, componentes, fontes ou responsividade:

```bash
npm run test:visual
npm run visual:report
```

O relatório HTML inclui esperado, atual, diferença visual e traces nas falhas.
`test-results/` contém anexos. Os artefatos são descartáveis e ignorados pelo Git.
Para filtrar uma investigação:

```bash
npm run test:visual -- --project=mobile-390 --grep 'sobre: page'
```

Uma falha exige investigar o diff. Corrija regressões no código. Se a mudança for
intencional, faça uma nova revisão completa com `visual:review`, obtenha aprovação
e promova o novo conjunto com o hash correspondente. **Nunca atualize baselines
apenas para o teste passar.** `--update-snapshots` é bloqueado, e snapshots ausentes
não são escritos pela execução normal (`updateSnapshots: 'none'`).

Para revisar o relatório capturado remotamente, baixe o artefato completo antes de
abrir o HTML. Não compare imagens de macOS/Windows diretamente com Linux.

## Estabilidade e manutenção

- Testes usam o build de produção em uma porta isolada (4173), sem reutilizar
  servidores de desenvolvimento. O servidor é encerrado pelo Playwright.
- Fontes do site são servidas por fixtures locais licenciadas (OFL), sem
  dependência do Google Fonts durante os testes. Não alteram a aplicação.
- O ano do footer é fixado em 2026; locale, timezone, tema e escala também são
  fixos. Atualizar esses parâmetros exige nova revisão, não atualização automática.
- Screenshots usam movimento reduzido e aguardam fontes e imagens, incluindo
  imagens lazy. As animações são verificadas separadamente com movimento ativo.
- Ao alterar o carregamento de fontes de produção, atualizar as fixtures de teste
  para refletir a mudança e solicitar nova aprovação visual.
- Ao adicionar uma página ou estado, adicionar a cobertura em `site.spec.ts` e
  atualizar a lista esperada no comando de aprovação e a contagem no relatório.
- Ao atualizar Playwright, atualizar a versão exata no pacote/lockfile e a imagem
  no workflow CI. O runner local deriva a tag do pacote. Rever os baselines após
  mudanças de navegador/ambiente, sem substituir os antigos automaticamente.

## Verificar as proteções de aprovação

```bash
npm run test:visual:workflow
```

Esses seis testes usam imagens sintéticas em diretórios temporários. Verificam
recusa de aprovação ausente, hash incorreto, imagens alteradas, conjunto
incompleto, ambiente incompatível e execução pelo CI. Não aprovam o layout do site.

## CI

O job `Visual regression` executa em pull requests e pushes para `main` e nunca
cria/atualiza baselines. Falhas bloqueiam esse job e publicam
`visual-regression-report` por 14 dias, com HTML, screenshots e traces. Configure
esse job como obrigatório nas regras da branch para bloquear merges; o workflow
por si só não altera as configurações de proteção do GitHub.

## Referências

- https://playwright.dev/docs/test-snapshots
- https://playwright.dev/docs/docker
