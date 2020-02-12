import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Table from '../Layout/Table';
it('shows a component table', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(Table));
});
