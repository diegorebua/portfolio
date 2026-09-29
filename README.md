# Portfolio

Portfólio estático de Diego Rebuá, feito com React, TypeScript e Vite. O site possui páginas de projetos, experiência, habilidades e contato. O deploy principal usa Cloudflare Workers com assets estáticos.

## Requisitos

- Node.js 22 e npm 10+
- Docker, apenas para testar ou publicar a versão servida por Nginx

## Desenvolvimento

```bash
npm ci --prefix frontend
npm run dev
```

O Vite abre em `http://localhost:3000`. Não são necessários banco de dados nem variáveis de ambiente para executar o site.

## Validação

```bash
npm run lint
npm run test
npm run typecheck
npm run build
```

Os testes verificam as rotas e os arquivos de mídia referenciados pelo portfólio. O CI executa essas verificações, audita secrets e compila a imagem Docker em cada pull request e push para `main`.

## Deploy

Para publicar na Cloudflare com a configuração em `frontend/wrangler.jsonc`:

```bash
npm run deploy
```

Para construir e servir a versão Nginx a partir da raiz:

```bash
docker build -t portfolio-web .
docker run --rm -p 8080:80 portfolio-web
```

O site ficará em `http://localhost:8080`. Também é possível usar `docker compose --profile prod up --build` para o Dockerfile em `frontend/`.
