import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  // Should / When
  test('should render correctly', () => {
    const wrapper = render(<App />);
    wrapper.getByTestId('app');
  });
});
