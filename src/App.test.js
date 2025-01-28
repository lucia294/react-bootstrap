import { render, screen } from '@testing-library/react';
import App from './App';

test('renders categorias', () => {
  render(<App />);
  const linkElement = screen.getByText(/categorias/i);
  expect(linkElement).toBeInTheDocument();
});



test('renders Pelicula component', () => {
  render(<App />);
  const peliculaElement = screen.getByText(/directores/i); 
  expect(peliculaElement).toBeInTheDocument();
});