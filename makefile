.PHONY: proxy client server stop

proxy:
	make --directory proxy start

client:
	make --directory client start

server:
	make --directory server start

stop:
	make --directory client stop
	make --directory server stop
	make --directory proxy stop
