.PHONY: proxy client server database stop

proxy:
	make --directory proxy start

client:
	make --directory client start

server:
	make --directory server start

database:
	make --directory database start

stop:
	make --directory client stop
	make --directory server stop
	make --directory database stop
	make --directory proxy stop
