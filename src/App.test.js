import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Validation Form h1', () => {
  render(<App />);
  const linkElement = screen.getByText(/Validation Form/i);
  expect(linkElement).toBeInTheDocument();
});
