.PHONY: up build down logs bash dev prod

up:
	docker compose --profile dev up frontend-dev

dev:
	docker compose --profile dev up frontend-dev

prod:
	docker compose up frontend

build:
	docker compose --profile dev build

down:
	docker compose --profile dev down
	docker compose down

logs:
	docker compose --profile dev logs -f

bash:
	docker compose --profile dev exec frontend-dev sh
