import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import {Link} from "react-router-dom"

function Navigator(){

return(
<Navbar bg="dark" expand="lg" variant="dark">
    <Navbar.Brand><Link to="/portfolio">Matthew Weston</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link><Link to="/projects">Projects</Link></Nav.Link>
            <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
        </Nav>
    </Navbar.Collapse>
</Navbar>
)}
export default Navigator