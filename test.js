var superagent = require("superagent"),
    chai = require("chai"),
    expect = chai.expect,
    should = require("should");

var memClient = require('./index').memClient;

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

describe('Memcached set', function () {
  it('sets, then gets data in memcached',
    function (done) {
      memClient.set('foo', 'bar');
      memClient.get('foo',
        function (err, value, key) {
          console.log(value.toString());
          value.toString().should.equal('bar');
          done();
        }
      );
    }
  );
});
