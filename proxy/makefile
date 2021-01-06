.PHONY: start stop restart

start:
	docker-compose up --detach proxy

stop:
	docker-compose down --remove-orphans --volumes --timeout 0

restart: stop start
