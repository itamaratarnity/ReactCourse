import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('מציג Hello עם שם', () => {
  render(<Greeting name="Alice" />);
  const element = screen.getByText(/Hello, Alice!/i);
  expect(element).toBeInTheDocument();
});

test('מציג Hello Guest אם אין שם', () => {
  render(<Greeting />);
  const element = screen.getByText(/Hello, Guest!/i);
  expect(element).toBeInTheDocument();
});
