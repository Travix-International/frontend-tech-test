//Require the dev-dependencies 
const chai = require('chai'); 
const should = chai.should(); 
const Client = require('node-rest-client').Client;
const client = new Client();

const mockedTasksFile = {
	
		0: {
			"_id": 0,
			"completed": false,
			"description": "Description 1",
			"tags": [],
			"title":"Title 1",
			"id": 1
		},
		1: {
			"_id": 1,
			"completed": true,
			"description": "Description 2",
			"tags": ["Home"],
			"title": "Title 2",
			"id": 2
		}
}

describe('TODO', () => { 

  describe('/GET tasks', () => { 

    it('it should GET all the TODOS', (done) => { 

      client.get("http://localhost:9001/task", function (data, response) {
        chai.expect(data.response.data).to.deep.equal(mockedTasksFile);
        done(); 
      });

    }); 
    
  }); 

});