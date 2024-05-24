import { render, screen } from '@testing-library/react';
import Header from '../Component/Header'

test('I am Header', () => {
  render(<Header/>);
  const linkElement = screen.getByText(/I am Header/i);
  expect(linkElement).toBeInTheDocument();
});
