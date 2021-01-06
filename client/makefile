.PHONY: start stop restart

start:
	docker-compose up --detach client
	docker-compose exec client npm install
	docker-compose exec client npm start

stop:
	docker-compose down --remove-orphans --volumes --timeout 0

restart: stop start
