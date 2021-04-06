// function add(a: number, b: number) {
//   return a + b;
// }

// describe('App', () => {
//   test('first test', () => {
//     expect(add(2, 2)).toBe(4);
//   });
// });

import React from 'react';
import renderer from 'react-test-renderer';
import App from '../FirstTest';

describe('App', () => {
  // Should / When
  // test('should render correctly', () => {
  test.skip('should render correctly', () => {
    renderer.create(<App />);
  });
});
