install:
	make -C frontend install

build:
	make -C frontend build

start:
	make -C frontend start
develop:
	make -C frontend dev & make start

lint:
	make -C frontend lint
