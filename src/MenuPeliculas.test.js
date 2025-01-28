import { render, screen } from '@testing-library/react';
import MenuPeliculas from './MenuPeliculas'; 

test('MenuPeliculas renders category and director dropdown menus', () => {
  const mockCategories = ['Action', 'Comedy'];
  const mockDirectores = ['Director A', 'Director B'];

  render(<MenuPeliculas categorias={mockCategories} directores={mockDirectores} />);

  // Check for "Categorias" dropdown
  const categoriasDropdown = screen.getByText('Categorias');
  expect(categoriasDropdown).toBeInTheDocument();

  // Check for "Directores" dropdown
  const directoresDropdown = screen.getByText('Directores');
  expect(directoresDropdown).toBeInTheDocument();
});