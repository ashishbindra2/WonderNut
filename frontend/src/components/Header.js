import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
  //rafce
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='light'
        variant='light'
        fixed='top'
      >
        <>
          <LinkContainer to='/'>
            <Navbar.Brand>WonderNut</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='#features'>Features</Nav.Link>
              <Nav.Link href='#pricing'>Pricing</Nav.Link>
              <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {/* <LinkContainer to='/cart'> */}
              <Nav.Link>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
              {/* </LinkContainer> } */}
              {/* <LinkContainer to='/login'> } */}
              <Nav.Link eventKey={2}>
                <i className='fas fa-user'></i> Sign In
              </Nav.Link>
              {/* </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </>
      </Navbar>
    </header>
  )
}

export default Header
