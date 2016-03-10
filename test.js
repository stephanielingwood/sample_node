var superagent = require("superagent"),
    chai = require("chai"),
    expect = chai.expect,
    should = require("should");

describe("Index", function () {
  it("renders HTML", function (done) {
    superagent.get("http://localhost:3000/")
      .end(function (e, res) {
        (e === null).should.equal(true);
        res.text.should.equal("Hey buddy!");
        done();
      });
  });
});

describe('testFile', function () {
  it ('returns the right string', function (done) {
    superagent.get('http://localhost:3000/testFile')
      .end(function (e, res) {
        (e === null).should.equal(true);
        res.text.should.equal('myString plus some text');
        done();
      });
  });
});


describe('testFileComponent', function () {
  it ('returns the right string from component', function (done) {
    superagent.get('http://localhost:3000/testFileComponent')
      .end(function (e, res) {
        (e === null).should.equal(true);
        res.text.should.equal('moreString plus some additional text');
        done();
      });
  });
});
