install:
	cd frontend && npm ci

start:
	npx start-server -s ./frontend/dist

build:
	cd frontend && npm ci && npm run build

lint:
	cd frontend && npx eslint --ext js,jsx --config .eslintrc.yaml .
