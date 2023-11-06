
'use client'
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HeaderApp() {
  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><Link href={'/'}>React-Bootstrap</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/home" className='nav-link'>Home</Link>
            <Link href="/blogs"className='nav-link'>Blogs</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderApp;