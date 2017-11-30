var request = require("supertest");

describe("loading express", function () {
  var server;

  before(function () {
    server = require("./server");
  });

  after(function () {
    server.close();
  });

  it("get all tasks", (done) => {
    request(server)
      .get("/tasks")
      .expect(200, done);
  });

  it("404 everything else", (done) => {
    request(server)
      .get("/foo/bar")
      .expect(404, done);
  });

  it("create task", (done) => {
    request(server)
      .post("/task/create/title/description")
      .expect(201, done);
  });

  it("update task", (done) => {
    request(server)
      .put("/task/update/1/new_title/new_description")
      .expect(200, done);
  });

  it("update not exist task", (done) => {
    request(server)
      .put("/task/update/-1/new_title/new_description")
      .expect(404, done);
  });

  it("update task with bad id", (done) => {
    request(server)
      .put("/task/update/asd/new_title/new_description")
      .expect(400, done);
  });

  it("get task", (done) => {
    request(server)
      .get("/task/1")
      .expect(200, done);
  });

  it("get task with incorrect id", (done) => {
    request(server)
      .get("/task/a")
      .expect(400, done);
  });

  it("get task with not exist id", (done) => {
    request(server)
      .get("/task/-1")
      .expect(404, done);
  });

  it("delete task", (done) => {
    request(server)
      .delete("/task/delete/1")
      .expect(200, done);
  });

  it("delete not exist task", (done) => {
    request(server)
      .delete("/task/delete/1")
      .expect(404, done);
  });

  it("delete task with incorrect id", (done) => {
    request(server)
      .delete("/task/delete/asd")
      .expect(400, done);
  });
});