import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from './App';

const mockStore = configureMockStore();
const store = mockStore({});

describe('App Component', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(
        <Provider store={store}>
          <App />
        </Provider>
      ).exists(<h1>Test page</h1>)
    ).toBe(false);
  });
});
