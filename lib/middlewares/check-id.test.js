const httpMocks = require("node-mocks-http");
const checkID = require("./check-id");
const dummyNext = f => f;
describe("Check ID middleware", () => {
  let request, response;

  beforeEach(function(done) {
    response = httpMocks.createResponse();
    done();
  });

  it("should send 400 response when no ID was given", () => {
    const request = httpMocks.createRequest({
      method: "GET",
      url: "/api/tasks",
    });

    checkID(request, response, dummyNext);
    expect(response.statusCode).toEqual(400);
  });

  it("should pass the given ID to locals", () => {
    const request = httpMocks.createRequest({
      method: "GET",
      url: "/api/tasks/12",
      params: {
        id: 12,
      },
    });

    checkID(request, response, dummyNext);
    expect(response.locals.id).toEqual(12);
  });
});
