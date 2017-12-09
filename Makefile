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
	cd temp 
	tar -cvf * ${TARNAME}

all:
	tar