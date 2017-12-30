class MockSuperagent {
  constructor() {
    this.isSetToFailed = false;
  }

  then(cb) {
    if (!this.isSetToFailed) {
      cb(this.mockResponse);
    }
    return this;
  }

  post() {
    return this;
  }

  send() {
    return this;
  }

  delete() {
    return this;
  }

  setMockResponse(m) {
    this.mockResponse = m;
  }

  catch(cb) {
    if (this.isSetToFailed) {
      cb(this.isSetToFailed);
    }
    return this;
  }

  setToFailed(failed) {
    this.isSetToFailed = failed;
  }
}

export default MockSuperagent;
