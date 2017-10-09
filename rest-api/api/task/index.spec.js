import { assert, expect } from "chai";
import httpMocks from "node-mocks-http";
import proxyquire from "proxyquire";

const task = proxyquire.noCallThru().load("./", {
  "../../schemas/Todo": {
    getAll: () => new Promise((resolve) => resolve([]))
  }
}).default;

function buildResponse () {
  return httpMocks.createResponse({ eventEmitter: require("events").EventEmitter });
}

describe("Route: GET /", () => {
  it("Should return response status 200", (done) => {
    const response = buildResponse();
    const request  = httpMocks.createRequest({
      method: "GET",
      url: "/"
    });
    console.log(request, response);
    response.on("end", function () {
      expect(response.statusCode).to.be.equal(200);

      done();
    });

    task.handle(request, response);
  });
});
