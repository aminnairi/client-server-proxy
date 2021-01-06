.PHONY: start stop restart

start:
	docker-compose up --detach server
	docker-compose exec server npm install
	docker-compose exec server npm start

stop:
	docker-compose down --remove-orphans --volumes --timeout 0

restart: stop start
