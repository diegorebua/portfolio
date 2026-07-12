.PHONY: up build down logs bash

up:
	docker compose up -d

build:
	docker compose build

down:
	docker compose down

logs:
	docker compose logs -f

bash:
	docker compose exec frontend sh
