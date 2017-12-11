const mkdir = require('fs').mkdirSync;
const exists = require('fs').existsSync;
const exec = require('child_process').execSync;
const execAsync = require('child_process').exec;
const spawn = require('child_process').spawn;
const writeFile = require('fs').writeFileSync;
const readFile = require('fs').readFileSync;
const copy = require('copy');

const mockedTasksFile = {
	"tasks": [
		{
			"completed": false,
			"description": "Description 1",
			"tags": [],
			"title":"Title 1",
			"id": 1
		},
		{
			"completed": true,
			"description": "Description 2",
			"tags": ["Home"],
			"title": "Title 2",
			"id": 2
		}
	]
}

//Create temp directory to spawn server
if (!exists('./temp')) {
	mkdir('./temp');
}

//Exectue server build
exec('cd .. && webpack');

//Copy server
writeFile('./temp/server.js', readFile('../build/server.js'));

//Create tasks.json file with mocked data
writeFile('temp/tasks.json', JSON.stringify(mockedTasksFile));

//Exectue server
execAsync('node temp/server.js');

//Run Tests
let result = exec('mocha **/*.js');

if (Buffer.isBuffer(result)) {
	result = result.toString();
}

//Print Result
console.log(result);

//Finish Process
process.exit()