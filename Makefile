.PHONY: up build down logs bash dev

up:
	docker compose up -d

dev:
	docker compose --profile dev up -d

build:
	docker compose build

down:
	docker compose down

logs:
	docker compose logs -f

bash:
	docker compose exec frontend sh
