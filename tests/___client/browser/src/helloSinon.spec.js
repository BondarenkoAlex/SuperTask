import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import helloSinon from '../../../../src/client/browser/src/dir/helloSinon.js';

chai.should();
chai.use(sinonChai);

describe('hello sinon', function () {
  it('should call callback with correct greeting', function () {
    var cb = sinon.spy();

    helloSinon('foo', cb);

    cb.should.have.been.calledWith('hello foo');
  });
});
