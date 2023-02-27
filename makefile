SHELL := /bin/bash
include .env
export

run-dev:
	docker-compose -f docker-compose.dev.yml up