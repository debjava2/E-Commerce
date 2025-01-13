import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import HomeSectionCard from './HomeSectionCard';

describe('HomeSectionCard component', () => {
  it('renders with correct image URL', () => {
    const product = { imageUrl: 'https://example.com/image.jpg', title: 'Test Title', brand: 'Test Brand' };
    const { getByAltText } = render(<HomeSectionCard product={product} />);
    expect(getByAltText('')).toHaveAttribute('src', product.imageUrl);
  });

  it('renders with correct title', () => {
    const product = { imageUrl: 'https://example.com/image.jpg', title: 'Test Title', brand: 'Test Brand' };
    const { getByText } = render(<HomeSectionCard product={product} />);
    expect(getByText(product.title)).toBeInTheDocument();
  });

  it('renders with correct brand', () => {
    const product = { imageUrl: 'https://example.com/image.jpg', title: 'Test Title', brand: 'Test Brand' };
    const { getByText } = render(<HomeSectionCard product={product} />);
    expect(getByText(product.brand)).toBeInTheDocument();
  });

  it('throws an error when product is null or undefined', () => {
    expect(() => render(<HomeSectionCard product={null} />)).toThrowError();
    expect(() => render(<HomeSectionCard product={undefined} />)).toThrowError();
  });

  it('throws an error when product is missing required properties', () => {
    const product = { imageUrl: 'https://example.com/image.jpg' };
    expect(() => render(<HomeSectionCard product={product} />)).toThrowError();
  });
});

