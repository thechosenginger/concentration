import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from './header';

describe('Header Test Suite', () => {
  beforeEach(() => render(<Header />));
  it('should have a title', () => {
    const h1Element = screen.getByRole('heading', { level: 1 });
    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toHaveTextContent('Welcome to Concentration!!!');
  });
});
