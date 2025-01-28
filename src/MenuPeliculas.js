import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MenuPeliculas({categorias, directores}) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mi Aplicación</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {categorias && categorias instanceof Array && categorias.map(category => <NavDropdown.Item href="#">{category}</NavDropdown.Item>)}              
            </NavDropdown>
            <NavDropdown title="Directores" id="basic-nav-dropdown">
                {directores && directores instanceof Array && directores.map(director => <NavDropdown.Item href="#">{director}</NavDropdown.Item>)}            
            </NavDropdown>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MenuPeliculas;


