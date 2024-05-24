// src/components/__tests__/Layout.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../Component/Layout';
import Header from '../Component/Header'
import Footer from '../Component/Footer'

// Mocking the Header and Footer components
jest.mock('../Component/Header', () => () => <div>I am Header</div>);
jest.mock('../Component/Footer', () => () => <div>I am Footer</div>);

describe('Layout component', () => {
  it('renders Header, Outlet, and Footer', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    expect(screen.getByText('I am Header')).toBeInTheDocument();
    expect(screen.getByText('I am Footer')).toBeInTheDocument();
  });

  if('Outlet Content', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Layout>
          <div>Outlet Content</div>
        </Layout>
      </MemoryRouter>
    );

    expect(screen.getByText('Outlet Content')).toBeInTheDocument();
  });
});
