const mkdir = require('fs').mkdirSync;
const exec = require('child_process').execSync;
const spawn = require('child_process').spawn;
const writeFile = require('fs').writeFileSync;

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
mkdir('./temp');

//Exectue server build
exec('webpack && cp build/server.js temp/');

//Create tasks.json file with mocked data
writeFileSync('tasks.json', JSON.stringify(mockedTasksFile));

//Exectue server
spawn('node temp/server.js');
