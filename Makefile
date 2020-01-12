npm_install:
	docker-compose run table		npm install
	docker-compose run table		npm install grpc
	docker-compose run gateway		npm install
	docker-compose run gateway		npm install grpc
