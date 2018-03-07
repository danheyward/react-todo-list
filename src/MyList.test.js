import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
