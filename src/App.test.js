import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard text', () => {
  render(<App />);
  const dashboardElements = screen.getAllByText(/dashboard/i);
  expect(dashboardElements.length).toBeGreaterThan(0);
});
