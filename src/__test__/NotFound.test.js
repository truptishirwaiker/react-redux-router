import { render, screen } from '@testing-library/react';
import NotFound from '../Component/NotFound'

test('i am not found', () => {
  render(<NotFound/>);
  const linkElement = screen.getByText(/i am not found/i);
  expect(linkElement).toBeInTheDocument();
});