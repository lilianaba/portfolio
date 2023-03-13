import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavBar({ currentPage, handlePageChange }) {
  return (
    <div>
      <Container fluid>
        <Row>
          {/* <Col xs={1}>
            <a href="https://github.com/lilianaba">
              <img
                className="avatar"
                src={require(`../Assets/images/me1.png`)}
                alt="me-avatar"
              />
            </a>
          </Col> */}
 <Col className="title">
<Col xs={1}>
            <a href="https://github.com/lilianaba">
              <img
                className="avatar"
                src={require(`../Assets/images/me1.png`)}
                alt="me-avatar"
              />
            </a>
            </Col>
            <Col className="owner">
            <h1 className="pinky name">Liliana Bazand</h1>
            </Col>
          </Col>
          </Row>
          <Row>

          <Col className="d-grid">
            <ul className="nav nav-tabs">
              <li className="nav-item ">
                <a
                  href="#about"
                  onClick={() => handlePageChange("About")}
                  // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                  // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                  className={
                    currentPage === "About" ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#portfolio"
                  onClick={() => handlePageChange("Portfolio")}
                  // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={
                    currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                  }
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={() => handlePageChange("Contact")}
                  // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={
                    currentPage === "Contact" ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#resume"
                  onClick={() => handlePageChange("Resume")}
                  // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={
                    currentPage === "Resume" ? "nav-link active" : "nav-link"
                  }
                >
                  Resume
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavBar;
