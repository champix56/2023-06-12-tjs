import React from 'react'
import PropTypes from 'prop-types'
import style from './NavBar.module.css'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
// facultatif si non usage des applications js de bootstrap
// attention pour le js pensez a yarn add jquery et import './..../dist/jquery.js'
// import '../../../../../node_modules/bootstrap/dist/js/bootstrap.js'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const NavBar = (props) => {
  return (
    <div className={style.NavBar} data-testid="NavBar">
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="/">Home</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            {/* <Link to="/thumbnail">Thumbnail</Link>
            <Link to="/editor">new</Link>
            <Link to="/editor/1">editor id1</Link> */}
            <LinkContainer to="/thumbnail">
              <Nav.Link href="/thumbnail">Thumbnail</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/meme">
              <Nav.Link href="/meme">new</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/meme/1">
              <Nav.Link href="/meme/1">Edit id:1</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
NavBar.propTypes = {
}
export default NavBar