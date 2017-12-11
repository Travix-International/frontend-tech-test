Set VERSION=0.1.0
Set TARNAME=travix-todo-%VERSION%.tar

CALL npm install

:: Configure and Build server
cd server 
CALL node ../node_modules\webpack\bin\webpack.js

:: Configure and Build app
cd .. 
CALL node node_modules\webpack\bin\webpack.js

:: Create Artifact
if not exist "artifacts" mkdir artifacts
if exist "temp" rmdir /s /q temp
md temp\public
copy server\build\server.js temp\
xcopy /s dist\* temp\public\
copy package.json temp\
cd temp 
CALL npm install --production
if exist "package.json" del package.json
cd ..
if not exist "artifacts\%TARNAME%" mkdir artifacts\%TARNAME%
xcopy /s /y temp\* artifacts\%TARNAME%
rmdir /s /q temp