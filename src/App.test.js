import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {render} from 'enzyme';
import Index from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter />, div);
  ReactDOM.unmountComponentAtNode(div);
});


