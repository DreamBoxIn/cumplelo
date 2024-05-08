import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Connect button when no user is logged in', () => {
  render(<App />);
  const connectButton = screen.getByText(/Connect/i);
  expect(connectButton).toBeInTheDocument();
});