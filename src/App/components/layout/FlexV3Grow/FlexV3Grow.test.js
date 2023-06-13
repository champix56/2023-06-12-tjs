import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexV3Grow from './FlexV3Grow';

describe('<FlexV3Grow />', () => {
  test('it should mount', () => {
    render(<FlexV3Grow />);
    
    const flexV3Grow = screen.getByTestId('FlexV3Grow');

    expect(flexV3Grow).toBeInTheDocument();
  });
});