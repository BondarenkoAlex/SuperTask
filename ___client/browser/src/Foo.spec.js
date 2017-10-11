import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import Foo from '../../../../src/client/browser/src/dir/Foo';

describe('A suite', function () {
  it('contains spec with an expectation', function () {
    expect(shallow(<Foo />).contains(<div className="foo" />)).to.equal(true);
  });

  it('contains spec with an expectation', function () {
    expect(shallow(<Foo />).is('.foo')).to.equal(true);
  });

  it('contains spec with an expectation', function () {
    expect(mount(<Foo />).find('.foo').length).to.equal(1);
  });

  it('can run an expectation with render', function () {
    expect(render(<Foo />).find('.foo').length).to.equal(1);
  });
});
