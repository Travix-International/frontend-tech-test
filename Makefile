VERSION=0.1.0
TARNAME=travix-todo-${VERSION}.tar

server:
	cd server
	npm install
	webpack
	cp -r node_modules build/

spa:
	webpack

tar:
	server
	spa
	mkdir -p artifacts
	rm -rf temp
	mkdir temp
	cp server/build/* temp/
	cp dist/* temp/
	cp package.json temp/
	cd temp && npm install --production
	cd temp && tar -cvf * ${TARNAME}

configure:
	npm install

all:
	tar

