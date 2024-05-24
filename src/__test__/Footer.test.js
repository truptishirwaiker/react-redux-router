import { render, screen } from '@testing-library/react';
import Footer from '../Component/Footer'

test('I am Footer', () => {
  render(<Footer/>);
  const linkElement = screen.getByText(/I am Footer/i);
  expect(linkElement).toBeInTheDocument();
});
