VERSION=0.1.0
TARNAME=travix-todo-${VERSION}.tar

all: configure srv spa tar

configure:
	npm install

srv:
	cd server && webpack

spa:
	webpack

tar:
	mkdir -p artifacts
	rm -rf temp
	mkdir -p temp/public
	cp server/build/server.js temp/
	cp -r dist/* temp/public/
	cp package.json temp/
	cd temp && npm install --production
	cd temp && rm package.json
	cd temp && tar -cvf ${TARNAME} *
	mv temp/travix-todo-${VERSION}.tar artifacts
	rm -rf temp