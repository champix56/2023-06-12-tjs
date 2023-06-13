import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexH1Grow from './FlexH1Grow';

describe('<FlexH1Grow />', () => {
  test('it should mount', () => {
    render(<FlexH1Grow />);
    
    const flexH1Grow = screen.getByTestId('FlexH1Grow');

    expect(flexH1Grow).toBeInTheDocument();
  });
});