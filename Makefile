.PHONY: up build down logs bash dev prod

up:
	docker compose --profile dev up -d frontend-dev
	docker compose --profile dev logs -f frontend-dev

dev:
	docker compose --profile dev up -d frontend-dev
	docker compose --profile dev logs -f frontend-dev

prod:
	docker compose up -d frontend
	docker compose logs -f frontend

build:
	docker compose --profile dev build

down:
	docker compose --profile dev down
	docker compose down

logs:
	docker compose --profile dev logs -f

bash:
	docker compose --profile dev exec frontend-dev sh
