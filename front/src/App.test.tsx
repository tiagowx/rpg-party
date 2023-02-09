import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App render test', () => {
  render(<App />);
  const createBox = screen.getByText(/Criar uma Sala/i);
  const enterBox = screen.getByText(/Entrar na Sala/i);
  expect(createBox).toBeInTheDocument();
  expect(enterBox).toBeInTheDocument();
});
