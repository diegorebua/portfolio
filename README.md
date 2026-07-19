# Portfolio

## Sobre o Projeto
Este repositorio contem o codigo-fonte de um portfolio. Ele foi desenvolvido com o objetivo de apresentar projetos e habilidades de forma clara e objetiva.

## Tecnologias Utilizadas
O projeto utiliza um conjunto de tecnologias voltado para o desenvolvimento de interfaces web:
- **Vue 3**: Framework para construcao de interfaces de usuario.
- **Vite**: Ferramenta de construcao para projetos web.
- **TypeScript**: Adiciona tipagem estatica ao JavaScript.
- **Tailwind CSS**: Framework CSS para estilizacao.
- **Docker**: Ferramenta de conteinerizacao.

## Estrutura do Projeto
- `frontend/`: Contem o codigo-fonte da aplicacao.
- `docker-compose.yml` e `Dockerfile`: Configuracoes do Docker.
- `Makefile`: Comandos para facilitar o desenvolvimento.

## Como Executar Localmente

### Pre-requisitos
- Node.js
- npm
- Docker e Docker Compose (opcional)

### Usando Node.js
1. Acesse o diretorio do frontend:
   ```bash
   cd frontend
   ```
2. Instale as dependencias:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

### Usando Docker
Na raiz do projeto, execute:
```bash
docker-compose up --build
```
