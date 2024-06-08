import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../Header';

describe('Header', () => {
  test('renders the header with the correct text and styles', () => {
    render(<Header />);

    const headerElement = screen.getByText('Weather Report');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass('badge');
    expect(headerElement).toHaveStyle('color: white');
    expect(headerElement).toHaveStyle('backgroundColor: rgb(13, 202, 240)');
  });
});
