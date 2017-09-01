var assert = require('assert');
var express = require('express');
var status = require('http-status');
var superagent = require('superagent');
var app = require('./../app');

var URL_ROOT = 'http://localhost:9002';
 
describe('Should be able to test api', () => {

  var server;

  before(function() {
      server = app().listen(9002);
  });

  after(( done ) =>  {
    // Shutdown the server down when done
    server.close();
    done()
  });

  describe('Testting Server Api ', () => {

    it('Checking is tasks are empty', ( done ) =>  {

      superagent.get(URL_ROOT + "/tasks", (error, res) => {
        assert.equal(res.status, 200);
        var response;
        assert.doesNotThrow(() => {
          response = res.body
        });

        assert(Array.isArray(response.tasks), 'Tasks is not Array');
        assert.equal(response.tasks.length, 0);

        done()
      })  

    });  

    it('Create Task 0', ( done ) =>  {

      superagent.post(URL_ROOT + "/task/create/task/task description", (error, res) => {
        assert.equal(res.status, 201);
        var response;
        assert.doesNotThrow(() => {
          response = res.body
        });

        assert.equal(response.message, "Resource created");

        done()
      })  

    });

    it('Get Task 0', ( done ) =>  {

      superagent.get(URL_ROOT + "/task/0", (error, res) => {
        assert.equal(res.status, 200);
        var response;
        assert.doesNotThrow(() => {
          response = res.body
        });

        assert.equal(response.task.id, 0);
        assert.equal(response.task.title, "task");
        assert.equal(response.task.description, "task description");

        done()
      })  

    }); 

    it('Update Task 0', ( done ) =>  {

      superagent.put(URL_ROOT + "/task/update/0/title updated/description updated", (error, res) => {
        assert.equal(res.status, 204);
        done()
      })  

    });  

    it('Checking if was updated Task 0', ( done ) =>  {

      superagent.get(URL_ROOT + "/task/0", (error, res) => {
        assert.equal(res.status, 200);
        var response;
        assert.doesNotThrow(() => {
          response = res.body
        });

        assert.equal(response.task.id, 0);
        assert.equal(response.task.title, "title updated");
        assert.equal(response.task.description, "description updated");

        done()
      })  

    }); 

    it('Deletting Task 0', ( done ) =>  {

      superagent.delete(URL_ROOT + "/task/delete/0", (error, res) => {
        assert.equal(res.status, 200);
        var response;
        assert.doesNotThrow(() => {
          response = res.body
        });

        assert.equal(response.message, "Updated successfully");

        done()
      })  

    });

    it('Checking is tasks are empty', ( done ) =>  {

      superagent.get(URL_ROOT + "/tasks", (error, res) => {
        assert.equal(res.status, 200);
        var response;
        assert.doesNotThrow(() => {
          response = res.body
        });

        assert(Array.isArray(response.tasks), 'Tasks is not Array');
        assert.equal(response.tasks.length, 0);

        done()
      })  

    });


  });  

});