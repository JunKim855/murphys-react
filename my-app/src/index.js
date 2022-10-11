import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons'

const TopBar = () => (
  <Navbar expand="lg" id="top-bar">
    <Container>
      <Nav className="justify-content-start">
        <Nav.Link>
          <img width="200" src="http://courses.ics.hawaii.edu/ics314f22/morea/ui-frameworks/murphyslogowhite.png"/>
        </Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link className="text-white">Home</Nav.Link>
        <Nav.Link className="text-white">About Us</Nav.Link>
        <Nav.Link className="text-white">St. Patrick's Day</Nav.Link>
        <Nav.Link className="text-white">To Go Ordering</Nav.Link>
        <Nav.Link className="text-white"><Facebook/></Nav.Link>
        <Nav.Link className="text-white"><Twitter/></Nav.Link>
        <Nav.Link className="text-white"><Instagram/></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

const Main = () => (
  <div id="main">
    <h2 id="main-text">
      Now accepting reservations for St Patrick's Day<br/>
      Please call 808-531-0422 for reservation<br/>
      St Patrick's Day To-Go Order can be ordered on our website menu.
    </h2>
  </div>
)

const Footer = () => (
  <footer>
    <Row>
      <Col>
        Lunch
        <hr/>
          Monday-Friday: 11:am - 2:30pm<br/>
          Saturday-Sunday: Not open
      </Col>
      <Col>
        Bar
        <hr/>
          Monday-Friday: 11:am - 2:30pm<br/>
          Saturday-Sunday: Not open
      </Col>
      <Col>
        Dinner
        <hr/>
          Monday-Friday: 11:am - 2:30pm<br/>
          Saturday-Sunday: Not open
      </Col>
    </Row>
  </footer>
)

const Murphys = () => (
  <>
    <TopBar />
    <Main />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Murphys />);