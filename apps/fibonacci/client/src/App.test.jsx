import { render, screen } from '@testing-library/react';
import App from './App';

vi.mock('./Fibonacci', function () {
  return {
    default: function () {
      return <div>Fib Component</div>;
    },
  };
});

test('should render the application title', function () {
  render(<App />);
  const titleElement = screen.getByRole('heading', { name: /fibonacci/i });
  expect(titleElement).toBeInTheDocument();
});
