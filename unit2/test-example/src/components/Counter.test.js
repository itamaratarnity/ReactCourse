import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('בודק שהתצוגה מתחילה מ־0', () => {
  render(<Counter />);
  const heading = screen.getByText(/Counter: 0/i);
  expect(heading).toBeInTheDocument();
});

test('בודק שהמונה עולה ב־1 אחרי לחיצה אחת', () => {
  render(<Counter />);
  const button = screen.getByRole('button', { name: /Add/i });
  fireEvent.click(button);
  const updated = screen.getByText(/Counter: 1/i);
  expect(updated).toBeInTheDocument();
});


