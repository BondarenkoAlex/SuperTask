import '../../setupTests';
// import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import App from '../../../src/components/common/CkeckIcon/index.jsx';

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.length(1);
  });

  // it('contains spec with an expectation', () => {
  //   expect(shallow(<Foo />).is('.foo')).to.equal(true);
  // });
  //
  // it('contains spec with an expectation', () => {
  //   expect(mount(<Foo />).find('.foo').length).to.equal(1);
  // });
  //
  // it('can run an expectation with render', () => {
  //   expect(render(<Foo />).find('.foo').length).to.equal(1);
  // });
});
