import React, { useState } from "react";
import "../navbar/Navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

const NavbarMain = () => {


  
  const [colorChange, setColorchange] = useState(false);
  const navigate = useNavigate();
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div
      className={colorChange ? "navbar1 fixed-top" : "mainheader fixed-top"}
      id="headscroll"
    >
      <Navbar bg="" expand="sm" className="main-body ">
        <Container fluid>
          <Navbar.Brand><img src="./dkkkh.png" style={{width:"120px",height:"50px"}}/></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className=" me-auto my-2 my-lg-0 contents  ">
              <Nav.Link
                className="lines"
                onClick={() => {
                  navigate("/");
                }} href="#"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="lines"
                onClick={() => {
                  navigate("/about");
                }}
              >
                About
              </Nav.Link>
              <NavDropdown className="lines " title="Menu"  >
                <div>
                  <NavDropdown.Item
                    className="drop"
                    onClick={() => {
                      navigate("/biriyani");
                    }}
                  >
                    Biriyani
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="drop"
                    onClick={() => {
                      navigate("/chiken");
                    }}
                  >
                    Chicken Delicious
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="drop"
                    onClick={() => {
                      navigate("/veg");
                    }}
                  >
                    Pure Veg Dishes
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="drop"
                    onClick={() => {
                      navigate("/paneer");
                    }}
                  >
                    Paneer Mania
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    className="drop"
                    onClick={() => {
                      navigate("/chines");
                    }}
                  >
                    Chinese Corner
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
              <Nav.Link
                className="lines"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button
                className="butn-n "
                onClick={() => {
                  navigate("/menu");
                }}
              >
                Order Now
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <nav className="  className='main-body  ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto my-2 my-lg-0 contents">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
       
        <button className="btn" type="submit">Order Now</button>
      </form>
    </div>
  </div>
</nav>
         */}
    </div>
  );
};

export default NavbarMain;
