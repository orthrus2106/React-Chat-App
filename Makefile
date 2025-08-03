# install:
# 	make -C frontend install

# build:
# 	make -C frontend build

# start:
# 	make -C frontend start
# develop:
# 	make -C frontend dev & make start

# lint:
# 	make -C frontend lint
# deploy:
# 	make -C frontend build
# 	npx start-server -s ./frontend/dist

install:
	npm ci
	make -C frontend install

build:
	make install
	make -C frontend build

start:
	npx chat-server

develop:
	make -C frontend dev & make start

lint:
	make -C frontend lint

lint:
	make -C frontend lint