import { Container, Navbar, Nav } from "react-bootstrap"
import "./navbar.css"
import { Link, useLocation } from "react-router-dom"
import React, { useState, useEffect } from "react"

const Navigation = () => {
  const location = useLocation()
  const [activeNav, setActiveNav] = useState(null)

  useEffect(() => {
    setActiveNav(location.pathname)
  }, [location])

  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React.JS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to={"/"}
                className={activeNav === "/" ? "text-info" : " "}
              >
                Homepage
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/albums"}
                className={activeNav === "/albums" ? "text-info" : " "}
              >
                Albums
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/posts"}
                className={activeNav === "/posts" ? "text-info" : " "}
              >
                Posts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}
export default Navigation
